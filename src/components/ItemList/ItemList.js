import Item from "../Item/Item"
import './ItemList.css'



const ItemList = ( {items} ) => {

    return (
        <div className="swing-in-top-fwd">
            <h2 className="list-container__title">Encontra tu proximo destino</h2>
            <hr/>

            <div className='row'>
                { items.map((destino) => <Item key={destino.id} item={destino}/>) }
            </div>
        </div>
    )
}

export default ItemList