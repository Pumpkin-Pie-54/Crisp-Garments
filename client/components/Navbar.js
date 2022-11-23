

import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar({ category, setCategory }) {
  return (
    <nav className="nav">
      <button onClick={() => {setCategory('')}} className="site-title">Crisp Garments</button>
      <ul>
        <button className='nav-button' onClick={() => {setCategory('men\'s clothing')}}>Men's Clothing</button>
        <button className='nav-button' onClick={() => {setCategory('jewelery')}}>Jewelry</button>
        <button className='nav-button' onClick={() => {setCategory('electronics')}}>Electronics</button>
        <button className='nav-button' onClick={() => {setCategory('women\'s clothing')}}>Women's Clothing</button>
        {/* <button className='nav-button' onClick={"Samantha's amazing function"}>Cart</button>
        <button className='nav-button' onClick={"Samantha's amazing function"}>Login</button> */}
      </ul>
    </nav>
  )
}

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }