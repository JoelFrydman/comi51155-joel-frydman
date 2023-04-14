import Card from "react-bootstrap/Card";
import brasil from "../../assets/imgs/brasil.png";
import paris from "../../assets/imgs/paris.png";
import york from "../../assets/imgs/york.png";

const Promociones = () => {
  return (
    <div>
      <h2>
        Promociones unicas
        <hr />
      </h2>

      <Card className="container m-5">
        <Card.Img variant="top" src={york} />
        <Card.Body>
          <Card.Title>Canada 7 noches</Card.Title>
          <span>$650000 por persona</span>
          <Card.Text>
            Canadá es el país norteamericano que se extiende desde los Estados
            Unidos en el sur hasta el círculo polar ártico en el norte. Las
            ciudades principales incluyen la enorme Toronto, Vancouver, el
            centro cinematográfico de la costa oeste, las ciudades de habla
            francesa Montreal y Quebec, y la capital Ottawa.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 45 mins ago - </small>
          <strong className="text-muted">AGOTADO</strong>
        </Card.Footer>
      </Card>
      <Card className="container m-5">
        <Card.Img variant="top" src={brasil} />
        <Card.Body>
          <Card.Title>Maldivas 7 noches</Card.Title>
          <span>$400000 por persona</span>
          <Card.Text>
            Maldivas es un país tropical en el océano Índico que abarca 26
            atolones con forma de anillos que se componen de más de 1,000 islas
            de coral. Es conocido por las playas, las lagunas azules y los
            extensos arrecifes.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 45 mins ago - </small>
          <strong className="text-muted">AGOTADO</strong>
        </Card.Footer>
      </Card>
      <Card className="container m-5">
        <Card.Img variant="top" src={paris} />
        <Card.Body>
          <Card.Title>Francia 10 noches</Card.Title>
          <span>$700000 por persona</span>
          <Card.Text>
            Francia, en Europa Occidental, abarca ciudades medievales, villas
            alpinas y playas mediterráneas. París, su capital, es famosa por sus
            firmas de alta costura, los museos de arte clásico, como el Louvre,
            y monumentos como la Torre Eiffel. El país también es reconocido por
            sus vinos y su gastronomía sofisticada.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 45 mins ago - </small>
          <strong className="text-muted">AGOTADO</strong>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Promociones;
