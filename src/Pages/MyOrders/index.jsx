import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from '../../Context'
import OrdersCard from "../../Components/OrdersCard"
import { Link } from "react-router-dom"

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  
  return (
    <>
      <Layout className='bg-green-200'>
        <div >
          <h1>My Orders</h1>
        </div>
        {
          context.order.map((order, index) => {
            <Link 
              key={index} 
              to={`/my-orders/${order.id}`}
              >
              <OrdersCard 
                totalPrice={order.totalProducts} 
                totalProducts={order.totalProducts} 
                />
            </Link>
          })
        }
      </Layout>
    </>
  )
}

export default MyOrders