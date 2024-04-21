// App.jsx
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="titulo p-2">
        <Header title="ADOPTA UN PERRITO" />
      </div>

      {/* Aquí puedes agregar más contenido */}
      <div className="d-flex justify-content-center">
                <MyCard
            nombre="Bella"
            descripcion="Aunque parezca tímida al principio, soy cariñosa y leal. Disfruto de largas siestas al sol y de los momentos tranquilos en casa."
            imageUrl="https://img.freepik.com/free-photo/beautiful-pet-portrait-dog_23-2149218450.jpg?t=st=1713733881~exp=1713737481~hmac=058ece174a3f6509871e73a61e3b22601c2b5466cbe722918a4281af9a19e1ec&w=1060"
            colorBadge="info"
            textBadge="Apopta a Bella"
          />
          <MyCard
            nombre="Cookie"
            descripcion="¡Hola, soy Cookie! Busco un hogar lleno de amor y aventuras. Soy un compañero leal y estoy lleno de energía para jugar."
            imageUrl="https://img.freepik.com/free-photo/english-cream-golden-retriever-isolated_155003-32567.jpg?t=st=1713733904~exp=1713737504~hmac=e054de2718a03f33c29f3f6e9011014ceebe74024103f5d9e17cafcc8deb1f85&w=900"
            colorBadge="secondary"
            textBadge="Adopta a Cookie"
          />
          <MyCard
            nombre="Luna"
            descripcion="¡Hola, hola! Soy Luna, y busco una familia para amar. Me encanta dar paseos y las caricias en la barriga."
            imageUrl="https://img.freepik.com/premium-photo/pink-background-funny-pug-dog-wears-pink-glasses_410516-58185.jpg?w=900"
            colorBadge="danger"
            textBadge="Apopta a Luna"
          />
          <MyCard
            nombre="Max"
            descripcion="Me gusta jugar con una pelota y correr por el parque. Estoy listo para encontrar un hogar donde pueda compartir mi alegría y energía."
            imageUrl="https://img.freepik.com/free-photo/lovely-pet-portrait-isolated_23-2149192355.jpg?t=st=1713734971~exp=1713738571~hmac=bbb9dfde0387f9b6edeb240094855044c5947980fd30b398550586e675dcd5f8&w=900"
            colorBadge="success"
            textBadge="Adopta a Max"
          />
   
      </div>

      <div className="my-3">
        <Footer />
      </div>
    </>
  );
};

export default App;
