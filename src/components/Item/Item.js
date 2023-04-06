import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"




const Item = ( {item} ) => {
    return (
        <div className='container-item col-2 m-5'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.img} alt={item.name} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
             Vuelo + Hotel + Traslados
            </Card.Text>
            <strong>8 dias / 7 Noches</strong>
            <p>Precio por persona: ${item.price}</p>
            <p><small>Categoria: {item.category}</small></p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
          </Card.Body>
        </Card>
        </div>
      );

}

   /* return (
        <div className='col-2 m-2'>
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name}/>
            <p>Precio: ${item.price}</p>
            <p><small>Categoria: {item.category}</small></p>
            
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
} */

export default Item