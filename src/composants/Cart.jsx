import { useState, useEffect } from 'react';


function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(false)
  const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

    useEffect(() => {
      document.title = `LMJ: ${total}€ d'achats`
  }, [total])

    

    
    


    return isOpen ? (<div className="lmj-cart" >
       
        <h2>Panier</h2>
        <ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
          

          <button className='lmj-cart-toggle-button' onClick={() => updateCart([])}>Vider le panier</button>
          <button  className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
          
          </div>): (
        <button onClick={() => setIsOpen(true) } className='lmj-cart-closed'>Ouvrir le Panier</button>
    )
    }
    export default Cart;