import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Input extends Component {
  render = () =>
    !this.props.success ? (
      <form data-test="component-input" className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          name="word-guess"
          type="text"
          placeholder="Enter Guess"
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    ) : null;
}

const mapStateToProps = state => ({
  success: state.success,
});

export default connect(mapStateToProps)(Input);

Input.propTypes = {
  success: PropTypes.bool.isRequired,
};