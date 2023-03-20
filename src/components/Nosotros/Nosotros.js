import { Card } from "react-bootstrap";
import nosotros from '../../assets/imgs/nosotros.png'

const Nosotros = () => {

    return (

        <div className="container my-5">
            <h2>
                Sobre nosotros:
                <hr />
            </h2>
            <Card className="bg-dark text-black">
                <Card.Img src={nosotros} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Joe's World</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>

                </Card.ImgOverlay>
            </Card>


        </div>
    )
}

export default Nosotros;