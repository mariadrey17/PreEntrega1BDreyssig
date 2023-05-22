import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import succession from '../../../../Assets/img/succession.jpg';
import yellowjackets from '../../../../Assets/img/yellowjackets.jpg';
import starstrek from '../../../../Assets/img/starstrek.jpg';
import elmundooculto from '../../../../Assets/img/elmundooculto.jpg';
import verdades from '../../../../Assets/img/verdades.jpg';
import elclon from '../../../../Assets/img/elclon.jpg';
import señoraacero from '../../../../Assets/img/señoraacero.jpg';
import vidasrobadas from '../../../../Assets/img/vidasrobadas.jpg';
import suleiman from '../../../../Assets/img/suleiman.jpg';
import tierraamarga from '../../../../Assets/img/tierraamarga.jpg';
import './CardSeries.css';

function CardSeries() {
  return (
  
    <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src=   {succession} />
      <Card.Body>
        <Card.Title>Succession temporada 4</Card.Title>
        <Card.Text>
        Una serie sobre una familia de gran Poder ¿quien se quedarcon waystar?
        </Card.Text>
        <Button variant="primary">comprar</Button>
      </Card.Body>
    </Card>  


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {yellowjackets} />
      <Card.Body>
        <Card.Title>Yellow Jackets temporada 2</Card.Title>
        <Card.Text>
        Esta épica de supervivencia,una historia de terror psicológico y 
        un drama sobre la mayoría de edad a partes iguales cuenta la saga de un equipo de talentosas jugadoras de fútbol de secundaria 
        que se convierten en las (desafortunadas) sobrevivientes de un accidente de avión en lo profundo del remoto desierto del norte. 
        La serie narra su descenso de un equipo complicado pero próspero a clanes salvajes,
        al tiempo que rastrea las vidas que intentaron reconstruir casi 25 años después.
        </Card.Text>
        <Button variant="primary">comprar</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {starstrek} />
      <Card.Body>
        <Card.Title>Star strek : Picard temporada 3</Card.Title>
        <Card.Text>
        Serie se ambientada 18 años después de la última aparición de Jean-Luc Picard en "Star Trek: Nemesis",
        y encuentra al personaje profundamente afectado por la destrucción de Romulus como se muestra en la película "Star Trek"
        </Card.Text>
        <Button variant="primary">comprar</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {elmundooculto} />
      <Card.Body>
        <Card.Title>El mundo oculto de Sabrina</Card.Title>
        <Card.Text>
        La magia y las travesuras marcan el rumbo de Sabrina,
        una adolescente de doble naturaleza que se debate entre el mundo de los mortales 
        y el que se oculta debajo.
        </Card.Text>
        <Button variant="primary">comprar</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {verdades} />
      <Card.Body>
        <Card.Title>Verdades Secretas 2</Card.Title>
        <Card.Text>
        La seductora Ángel regresa en la segunda temporada de Verdades Secretas. Ahora viuda, sin plata y con un hijo enfermo que mantener,
        regresa al glamoroso mundo de la moda y la prostitución de lujo. Mientras tanto,
        decidida a demostrar que Ángel mató a su padre, Alex, Giovanna contrata a un misterioso investigador,
        que acaba enamorándose de la modelo.
        </Card.Text>
        <Button variant="primary">comprar</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={elclon} />
      <Card.Body>
        <Card.Title>El clon (Brasil)</Card.Title>
        <Card.Text>
        La turbulenta historia de amor de Lucas y Jade,
        que comienza en 1980,en Marruecos y 
        se extiende hasta la actualidad Rio de Janeiro.
        </Card.Text>
        <Button variant="primary">comprar</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {señoraacero} />
      <Card.Body>
        <Card.Title>Señora Acero temporada 4</Card.Title>
        <Card.Text>
        La 4ta temporada de la exitosa serie ¨Señora Acero¨ gira en torno a la vida de Vicenta Acero (Carolina Miranda),
        una mujer fuerte que lucha por un mejor trato de los muchos inmigrantes 
        que cruzan una de las fronteras más largas del mundo enfrentándose al gobierno de México 
        y la patrulla fronteriza de Estados Unidos.
        </Card.Text>
        <Button variant="primary">comprar</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {vidasrobadas} />
      <Card.Body>
        <Card.Title>Vidas Robadas</Card.Title>
        <Card.Text>
        La trama central de la historia gira alrededor de Juliana Miguez, 
        una joven de Río Manso que es secuestrada e introducida por la fuerza dentro de una red de prostitución.
        Sus padres,Rosario Soler y Juan Miguez 
        desde ese momento hacen todo lo que esté a su alcance para encontrar y recuperar a su hija
        </Card.Text>
        <Button variant="primary">comprar</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {suleiman} />
      <Card.Body>
        <Card.Title>El Sultan Suleiman</Card.Title>
        <Card.Text>
        El Gran Sultan, esta serie turca histórica basada en hechos reales 
        cuenta la vida de Solomon I o Suleiman,
        el gran sultán que gobernó todo el imperio otomano expandiendo su territorio
        </Card.Text>
        <Button variant="primary">comprar</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {tierraamarga} />
      <Card.Body>
        <Card.Title>Tierra Amarga</Card.Title>
        <Card.Text>
        Situado en 1970, narra la historia de amor entre Zuleyha y Yilmaz; un amor legendario que comienza en Estambul
        y continúa en las tierras fértiles del sur de Turquía.
        Tendrá que afrontar las pruebas del mal,la ambición y la tiranía.
        </Card.Text>
        <Button variant="primary">comprar</Button>
      </Card.Body>
    </Card>
        
</div>

  );
}

export default CardSeries;





