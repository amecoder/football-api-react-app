import React, { Component } from "react";
import Match from "./Match";
import axios from "axios";

class MatchList extends Component {
  state = {
    loading: false,
    data: null,
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log(this.prevProps.range !== this.props.range);
    if (
      this.props.range !== prevProps.range ||
      this.props.leagueId !== prevProps.leagueId
    ) {
      this.getData();
    }
  }

  getData = async () => {
    try {
      const { startDate, endDate } = this.props.range;
      const league_id = this.props.leagueId;
      this.setState({ loading: true });
      const { data } = await axios.get(
        `https://apiv2.apifootball.com/?action=get_events&from=${startDate}&to=${endDate}&league_id=${league_id}&APIkey=3af13ada6aa1552aff21179a6ef46416d79fce23b5929a4a3e6e0c1307efb5f7`
      );

      if (!!data.error && data.error !== null) {
        throw new Error("api 데이터 조회 실패");
      }
      this.setState({
        data,
      });
    } catch (e) {
      console.error(e);
    }

    this.setState({
      loading: false,
    });
  };

  render() {
    const { loading, data } = this.state;
    return (
      <div>
        {loading && (
          <h1 style={{ textAlign: "center" }}>데이터를 불러오는 중입니다.</h1>
        )}
        {!loading &&
          data &&
          data.map((d) => {
            return <Match key={d.match_id} data={d} />;
          })}
      </div>
    );
  }
}

export default MatchList;
