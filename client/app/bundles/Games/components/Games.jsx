import React, { PropTypes } from 'react';

export default class Games extends React.Component {

constructor(props, _railsContext) {
    super(props);
    this.state = {games: this.props}
  }

  render() {
  	return (
  		<div>
  		<h3>Chess Games</h3>
  		<table>
      <thead>
        <tr>
          <th>Date</th>
          <th>White Player</th> 
          <th>White Elo</th>
          <th>Black Player</th> 
          <th>Black Elo</th>
          <th>Time Control</th>
          <th>Opening</th>
          <th>ECO</th>
          <th>Length</th>
          <th>Result</th>
        </tr>
        </thead>
        <tbody>
        {Object.keys(this.state.games).map((game,i) =>{
          return(
            <tr key={i}>
            <td>{this.state.games[game].date}</td>
            <td>{this.state.games[game].playerWhite}</td>
            <td>{this.state.games[game].eloWhite}</td>
            <td>{this.state.games[game].playerBlack}</td>
            <td>{this.state.games[game].eloBlack}</td>
            <td>{this.state.games[game].timeControl}</td>
            <td>{this.state.games[game].openingName}</td>
            <td>{this.state.games[game].ecoCode}</td>
            <td>{this.state.games[game].gameLength}</td>
            <td>{this.state.games[game].result}</td>
            </tr>
            )
        })} 
        </tbody>
      </table>
  		</div>
  	)
  }
}