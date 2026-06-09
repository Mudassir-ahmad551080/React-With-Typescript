import React from 'react'
import Cart from './components/Cart'
import Counter from './components/Counter'
import type { Chai } from './types/Type'
import Chailist from './components/Chailist'
import OrderForm from './components/OrderForm'

const menu: Chai[] = [
  {
    id: 1,
    name: "Cocacola",
    price: 2000
  },
  {
    id: 2,
    name: "Pepsi",
    price: 1500
  },
  {
    id: 3,
    name: "Sprite",
    price: 1800
  }
]

const App = () => {
  return (
    <div className = 'bg-black text-white h-screen flex flex-col items-center justify-center gap-5'>
      <h1>This  is First React with Typescript Series</h1>
      <Cart
       name = "Cocacola"
       price={2000} 
      />
      <Cart
      name = "Pepsi"
      price={1500}
      isSpecial 
      />
      <Counter/>
      <div className=''>
        <Chailist
         items={menu}
        /> 
      </div>
      <div>
        <OrderForm/>
      </div>
    </div>
  )
}

export default App