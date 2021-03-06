import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Congrats from './components/Congrats/Congrats.js';
import GuessedWords from './containers/GuessedWords/GuessedWords.js';
import GuessInput from './containers/Input/Input.js';
import { getSecretWord } from './actions';
import { spoiler } from './App.scss';

export class Jotto extends PureComponent {
  componentDidMount = () => this.props.getSecretWord();

  render = () => (
    <div>
      <h1>
        The secret word is{' '}
        <span className={!this.props.success ? spoiler : null}>
          {this.props.secretWord}
        </span>
      </h1>
      <Congrats success={this.props.success} />
      <GuessInput />
      <GuessedWords guessedWords={this.props.guessedWords} />
    </div>
  );
}

export default connect(
  state => ({
    guessedWords: state.guessedWords,
    secretWord: state.secretWord,
    success: state.success,
  }),
  { getSecretWord },
)(Jotto);

Jotto.propTypes = {
  getSecretWord: PropTypes.func.isRequired,
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }),
  ),
  secretWord: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
};
