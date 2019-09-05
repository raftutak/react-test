const PositiveMessage = () => {
  return <p>Możesz obejrzeć film!</p>;
};

const NegativeMessage = () => {
  return <p>Nie możesz obejrzeć filmu.</p>;
};

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false
  };

  handleCheckboxValue = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed
    });
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <PositiveMessage />;
      } else {
        return <NegativeMessage />;
      }
    } else {
      return null;
    }
  };

  handleFormSubmit = e => {
    e.preventDefault(); // zablokowanie przeladowywania strony na evencie onSubmit formularza
    this.setState.isFormSubmitted = true;
  };

  render() {
    return (
      <>
        <h1>Kup bilet</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxValue}
            checked={this.state.isConfirmed}
          />
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <br />
          <br />
          <button>Kup bilet</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
