import React from 'react'
import type { Chai } from '../types/Type.ts'
import Cart from './Cart.tsx'

interface ChaiProps {
    items: Chai[]
}

const Chailist = ({ items }: ChaiProps) => {
  return (
    <div>
      {items.map((item) => (
        <Cart
        key={item.id}
        name={item.name}
        price={item.price}
        />
      ))}
    </div>
  )
}

export default Chailist