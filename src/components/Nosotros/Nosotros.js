import { Card } from "react-bootstrap";
import nosotros from "../../assets/imgs/nosotros.png";

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
            Somos la empresa de viajes líder en Latinoamérica que desde hace más
            de 2 años apuesta por el desarrollo tecnológico para revolucionar
            el mundo de las experiencias. 
            <br></br>
            Tenemos una historia marcada por
            nuestro talento, nuestra exigencia y nuestras ganas de ir siempre
            por más. Somos un equipo de excelencia con un propósito que nos
            convoca: crear las mejores experiencias para que los viajes
            enriquezcan la vida de las personas. 
            <br></br>
            Somos un equipo innovador y en
            constante crecimiento. Trabajamos en
            equipo para destacarnos en lo que hacemos, aprendemos de los mejores
            y nunca paramos de hacer. Porque la acción es evolución, y esa es
            nuestra mejor escuela.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Nosotros;
