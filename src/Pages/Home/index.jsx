import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setItems(json))
  }, [])

  return (
    <>
      <Layout className='bg-green-200'>
        Home
        <div className='grid gap-3 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map(item => (<Card key={item.id} data={item} />))
        }
        </div>
      </Layout>
    </>
  )
}

export default Home
