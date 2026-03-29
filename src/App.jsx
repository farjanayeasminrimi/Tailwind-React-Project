import "./App.css";
import Nav from "./components/Nav/Nav";
import Pricings from "./components/Pricings/Pricings";

function App() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <Pricings></Pricings>
      </main>
    </>
  );
}

export default App;
