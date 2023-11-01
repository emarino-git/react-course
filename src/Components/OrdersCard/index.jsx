import { IconNext } from "../../icons"

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className="flex justify-between items-center mb-2 border border-black p-4 w-80 rounded-lg">
      <p className="flex w-full justify-between">
        <div className="flex flex-col">
          <span className="font-light">01.02.2023</span>
          <span className="font-light">Artículos: {totalProducts}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <IconNext />
        </div>
      </p>
    </div>
  )
}

export default OrdersCard