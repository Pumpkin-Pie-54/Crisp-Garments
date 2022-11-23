import React , {useState, createContext} from 'react'

// const [items, setItems] = useState([]);
//   const [totalCart, setTotalCart] = useState([]);

export const TotalCartContext = createContext();

export const TotalCartContextProvider = 
props => {
    const [totalCart, setTotalCart] = useState([]);

    return (
        <TotalCartContext.Provider value={{totalCart, setTotalCart}}>
            {props.children}
        </TotalCartContext.Provider>
    )
}


