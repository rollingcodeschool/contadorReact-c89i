import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Informacion from "./components/Informacion";
import Contador from "./components/Contador";


function App() {
// zona de logica
const anio= new Date();

  return (
    <main className="container my-5">
      <h1>Primer proyecto con React</h1>
      <Informacion comision='c89i' presentacion={true} anioActual={anio} ></Informacion>
      {/* <Informacion /> */}
      <Contador/>
    </main>
  );
}

export default App;
