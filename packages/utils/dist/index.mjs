// src/config.ts
import Axios from "axios";
function constructConfigURL(paths) {
  return `${process.env.EDGE_CONFIG_BASE_URL}/${paths.join("/")}`;
}
function constructConfigHeaders() {
  return {
    Authorization: `Bearer ${process.env.EDGE_CONFIG_TOKEN}`
  };
}
async function get(key) {
  try {
    const data = await Axios.get(constructConfigURL(["item", key]), {
      headers: constructConfigHeaders()
    });
    if (data.status != 200) {
      return null;
    } else
      return data.data;
  } catch (e) {
    return null;
  }
}
export {
  get
};
