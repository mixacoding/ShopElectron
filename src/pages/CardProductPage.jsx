import { useSelector } from "react-redux"

function CardProductPage() {

  const { cart } = useSelector((state)=>state.cartStore)

console.log(cart);

  return (
    <div>
      CardProductPage
    </div>
  )
}

export default CardProductPage
