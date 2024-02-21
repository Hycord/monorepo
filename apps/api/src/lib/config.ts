import Axios from "axios";

// EDGE_CONFIG_BASE_URL
// EDGE_CONFIG_TOKEN

function constructConfigURL(paths: string[]) {
  return `${process.env.EDGE_CONFIG_BASE_URL}/${paths.join("/")}`;
}

function constructConfigHeaders() {
  return {
    Authorization: `Bearer ${process.env.EDGE_CONFIG_TOKEN}`,
  };
}

export async function get<T extends Object>(key: string): Promise<T | null> {
  const data = await Axios.get(constructConfigURL(["item", key]), {
    headers: constructConfigHeaders(),
  });

  if (data.status != 200) {
    return null;
  } else return data.data as T;
}
