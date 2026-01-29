import { useState } from "react"


function App(){
    const initialBakery = [
    { id: 1, itemName: "Golden Croissant", price: 3.50, stock: 10 },
    { id: 2, itemName: "Chocolate Muffin", price: 2.75, stock: 5 },
    { id: 3, itemName: "Baguette", price: 4.00, stock: 12 },
    { id: 4, itemName: "Glazed Donut", price: 1.50, stock: 0 }
  ]
  
  const [bakeryData, setBakeryData] = useState(initialBakery)

  function handleBuy(id){
    setBakeryData(prev =>
      prev.map(product => 
         product.id === id ? {...product, stock: Math.max(0, product.stock -1)}: product
      )
    )
  }

  function handleRestock(){
    setBakeryData(prev => 
      prev.map( product => ({...product, stock: 10}))
    )
  }

  return (
    <div>
      <button onClick={()=> handleRestock()}>Restock</button>
      <div>
        {bakeryData.map( product => <Storefront key= {product.id}> <ProductCard product={product} buy = {handleBuy} /> </Storefront>)}
      </div>
    </div>
  )

}

function Storefront({ children }){

  return (
    <div>
      {children}
    </div>
  )
}

function ProductCard({ product, buy }){

  const {id, itemName, price, stock} = product

  return (
    <div>
      <p>Name: {itemName}</p>
      <p>Price: {price}</p>
      <p>Stock: <StockDisplay stock= {stock}/></p>
      <p>{stock >0 ? <button onClick={()=> buy(id)}>BUY</button> : <button>SOLD OUT</button> }</p>
    </div>
  )

}


function StockDisplay({stock}){

  return <b>{stock}</b>
}

export default App