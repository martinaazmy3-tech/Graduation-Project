
const API_URL = 'https://fakestoreapi.com';

export async function getProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    return data.filter((product) =>
      product.category === "women's clothing" ||
      product.category === "jewelery"
    );
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProduct(id) {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
