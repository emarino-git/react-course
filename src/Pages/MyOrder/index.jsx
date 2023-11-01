import { useContext } from "react"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import { IconBack } from "../../icons"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPatch = window.location.pathname
  let index = currentPatch.substring(currentPatch.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length -1

  return (
    <>
      <Layout className='bg-green-200'>
        <div >
          <Link to='/my-orders' className="flex items-center justify-center w-80">
            <IconBack />
            <h1 className="font-medium text-xl">My Order</h1>
          </Link>
        </div>
        <div className='flex flex-col w-80'>
          {
            context.order?.[index]?.products.map(product => (
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