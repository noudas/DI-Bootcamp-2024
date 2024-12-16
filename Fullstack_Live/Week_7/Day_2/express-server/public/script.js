const allProds = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/products", {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
    render(data);
  } catch (error) {
    console.log(error);
  }
};
allProds();

const handleSubmit = async (e) => {
  e.preventDefault();
  const prod_name = e.target.product_name.value;
  const prod_price = e.target.product_price.value;
  // console.log(prod_name, prod_price);
  const objJson = {
    name: prod_name,
    price: prod_price,
  };
  console.log(JSON.stringify(objJson));
  try {
    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(objJson),
    };
    const res = await fetch("http://localhost:3001/api/products", options);
    const data = await res.json();
    render(data);
  } catch (error) {
    console.log(error);
  }
};

const handleUpdate = async (e) => {
  e.preventDefault();
  const id = e.target.product_id.value;
  const name = e.target.product_name.value;
  const price = e.target.product_price.value;
  try {
    const res = await fetch(`http://localhost:3001/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id, name, price }),
    });
    const data = await res.json();
    render(data);
  } catch (error) {
    console.log(error);
  }
};

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div style="display:inline-block;
    border:1px solid #000;
    margin:20px;
    padding:20px;
    text-align:center;
    ">
      <h2>${item.name}</h2>
      <p>${item.price}</p>
    </div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
};
