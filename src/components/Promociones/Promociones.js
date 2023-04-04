import Card from 'react-bootstrap/Card';
import york from '../../assets/imgs/york.png'
import brasil from '../../assets/imgs/brasil.png'
import paris from '../../assets/imgs/paris.png'

const Promociones = () => {

    return (
    <div>
        <h2>
            Promociones unicas
            <hr/>
        </h2>
       
      <Card className='container m-5'>
        <Card.Img variant="top" src={york} />
        <Card.Body>
          <Card.Title>New York 7 noches</Card.Title>
          <span>$650000</span>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 45 mins ago - </small>
          <strong className="text-muted">AGOTADO</strong>
        </Card.Footer>
      </Card>
      <Card className='container m-5'>
        <Card.Img variant="top" src={brasil} />
        <Card.Body>
          <Card.Title>Natal - Pipa 7 noches</Card.Title>
          <span>$400000</span>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 45 mins ago - </small>
          <strong className="text-muted">AGOTADO</strong>
        </Card.Footer>
      </Card>
      <Card className='container m-5'>
        <Card.Img variant="top" src={paris} />
        <Card.Body>
          <Card.Title>Paris 10 noches</Card.Title>
          <span>$700000</span>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 45 mins ago - </small>
          <strong className="text-muted">AGOTADO</strong>
        </Card.Footer>
      </Card>
    
    </div>
    

)
}


export default Promociones