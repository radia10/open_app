
import './App.css';
import Banner from './composants/Banner';
import Cart from './composants/Cart';
import ShoppingList from './composants/ShoppingList';
//import QuestionForm from './composants/QuestionForm';

import './styles/app.scss';
import { useState,useEffect } from 'react';



function App() {
  //const [cart, updateCart] = useState([])
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  return <div>
  <Banner />
  <div id="card"><Cart cart={cart} updateCart={updateCart} /></div>
  <div id='shop'><ShoppingList cart={cart} updateCart={updateCart}/></div>
 
  </div>

}

export default App;
