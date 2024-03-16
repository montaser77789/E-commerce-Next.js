import ProductList from "./ProductList";
import { axiosInstance } from "@/Utils/axiosInstance";

interface IProduct {
  id: number;
  attributes: {
    title: string;
    description: string;
  };
}
const fetchProducts = async () => {
  const requeseOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };
  try {
    const { data } = await axiosInstance.get("api/products", requeseOptions);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const ProductSection = async () => {
  const data = await fetchProducts();
  console.log(data);

  return (
    <div>
      {data?.data?.map((product: IProduct) => (
        <div key={product.id}>
          <h1>{product.attributes.title}</h1>
          <p>{product.attributes.description}</p>
        </div>
      ))}
      <ProductList />
    </div>
  );
};

export default ProductSection;
