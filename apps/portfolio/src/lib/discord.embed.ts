// title?	string	title of embed
// type?	string	type of embed (always "rich" for webhook embeds)
// description?	string	description of embed
// url?	string	url of embed
// timestamp?	ISO8601 timestamp	timestamp of embed content
// color?	integer	color code of the embed
// footer?	embed footer object	footer information
// image?	embed image object	image information
// thumbnail?	embed thumbnail object	thumbnail information
// video?	embed video object	video information
// provider?	embed provider object	provider information
// author?	embed author object	author information
// fields?	array of embed field objects	fields information, max of 25

import { z } from "zod";

const DiscordEmbedFieldParser = z.object({
  name: z.string().max(256).optional(),
  value: z.string().max(1024).optional(),
  inline: z.boolean().optional(),
});

export type DiscordEmbedField = z.infer<typeof DiscordEmbedFieldParser>;

export const DiscordEmbedParser = z.object({
  title: z.string().max(256).optional(),
  description: z.string().max(4096).optional(),
  fields: z.array(DiscordEmbedFieldParser).max(25).optional(),
  footer: z
    .object({
      text: z.string().max(2048).optional(),
    })
    .optional(),
  author: z
    .object({
      name: z.string().max(256),
    })
    .optional(),
});

export interface DiscordEmbedAuthor {
  name: string;
  url?: string;
  icon_url?: string;
  proxy_icon_url?: string;
}
export interface DiscordEmbedThumbnail {
  url: string;
  proxy_url?: string;
  width?: number;
  height?: number;
}
export interface DiscordEmbedProvider {
  name?: string;
  url?: string;
}
export interface DiscordEmbedFooter {
  text: string;
  icon_url?: string;
  proxy_icon_url?: string;
}
export interface DiscordEmbedImage {
  url: string;
  proxy_url?: string;
  width?: number;
  height?: number;
}
export interface DiscordEmbedVideo {
  url?: string;
  proxy_url?: string;
  width?: number;
  height?: number;
}
export type DiscordEmbedType = "rich"; // Always rich. May be depreciated. Not used

export interface DiscordEmbed {
  title?: string;
  type?: DiscordEmbedType;
  description?: string;
  url?: string;
  timestamp?: number;
  color?: number;
  footer?: DiscordEmbedFooter;
  image?: DiscordEmbedImage;
  thumbnail?: DiscordEmbedThumbnail;
  video?: DiscordEmbedVideo;
  provider?: DiscordEmbedProvider;
  author?: DiscordEmbedAuthor;
  fields?: DiscordEmbedField[];
}

export const buildDiscordEmbed = (embedData: DiscordEmbed) => {
   DiscordEmbedParser.parse(embedData);

   return embedData
   
};
