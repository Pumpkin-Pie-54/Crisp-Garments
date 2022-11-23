import { Route, Routes, Link } from "react-router-dom"

export default function Navbar({ category, setCategory }) {
  return (
    <nav className="nav">
      <button onClick={() => {setCategory('')}} className="site-title">Crisp Garments</button>
      <ul>
        <button className='nav-button' onClick={() => {setCategory('men\'s clothing')}}>Men's Clothing</button>
        <button className='nav-button' onClick={() => {setCategory('jewelery')}}>Jewelry</button>
        <button className='nav-button' onClick={() => {setCategory('electronics')}}>Electronics</button>
        <button className='nav-button' onClick={() => {setCategory('women\'s clothing')}}>Women's Clothing</button>
        <li className="nav-link"><Link category={category} to='/cart'>Cart</Link></li> 
        <li className="nav-link"><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  )
}