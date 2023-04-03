import { Link } from "react-router-dom"



const Item = ( {item} ) => {

    return (
        <div className='col-2 m-2'>
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name}/>
            <p>Precio: ${item.price}</p>
            <p><small>Categoria: {item.category}</small></p>
            
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}

export default Item