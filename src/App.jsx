import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />

      <section className="card-container">
        <Card
          title="Gastronomía"
          description="La gastronomía coreana está principalmente basada en arroz, vegetales y carne. Las comidas coreanas tradicionales son conocidas por la gran variedad de guarniciones"
          image="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        <Card
          title="Historia y Patrimonio"
          description="El Centro histórico de Gyeongju, conocido como «la ciudad museo de Corea», es un lugar único declarado Patrimonio de la Humanidad por la UNESCO en el 2000."
          image="https://images.unsplash.com/photo-1627045912836-1846d3847ae2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        <Card
          title="Idioma Coreano"
          description="El idioma coreano es el idioma oficial de Corea del Sur. Aprender coreano te permite tener una comprensión más profunda de la cultura coreana."
          image="https://media.istockphoto.com/id/547050836/es/foto/pregunta-hablas-coreano-escrito-en-coreano.jpg?s=612x612&w=0&k=20&c=ts5hmdfZPdcZOTYXehQIOLkJMMQsvqqQislssSgBBZM="
        ></Card>
        <Card
          title="Kpop y Kdrama"
          description="El Kpop es un género musical que se originó en Corea y es conocido por su música y bailes pegajosos. Los Kdramas son series conocidas por sus historias emocionantes y actuaciones destacadas."
          image="https://6.viki.io/image/af5e19218dc84da7897735df0e3f90b0.jpeg?s=900x600&e=t"
        ></Card>
      </section>

      <Footer />
    </>
  );
}

export default App;
