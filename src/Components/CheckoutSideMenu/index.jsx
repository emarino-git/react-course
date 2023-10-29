import { useContext } from 'react'
import { Link } from 'react-router-dom'
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

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
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
      <div className='px-6 overflow-y-scroll flex-1'>
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
      <div className='px-6 mb-6'>
        <p className='flex justify-between mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className='w-full py-3 text-white rounded-lg bg-black' onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu