import {
  DiscordEmbed,
  DiscordEmbedParser,
  buildDiscordEmbed,
} from "./discord.embed";

const processWebhookURL = (webhookURL?: string) => {
  if (!webhookURL)
    throw new Error("(DEVELOPER ERROR): No ContactWebhookURL set.");
  const parts = webhookURL.split("/");
  const token = parts.pop();
  const id = parts.pop();
  if (!id || !token)
    throw new Error("(DEVELOPER ERROR): Invalid ContactWebhookURL.");
  return { id, token };
};

const buildWebhookRequestURL = (webhookURL?: string) => {
  const baseURL = "https://discord.com/api";
  const { id, token } = processWebhookURL(webhookURL);
  return `${baseURL}/webhooks/${id}/${token}`;
};

export const sendWebhookMessage = (
  content: {
    content?: string;
    username?: string;
    avatar_url?: string;
    tts?: boolean;
    embeds?: DiscordEmbed[];
  },
  webhookURL?: string
) => {
  const requestURL = buildWebhookRequestURL(webhookURL);

  const headers = new Headers();
  headers.set(
    "User-Agent",
    `Hycord Portfolio / User: 322144499734151169 | Guild: 1034684270817591306 `
  );
  headers.set("Content-Type", "application/json");

  if (content.embeds?.length) {
    content.embeds.forEach((e) => DiscordEmbedParser.parse(e));
  }

  fetch(requestURL, {
    method: "POST",
    headers,
    body: JSON.stringify(content),
  }).then(async (r) => {
    if (r.status != 204) {
      console.log(await r.json());
    }
  });
};

type APIEmbed = {};
