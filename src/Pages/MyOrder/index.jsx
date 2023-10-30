import { useContext } from "react"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import { IconBack } from "../../icons"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"

function MyOrder() {
  const context = useContext(ShoppingCartContext)

  return (
    <>
      <Layout className='bg-green-200'>
        <div >
          <Link to='/my-orders' className="flex items-center w-80">
            <IconBack />
            <h1>My Order</h1>
          </Link>
        </div>
        <div className='flex flex-col w-80'>
          {
            context.order?.slice(-1)[0].products.map(product => (
              <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
                />
            ))
          }
        </div>
      </Layout>
    </>
  )
}

export default MyOrder