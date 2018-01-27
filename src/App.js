import React, { Component } from 'react';
import logo from './logo.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CandleGraph from './CandleGraph'
import 'react-tabs/style/react-tabs.css';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min1: [],
      min5: [],
      hour1: [],
      week1: []
    }
  }

  componentDidMount() {
    fetch('https://www.fxempire.com/api/v1/en/markets/eur-usd/chart?time=MIN_1')
    .then(response => {return response.json()})
    .then(min1 => {this.setState({min1})})

    fetch('https://www.fxempire.com/api/v1/en/markets/eur-usd/chart?time=MIN_5')
    .then(response => {return response.json()})
    .then(min5 => {this.setState({min5})})

    fetch('https://www.fxempire.com/api/v1/en/markets/eur-usd/chart?time=HOUR_1')
    .then(response => {return response.json()})
    .then(hour1 => {this.setState({hour1})})

    fetch('https://www.fxempire.com/api/v1/en/markets/eur-usd/chart?time=WEEK_1')
    .then(response => {return response.json()})
    .then(week1 => {this.setState({week1})})
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">FXEMPIRE</h1>
        <Tabs>
          <TabList>
            <Tab>1 Minute</Tab>
            <Tab>5 Minutes</Tab>
            <Tab>1 Hour</Tab>
            <Tab>1 Week</Tab>
          </TabList>

          <TabPanel>
            <CandleGraph graphId="min1" graphData={this.state.min1} />
          </TabPanel>
          <TabPanel>
            <CandleGraph graphId="min5" graphData={this.state.min5} />
          </TabPanel>
          <TabPanel>
            <CandleGraph graphId="hour1" graphData={this.state.hour1} />
          </TabPanel>
          <TabPanel>
            <CandleGraph graphId="week1" graphData={this.state.week1} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
