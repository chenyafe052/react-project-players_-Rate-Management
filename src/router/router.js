import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import AllPlayers from "../components/AllPlayers";
import PlayersRateUpdate from "../components/PlayersRateUpdate";
import PlayerByRateTeam from "../components/PlayerByRateTeam";

const ReactRouter = () => {
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <React.Fragment>
        <NavBar />
        <Route exact path="/2018-2019/dcs/dev_172/" component={AllPlayers} />
        <Route
          path="/2018-2019/dcs/dev_172/PlayerByRateTeam"
          component={PlayerByRateTeam}
        />
        <Route
          path="/2018-2019/dcs/dev_172/PlayersRateUpdate"
          component={PlayersRateUpdate}
        />
      </React.Fragment>
    </div>
  );
};

export default ReactRouter;
