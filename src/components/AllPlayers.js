import React from "react";
import Player from "./Player";

export default class AllPlayers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { players: [] };
  }

  add = ({ _id = null, name = null, age = null, rate = null, team = null }) => {
    this.setState(prevState => ({
      players: [
        ...prevState.players,
        {
          _id: _id,
          name: name,
          age: age,
          rate: rate,
          team: team
        }
      ]
    }
    ));
  };

  eachPlayer = (item, i) => {
    return <Player item={item} key={i} />;
  };

  componentDidMount() {
    const proxy= "https://cors-anywhere.herokuapp.com/"
    const url = "https://playersratemanagement1.herokuapp.com/getAllPlayers";
    fetch(`${proxy}${url}`)
      .then(response => {
        return response.json();
      })
      .then(data =>
        data.map(item =>
          this.add({
            _id: item._id,
            name: item.name,
            age: item.age,
            rate: item.rate,
            team: item.tea
          })
        )
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="ui container ui cards">
        {this.state.players.map(this.eachPlayer)}
      </div>
    );
  }
}
