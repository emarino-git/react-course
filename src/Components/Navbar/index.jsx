import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { IconCarrito, IconDevLogo } from "../../icons"

const Navbar = () => {
  const context = useContext(ShoppingCartContext)  
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-gray-300">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink 
            to='/'
            className='flex items-center'
          >
            <IconDevLogo 
              className='text-3xl'
            />
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/'
            className={({isActive}) => isActive ? activeStyle : undefined }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/clothes'
            className={({isActive}) => isActive ? activeStyle : undefined }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/electronics'
            className={({isActive}) => isActive ? activeStyle : undefined }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/furnitures'
            className={({isActive}) => isActive ? activeStyle : undefined }
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/toys'
            className={({isActive}) => isActive ? activeStyle : undefined }
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/others'
            className={({isActive}) => isActive ? activeStyle : undefined }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          <NavLink>
            mail@admin.com
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/my-orders'
            className={({isActive}) => isActive ? activeStyle : undefined }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/my-account'
            className={({isActive}) => isActive ? activeStyle : undefined }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/sign-in'
            className={({isActive}) => isActive ? activeStyle : undefined }
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink className='flex items-center'>
            <IconCarrito />{context.count}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar