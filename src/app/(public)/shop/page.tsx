import { API_URL } from "@/constants/constants"
import { Product, type IProduct } from "./Product"

export default async function ShopPage() {
    const response = await fetch(API_URL, {next: {revalidate: 300}})
    const products = (await response.json()) as IProduct[]
  return <div className="grid grid-cols-3 gap-4">
    {products.map(item=>(
        <Product key={item.id} {...item}
        />
    ))}
  </div>
}
