import { FaCartPlus } from 'react-icons/fa'
import './CartWidget.scss'
import { Button } from 'react-bootstrap'

const CartWidget = () => {

    return (
        <div className='cart-widget'>
            <Button variant='success' size='sm'>Finaliza tu compra</Button>
            <FaCartPlus className='cart-icon'/>
            <span>0</span>

        </div>
    )
}

export default CartWidget