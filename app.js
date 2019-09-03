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
        {/* <button onClick={this.handleMath.bind(this, "increase", 8)}>+8</button>
        <button onClick={this.handleMath.bind(this, "decrease", 1)}>-1</button>
        <button onClick={this.handleMath.bind(this, "reset", null)}>
          Reset
        </button> */}

        <MathButton
          name="-10"
          type="decrease"
          number="10"
          click={this.handleMath}
        />

        <MathButton
          name="+10"
          type="increase"
          number="10"
          click={this.handleMath}
        />

        <MathButton
          name="Reset"
          type="reset"
          number="null"
          click={this.handleMath}
        />

        <Result count={this.state.count} result={this.state.result} />
      </React.Fragment>
    );
  }
}

const MathButton = props => {
  const number = parseInt(props.number);

  return (
    <React.Fragment>
      <button onClick={() => props.click(props.type, number)}>
        {props.name}
      </button>
    </React.Fragment>
  );
};

const Result = props => {
  return (
    <React.Fragment>
      <h1>
        Liczba kliknięć: {props.count} -{" "}
        {props.count > 10 ? "over 9000" : "good"}
      </h1>
      <h1>Rezultat: {props.result}</h1>
    </React.Fragment>
  );
};

ReactDOM.render(<Counter result={0} />, document.getElementById("root"));
