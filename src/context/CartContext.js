import { useState, createContext } from "react";


export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
  

    const agregarAlCarrito = (item) => {
      setCart([...cart, item])
    }

    const removerItem = (id) => {
        setCart( cart.filter((dest) => dest.id !== id) )
    }

    

    const isInCart = (id) => {
      return cart.some((dest) => dest.id === id)
    }

    const totalCantidad = () => {
      return cart.reduce((acc, dest) => acc + dest.cantidad, 0)
    }

    const totalCarrito = () => {
        return cart.reduce((acc, dest) => acc + dest.cantidad * dest.price, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            vaciarCarrito,
            removerItem,
            totalCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}