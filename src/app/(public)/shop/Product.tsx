import Image from "next/image"

export interface IProduct { 
    id: number
    title: string
    image: string
    price: number
}
export const Product = ({title, image, price}: IProduct) => {
  return (
    <div className="text-white border border-neutral-700">
        <Image width={100} height={40} src={image} alt={title} className="object-contain mb-3 rounded"/>
        <h2>{title}</h2>
        <p>${price}</p>
    </div>
  )
}
