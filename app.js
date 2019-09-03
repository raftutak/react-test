class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result
  };

  handleMath = (type, number) => {
    if (type === "increase") {
      this.setState({
        count: this.state.count + 1,
        result: this.state.result + number
      });
    } else if (type === "decrease") {
      this.setState({
        count: this.state.count + 1,
        result: this.state.result - number
      });
    } else if (type === "reset") {
      this.setState({
        counts: (this.state.count = 0),
        result: (this.state.result = this.props.result)
      });
    }
  };

  // handleIncrease = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //     result: this.state.result + 1
  //   });
  // };

  // handleDecrease = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //     result: this.state.result - 1
  //   });
  // };

  // handleReset = () => {
  //   this.setState({
  //     count: 0,
  //     result: 0
  //   });
  // };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleMath.bind(this, "increase", 8)}>+8</button>
        <button onClick={this.handleMath.bind(this, "decrease", 1)}>-1</button>
        <button onClick={this.handleMath.bind(this, "reset", null)}>
          Reset
        </button>

        <h1>Liczba kliknięć: {this.state.count}</h1>
        <h1>Rezultat: {this.state.result}</h1>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Counter result={15} />, document.getElementById("root"));
