import React from 'react'

interface CartProps {
    name: string;
    price: number;
    isSpecial?: boolean;
}

const Cart = ({name,price,isSpecial=false}: CartProps) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>{price}</p>
        {isSpecial && <span>Special Offer!</span>}
    </div>
  )
}

export default Cart