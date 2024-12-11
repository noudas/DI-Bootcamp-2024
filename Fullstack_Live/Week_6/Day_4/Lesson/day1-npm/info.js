import axios from "axios";

export const getUsers = async (url) => {
  try {
    const res = await axios.get(url);
    console.log(res);
    if (res.status === 200) {
      return res.data;
    }
    throw new Error("oops");
  } catch (error) {
    throw new Error("not supported");
  }
};
