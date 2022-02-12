import logo from '../assets/leaf.png';
//import Recommandation from './Recommandation.jsx';

function Banner() {
    const title='La maison jungle';
    return (<div className='lmj-banner'>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1  className='lmj-title'>{title}</h1>
        
        
        </div>)
}

export default Banner;