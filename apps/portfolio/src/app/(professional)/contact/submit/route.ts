import { sendWebhookMessage } from "@/lib/discord";
import { DiscordEmbedParser, buildDiscordEmbed } from "@/lib/discord.embed";
import { createRedisInstance } from "@/lib/redis";
import { contactSchema } from "@/lib/types";
import z, { ZodError } from "zod";

const sendMessage = ({ content, contact, subject }: contactSchema) => {
  sendWebhookMessage(
    {
      embeds: [
        {
          color: parseInt(
            [20, 200, 220].map((n) => n.toString(16)).join(""),
            16
          ),
          footer: {
            text: contact,
          },
          description: `### ${subject}\n\n${content}`,
        },
      ],
    },
    process.env.CONTACT_WEBHOOK_URL
  );
};

export const POST = async (request: Request) => {
  const redis = createRedisInstance();
  const ip = request.headers.get("X-Forwarded-For");
  const key = `rate-limit::${ip?.split(",")[0]}`;
  if (!ip || (await redis.get(key)))
    return new Response(null, {
      status: 429,
    });
  try {
    const requestBody = await request.json();
    const data = contactSchema.parse(requestBody);

    sendMessage(data);

    redis.set(key, Date.now(), "EX", 5 * 60); // Rate limit for 5 minutes per IP

    return new Response(null, {
      status: 204,
    });
  } catch (e) {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    if (e instanceof ZodError)
      return new Response(JSON.stringify(e.issues), {
        headers,
        status: 400,
      });

    if (e instanceof Error)
      return new Response(JSON.stringify({ message: e.message }), {
        headers,
        status: 400,
      });

    return new Response(
      JSON.stringify({
        message: "Unknown Error",
      }),
      {
        headers,
        status: 400,
      }
    );
  }
};
