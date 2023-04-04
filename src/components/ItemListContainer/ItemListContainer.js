import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

const ItemListContainer = () => {

    const [destinos, setDestinos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId} = useParams ()

    useEffect(() => {
        setLoading(true)
        const destinosRef = collection(db, "destinos")
        const q = categoryId 
                    ? query(destinosRef, where("category", "==", categoryId))
                    : destinosRef
            getDocs(q)
            .then((res) => {
                setDestinos( res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(() => setLoading(false))
    
    }, [categoryId])

    return (
        <div className="container my-5">

            {
                loading
                ? <Loader />
                : <ItemList items={destinos} />
            }
        </div>
    )
}


export default ItemListContainer