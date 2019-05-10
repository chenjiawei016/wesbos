import React from "react";
import PropTypes from "prop-types";

class StorePicker extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }
  myInput = React.createRef();
  static propTypes = {
    history: PropTypes.object
  };

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from that input
    // 3. Change the page to /store/whatever-they-enter
    this.props.history.push(`/store/${this.state.value}`);
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          ref={this.myInput}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
