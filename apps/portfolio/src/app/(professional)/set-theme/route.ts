import { cookies } from "next/headers";

const r = (request: Request) => {
  const header = request.headers.get("theme");
  if (header) cookies().set("theme", header);

  return new Response(undefined, {
    status: 200,
  });
};

export const POST = r;
export const GET = r;
export const PUT = r;
