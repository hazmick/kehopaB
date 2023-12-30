import React, { Component } from "react";
import moment from "moment";
import LineChart from "./LineChartSmall";
import ToolTip from "./ToolTip";

class Tron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingData: true,
      data: null,
      hoverLoc: null,
      activePoint: null,
    };
  }
  handleChartHover(hoverLoc, activePoint) {
    this.setState({
      hoverLoc: hoverLoc,
      activePoint: activePoint,
    });
  }
  componentDidMount() {
    const getData = () => {
      const url =
        "https://api.coingecko.com/api/v3/coins/tron/market_chart?vs_currency=usd&days=3";

      fetch(url)
        .then((r) => r.json())
        .then((btcPrice) => {
          const sortedData = [];
          let count = 0;
          for (let i = 0; i < btcPrice.prices.length; i++) {
            sortedData.push({
              d: moment(btcPrice.prices[i][0]).format("MMM DD"),
              p: btcPrice.prices[i][1].toLocaleString("us-EN", {
                style: "currency",
                currency: "USD",
              }),
              x: count, //previous days
              y: btcPrice.prices[i][1], // numerical price
            });
            count++;
          }
          this.setState({
            data: sortedData,
            fetchingData: false,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getData();
  }
  render() {
    return (
      <div className="">
        <div className="">
          <div className="popup">
            {this.state.hoverLoc ? (
              <ToolTip
                hoverLoc={this.state.hoverLoc}
                activePoint={this.state.activePoint}
              />
            ) : null}
          </div>
        </div>
        <div className="">
          <div className="chart">
            {!this.state.fetchingData ? (
              <LineChart
                data={this.state.data}
                onChartHover={(a, b) => this.handleChartHover(a, b)}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Tron;
