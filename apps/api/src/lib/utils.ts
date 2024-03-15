import { FastifyRequest } from "fastify";
import { EdgeConfig } from "./types.js";
import { get } from "@hycord/util"

export function useCookies(request: FastifyRequest) {
  const cookies = new Map<string, string>();
  if (!request.headers.cookie) return cookies;
  const cookieData = request.headers.cookie.split(";");
  for (const cookie of cookieData) {
    const [key, value] = cookie.split("=");
    cookies.set(key as string, value as string);
  }
  return cookies;
}

export async function getActiveAPITokens() {
  const data = await get<EdgeConfig["api_keys"]>("api_keys");

  if (!data) throw new Error("Error fetching active API tokens.");

  return data
    .map((d) => ({
      ...d,
      expiration: d.expiration ? new Date(d.expiration) : null,
    }))
    .filter((k) => (k.expiration ? k.expiration < new Date() : true));
}

export async function checkAPIToken(token: string, k?: EdgeConfig["api_keys"]) {
  const keys = k ?? ((await get("api_keys")) as EdgeConfig["api_keys"]);
  for (let i = 0; i < keys.length; i++) {
    const data = keys[i]!;
    if (token == data.key) return true;
  }
}

export async function useAuthenticated(request: FastifyRequest) {
  const cookies = useCookies(request);
  const tokens = await getActiveAPITokens();

  // @ts-ignore
  const queryKey = request.query?.api_key;
  if (queryKey) {
    const data = await checkAPIToken(queryKey, tokens);
    if (data) return queryKey;
  }
  const cookieKey = cookies.get("api_key");
  if (!cookieKey) throw new Error("No API Key provided.");
  if (!(await checkAPIToken(cookieKey, tokens)))
    throw new Error("Invalid API key provided.");

  return cookieKey;
}
