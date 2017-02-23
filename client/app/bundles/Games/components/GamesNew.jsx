import React, { PropTypes } from 'react';

export default class GamesNew extends React.Component {

constructor(props, _railsContext) {
    super(props);
  }

  render() {
  	return (
  <form action="/games" method="POST">
  <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>" />
  <p>Date</p>
  <input type='text' name="date"/>
  <p>White Player</p>
  <input type='text' name="White Player"/>
  <p>White Elo</p>
  <input type='text' name="White Elo"/>
  <p>Black Player</p>
  <input type='text' name="Black Palyer"/>
  <p>Black Elo</p>
  <input type='text' name="Black Elo"/>
  <p>Time control</p>
  <input type='text' name="Time control"/>
  <p>Opening name</p>
  <input type='text' name="opening name"/>
  <p>ECO</p>
  <input type='text' name="ECO"/>
  <p>Game Length</p>
  <input type='text' name="Game Length"/>
  <p>Result</p>
  <input type='text' name="Result"/>
  <br/>
  <button type="submit">submit</button>
  </form>

  		)
  }
}