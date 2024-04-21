// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tags from "./Tags";


function MyCard({ imageUrl, nombre, descripcion, colorBadge, textBadge }) {
    return (
        <Card style={{ width: "17rem" }} className="mx-2 justify-center bg-ligth">
          <Card.Img variant="top" src={imageUrl} /> {/* Usa la imagen proporcionada como prop desde App.jsx*/}
          <Card.Body>
            <Card.Title>{nombre}</Card.Title> {/* Usa el nombre proporcionado como prop desde App.jsx*/}
            <Card.Text>
              {descripcion} {/* Usa la descripción proporcionada como prop desde App.jsx */}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> // El botón no se usa, se reeplaza por Badge */}
            <Tags colorBadge={colorBadge} textBadge={textBadge} /> {/* Badge contiene dos props y son entregaos en App.jsx */}
          </Card.Body>
        </Card>
      );
    }
    
    export default MyCard;