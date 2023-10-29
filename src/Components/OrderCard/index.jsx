import { IconCross } from "../../icons"

const OrderCard = props => {
  const { id, title, imageUrl, price, handleDelete } = props
  let renderIconCross
  if (handleDelete) {
    renderIconCross = <IconCross onClick={() => handleDelete(id)} className='cursor-pointer' />   
  }

  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className='text-lg font-medium'>${price}</p>
        {renderIconCross}
      </div>
    </div>
  )
}

export default OrderCard