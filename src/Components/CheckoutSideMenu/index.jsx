import { useContext } from 'react'
import { IconCross } from '../../icons'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  
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
    </aside>
  )
}

export default CheckoutSideMenu