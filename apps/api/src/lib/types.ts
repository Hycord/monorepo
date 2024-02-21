export interface EdgeConfigAPIKey {
  key: string;
  note: string;
  expiration: Date | null;
}

export interface EdgeConfig {
  api_keys: EdgeConfigAPIKey[];
}
