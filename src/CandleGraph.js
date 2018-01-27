import React, { Component } from 'react';

class CandleGraph extends Component {
    constructor(props) {
        super(props)
        this.drawGraph = this.drawGraph.bind(this)
        this.getParsedData = this.getParsedData.bind(this)
    }

    componentDidMount() {
            this.drawGraph()
    }

    componentDidUpdate() {
        this.drawGraph()
    }

    getParsedData(data, field) {
        return data.map(function(item) {
            return item[field];
        });
    }

    drawGraph() {
        if (this.props.graphData.length === 0)
         return
        var Plotly = require('plotly.js/dist/plotly.js')

        let graphData = {
            x: this.getParsedData(this.props.graphData, 'date'),
            close: this.getParsedData(this.props.graphData, 'close'),
            high: this.getParsedData(this.props.graphData, 'high'),
            low: this.getParsedData(this.props.graphData, 'low'),
            open: this.getParsedData(this.props.graphData, 'open'),

            increasing: {line: {color: 'black'}},
            decreasing: {line: {color: 'red'}},
          
            type: 'candlestick',
            xaxis: 'x',
            yaxis: 'y'
        };


        let layout = {
            dragmode: 'zoom', 
            margin: {
              r: 10, 
              t: 25, 
              b: 40, 
              l: 60
            }, 
            showlegend: false, 
            xaxis: {
              autorange: true, 
              rangeslider: {range: [graphData.x[0].date, graphData.x[graphData.x.length-1].date]}, 
              title: 'Date', 
              type: 'date'
            }, 
            yaxis: {
              autorange: true, 
              type: 'linear'
            },
            
          };
          
          Plotly.plot(this.props.graphId, [graphData], layout);

    }

  render() {
    if (this.props.graphData.length === 0)
        return (
            <h2>Loading Graph Data...</h2>
        )
    return (
      <div className="CandleGraph" id={this.props.graphId}>
        
      </div>
    )
  }
}

export default CandleGraph;
