import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

const apiUrl = process.env.REACT_APP_API_ADDRESS

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch(`${apiUrl}/api/`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  // HI

  getRandomMessage = async e => {
    e.preventDefault();
    const response = await fetch(`${apiUrl}/api/message`);
    const res = await response.json();
    this.setState({ messageResponse: res.express });
  };

  render() {
    if (this.state.response !== undefined) document.title = this.state.response
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>{this.state.response}</p>
        <form onSubmit={this.getRandomMessage}>
          <p>
            <strong>Get random messages:</strong>
          </p>
          <button id="btn" type="submit">GET</button>
        </form>
        <p>{this.state.messageResponse}</p>
      </div>
    );
  }
}

export default App;
