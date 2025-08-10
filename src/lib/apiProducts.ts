import type { Product } from "./types";

const API_URL = "https://my-api-rho-six.vercel.app/api/v1/items";

export async function fetchProducts() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();
  return data;
}

export async function fetchProductById(id: number) {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = await response.json();

  const filteredData = data.filter((item: Product) => item.id === id);
  return filteredData[0];
}
