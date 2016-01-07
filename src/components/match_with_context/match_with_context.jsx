import React from 'react';

import './match_with_context.css';

/**
 * Component that renders a string (the context) with a specific
 * part highlighted (the match)
 */
export default class MatchWithContext extends React.Component {

  render() {
    var before = this.props.context.substring(
      0,
      this.props.index
    );
    var match = this.props.context.substring(
      this.props.index,
      this.props.index + this.props.match.length
    );
    var after = this.props.context.substring(
      this.props.index + this.props.match.length
    );

    return (
      <div className='match-with-context'>
        <span className='before'>{before}</span>
        <span className='match'>{match}</span>
        <span className='after'>{after}</span>
      </div>
    );
  }
}

MatchWithContext.propTypes = {
  // String to render
  context: React.PropTypes.string.isRequired,
  // Text to highlight
  match: React.PropTypes.string.isRequired,
  // Start index of text to highlight in the context string
  index: React.PropTypes.number.isRequired,
};
