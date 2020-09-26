import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";
import "./App.css";

class App extends React.Component {
  render() {
    const app = jokesData.map((joke) => <Joke key={joke.id} joke={joke} />);
    const randomNum = Math.floor(Math.random() * jokesData.length);
    console.log(jokesData[randomNum]);

    console.log(randomNum);
    return (
      <div className="App">
        <header className="App-header">
          <h3>{app}</h3>
        </header>
      </div>
    );
  }
}

export default App;
