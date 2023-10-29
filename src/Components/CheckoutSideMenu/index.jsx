import { useContext } from 'react'
import { IconCross } from '../../icons'
import { ShoppingCartContext } from '../../Context'
import './styles.css'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }
  
  return (
    <aside 
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} ceckout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My order</h2>
        <p 
          className={`cursor-pointer`}
          onClick={context.closeCheckoutSideMenu}>
          <IconCross />
        </p>
      </div>
      <div className='px-6 overflow-y-scroll'>
        {
          context.cartProducts.map(product => (
            <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete={handleDelete}
              />
          ))
        }
      </div>
      <div className='px-6'>
        <p className='flex justify-between'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>{totalPrice(context.cartProducts)}</span>
        </p>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu