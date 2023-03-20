import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {

    const [destinos, setDestinos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId} = useParams ()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (categoryId) {
                    setDestinos(res.filter((destinos) => destinos.category === categoryId))
                } else {
                    setDestinos(res)
                }
                
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div className="container my-5">

            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={destinos} />
            }
        </div>
    )
}


export default ItemListContainer