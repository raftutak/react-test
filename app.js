class App extends React.Component {
  state = {
    text: ""
  };

  handleClick = () => {
    this.setState({
      text: this.state.text + "a"
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Dodaj "A"</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
