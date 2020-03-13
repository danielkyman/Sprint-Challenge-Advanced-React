import React from "react";
import PlayerCard from "./components/PlayerCard";
import Toggle from "./components/toggle";
import { useDarkMode } from "./hooks/useDarkMode";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data);
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log("player - ", err));
  }

  render() {
    return (
      <div className="App">
        <h1>Womens World Cup</h1>
        <Toggle />
        <div>
          {this.state.players.map(data => (
            <PlayerCard data={data} key={data.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
