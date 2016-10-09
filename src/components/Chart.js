import React, {Component} from 'react';
import Chartjs from 'chart.js';


class Chart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			barData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [8, 11, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
			},

			options: {
	      scales: {
	          yAxes: [{
	              ticks: {
	                  beginAtZero:true
	              }
	          }]
	      }
	    }
	  }
	}

	componentDidMount() {
		var ctx = document.getElementById("myChart").getContext("2d");
		console.log(ctx);
		var myChart = new Chartjs(ctx, {
		    type: 'bar',
		    data: this.state.barData,
		    options: this.state.options
		});

		var ctxLine = document.getElementById("lineChart").getContext("2d");
		console.log(ctxLine);
		var myChart = new Chartjs(ctxLine, {
		    type: 'line',
		    data: this.state.barData,
		    options: this.state.options
		});

	}

	render() {
		return (
			<div>
				<div className="chart-container"><canvas id="myChart"></canvas></div>
				<div className="chart-container"><canvas id="lineChart"></canvas></div>
			</div>
		)
	}
}

export default Chart;