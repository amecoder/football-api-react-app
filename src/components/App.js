import React, { Component } from "react";
import MatchTemplate from "./MatchTemplate/MatchTemplate";
import MatchFinder from "./MatchFinder";
import Match from "./Match";
import dateFormatter from "../utils/dateFormatter";

class App extends Component {
  state = {
    range: {
      startDate: "2020-01-01",
      endDate: "2020-02-02",
    },
    leagueId: 148,
  };

  handleRange = (range) => {
    const startDate = dateFormatter(range[0]);
    const endDate = dateFormatter(range[1]);

    this.setState({
      range: { startDate, endDate },
    });
  };

  handleLeauge = (leagueId) => {
    this.setState({
			leagueId,
		});
  };

  render() {
    return (
      <div>
        <MatchTemplate
          header={
            <MatchFinder
              setRange={this.handleRange}
              setLeagueId={this.handleLeauge}
              leagueId={this.state.leagueId}
            />
          }
        >
          <Match range={this.state.range} leagueId={this.state.leagueId} />
        </MatchTemplate>
      </div>
    );
  }
}

export default App;
