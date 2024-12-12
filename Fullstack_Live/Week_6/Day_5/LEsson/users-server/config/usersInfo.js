const getInfo = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getInfo,
};
