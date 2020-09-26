import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import CantidadPokemon from "./components/CantidadPokemon";
// import CompraPokemon from "./components/CompraPokemon";
import { Provider } from "react-redux";
import store from "./redux/store";
import CantidadPokemonHook from "./components/CantidadPokemonHook";
import CompraPokemonHook from "./components/CompraPokemonHook";

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{ maxWidth: "370px" }}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img
                    className="card-img"
                    src={require("./img/pokemon-ball.jpg")}
                    alt="pokemon"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantidadPokemonHook />
                    </div>
                    <CompraPokemonHook />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
