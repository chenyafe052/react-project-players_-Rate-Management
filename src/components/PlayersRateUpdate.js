import React from "react";
import Player from "./Player";

export default class PlayerByRateTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFilled: false,
      // isOpen: false,
      athletes: []
    };
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

  renderPlayers = () => {
    return (
      <div className="ui container">
        {this.state.players.map(this.eachPlayer)}
      </div>
    );
  };

  send = event => {
    event.preventDefault();

    let params = {
      playerName: this.name,
      newRate: this.rate
    };

    const url = `https://playersratemanagement1.herokuapp.com/setPlayerRate`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
      .then(res => res.json())
      .catch(err => {
        console.log(err);
      });
    this.setState({ formFilled: true });
  };

  renderUpdate = () => {
    return (
      <div style={{ textAlign: "center", marginTop: "15%" }}>
        <h2>Updated!</h2>
        <h3>Check out Players details</h3>
      </div>
    );
  };

  renderForm = props => {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Player's Name</label>

            <select ref={input => (this.playerName = input)}>
            {" "};
              //need to change to be dynamic
              <option value="David Beckam">David Beckam</option>
              <option value="Paul Pogba">Paul Pogba</option>
              <option value="Leo Messi">Leo Messi</option>
              <option value="Avi Shpoongin">Avi Shpoongin</option>
              <option value="Christiano Ronaldo">Christiano Ronaldo</option> */}
              <option value="Gareth Bail">Gareth Bail</option>
              <option value="Idan">Idan</option>
            </select>
          </div>
          <div className="field">
            <label>Players's new rate</label>
            <input type="text" ref={input => (this.newRate = input)} />
          </div>
          <button className="ui right labeled icon button" onClick={this.send}>
            <i className="right arrow icon" />
            Send
          </button>
        </form>
      </div>
    );
  };

  render() {
    return this.state.formFilled ? this.renderUpdate() : this.renderForm();
  }
}

