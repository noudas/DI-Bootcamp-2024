const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:3003/users");
    const data = await res.json();
    console.log(data);
    render(data);
  } catch (error) {
    console.log(error);
  }
};
getUsers();

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div>${item.name} ${item.email}</div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
};
