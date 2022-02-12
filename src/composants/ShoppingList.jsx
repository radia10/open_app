import PlantItem from './PlantItem .jsx';

import { plantList } from '../datas/plantList';
//import logo1 from '../assets/monstera.jpg';


function ShoppingList({ cart, updateCart }) {
    
        /*const categories = plantList.reduce(
            (acc, plant) =>
                acc.includes(plant.category) ? acc : acc.concat(plant.category),
            []
        )*/
        function addToCart(name, price) {
            const currentPlantSaved = cart.find((plant) => plant.name === name)
            if (currentPlantSaved) {
                const cartFilteredCurrentPlant = cart.filter(
                    (plant) => plant.name !== name
                )
                updateCart([
                    ...cartFilteredCurrentPlant,
                    { name, price, amount: currentPlantSaved.amount + 1 }
                ])
            } else {
                updateCart([...cart, { name, price, amount: 1 }])
            }
        }
 
    return (
        <div className='lmj-shopping-list'>
       
        <ul className='lmj-plant-list'>
            {plantList.map(({ id, cover, name, water, light,price }) => (
                <div>
                <PlantItem
                    id={id}
                    cover={cover}
                    name={name}
                    water={water}
                    light={light}
                />
                <button onClick={() => addToCart(name,price)}>Ajouter</button>
                </div>
            ))}
        </ul>
    </div>
    )
}

export default ShoppingList;