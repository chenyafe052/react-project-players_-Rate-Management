import React from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="ui tabular menu">
        <NavLink exact to="/2018-2019/dcs/dev_172/" className="item">
          Show All Players
        </NavLink>
        <NavLink
          to="/2018-2019/dcs/dev_172/PlayerByRateTeam"
          className="item"
        >
          Find Player By Rate Team
        </NavLink>
        <NavLink
          to="/2018-2019/dcs/dev_172/PlayersRateUpdate"
          className="item"
        >
          Update Player's Rate 
        </NavLink>
      </div>
    );
  }
}
