import Redis, { RedisOptions } from "ioredis";

function getRedisConfiguration(): {
  port: number;
  host: string;
  password: string;
} {
  const url = process.env.LOCAL_REDIS_URL ?? process.env.REDIS_URL;
  if (!url) throw new Error("[Redis] No Connection URI Specified");
  const [user, passAndHost, port] = url.split("//")![1]!.split(":");
  if (!user || !passAndHost || !port)
    throw new Error("[Redis] Invalid Connection URI Specified");
  const [password, host] = passAndHost.split("@");
  if (!password || !host)
    throw new Error("[Redis] Invalid Connection URI Specified");

  return {
    
    port: Number(port),
    host,
    password,
  };
}

export function createRedisInstance(config = getRedisConfiguration()) {
  try {
    const options: RedisOptions = {
      host: config.host,
      lazyConnect: true,
      showFriendlyErrorStack: true,
      enableAutoPipelining: true,
      maxRetriesPerRequest: 0,
      retryStrategy: (times: number) => {
        if (times > 3) {
          throw new Error(`[Redis] Could not connect after ${times} attempts`);
        }

        return Math.min(times * 200, 1000);
      },
    };

    if (config.port) {
      options.port = config.port;
    }

    if (config.password) {
      options.password = config.password;
    }

    options.username = "default";

    const redis = new Redis(options);

    redis.on("error", (error: unknown) => {
      console.warn("[Redis] Error connecting", error);
    });

    return redis;
  } catch (e) {
    throw new Error(`[Redis] Could not create a Redis instance`);
  }
}
