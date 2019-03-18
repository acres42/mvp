import React from "react";

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    var payload = {
      zip: this.state.value
    };
    return payload;
  }

  render() {
    return (
      <div>
        <h1>Enter your zipcode to place a point</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Zipcode:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LocationForm;
