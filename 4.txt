class App extends React.Component {
  state = {
    value: ""
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleButtonClear = () => {
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <React.Fragment>
        <input
          value={this.state.value}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Wpisz"
        />
        <button onClick={this.handleButtonClear}>Reset</button>
        <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
