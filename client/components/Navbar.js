import { Link } from "react-router-dom";
import { useContext } from 'react';
import { TotalCartContext } from "../context/TotalCartContext.jsx";

export default function Navbar({ category, setCategory }) {
  const {totalCart, setTotalCart} = useContext(TotalCartContext);
  return (
    <nav className="nav">
      <button onClick={() => {setCategory('')}} className="site-title">Crisp Garments</button>
      <ul>
        <Link className="nav-buttons" to='/'>
          <button className='nav-button' onClick={() => {setCategory('men\'s clothing')}}>Men's Clothing</button>
          <button className='nav-button' onClick={() => {setCategory('jewelery')}}>Jewelry</button>
          <button className='nav-button' onClick={() => {setCategory('electronics')}}>Electronics</button>
          <button className='nav-button' onClick={() => {setCategory('women\'s clothing')}}>Women's Clothing</button>
        </Link>
    
        <li className="nav-link"><Link category={category} to='/cart'>Cart ({totalCart.length})</Link></li> 
        <li className="nav-link"><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
    )
}