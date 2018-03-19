import React from 'react';
import PropTypes from 'prop-types';

class CheckboxWithLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  render() {
    return <div>
      <input type='checkbox' value={this.state.value} id='checkbox'/>
      <label>{this.props.labelText}</label>
    </div>;
  }
};

CheckboxWithLabel.propTypes = {
  value: PropTypes.bool.isRequired,
  labelText: PropTypes.string
};

export default CheckboxWithLabel;
