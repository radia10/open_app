
import CareScale from './CareScale';

function PlantItem ({name,cover,id,light ,water}) {
    function handleClick(e) {
        console.log('✨ Ceci est mon event :', e)
    }
    return(
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
        
    )
}
    
export default PlantItem 