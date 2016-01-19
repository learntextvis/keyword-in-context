import React from 'react';
import MatchWithContext from '../match_with_context/match_with_context.jsx';

import './keyword_in_context.css';

/**
 * A component that renders a keyword-in-context view
 * of a text. Given a text, a query string and a number of characters
 * to use as tokens, will display matches in the text along with surrounding
 * context.
 */
export default class KeywordInContext extends React.Component {

  /**
   * Given a string and a query, will return a list of objects
   * that contain the index of where the query matches the string,
   * the math itself, and a string that represents the context in which
   * that match was found.
   *
   * @param  {String} source      the source string
   * @param  {String} query       the query string. this is currently
   *                              interpreted using regex syntax.
   * @param  {[type]} contextSize number of characters before and after the
   *                              match to capture as context.
   * @return {Object}             A concordance like object with index, match,
   *                              and context properties.
   */
  findMatches(source, query, contextSize) {
    var qLen = query.length;

    if(qLen === 0) {
      return [];
    }

    // Set up search options
    var searchFlags = 'ig';
    if(this.props.caseSensitive) {
      searchFlags = 'g';
    }

    // We first find all the indices where the query matches the source
    //
    // TODO: Escape special regex chars?
    var qReg = new RegExp(query, searchFlags);
    var matchIndices = [];
    var match;
    while(match = qReg.exec(source)) {
      matchIndices.push([match[0], qReg.lastIndex]);
    }

    // Then for each match we build a string with some characters on either
    // side representing context.
    var matchesWithContext = matchIndices.map((mi) => {
      var match = mi[0];
      var index = mi[1];

      var context = source.substring(
        index - contextSize - 1,
        index + qLen + contextSize
      );

      // TODO this has potential for being incorrect when there
      // is a match in the preceding part of the context string.
      var inContextIndex = context.indexOf(match);

      return {
        context: context,
        match: match,
        index: inContextIndex
      };
    });

    return matchesWithContext;
  }

  /**
   * Returns an array of display components for matches.
   *
   * @return {Array} Array of MatchWithContext components.
   */
  renderMatches() {
    var matches = this.findMatches(
      this.props.text,
      this.props.query,
      this.props.contextSize
    );

    if(this.props.limit && this.props.limit > 0) {
      matches = matches.slice(0, this.props.limit);
    }

    return matches.map((d, i) => {
      return (
        <MatchWithContext
        key={i}
        context={d.context}
        match={d.match}
        index={d.index}
        />
      );
    });
  }

  render() {
    return (
      <div className='keywords-in-context'>
        {this.renderMatches()}
      </div>
    );
  }
}

KeywordInContext.propTypes = {
  // Number of characters to use on either side of a match as context
  contextSize: React.PropTypes.number.isRequired,
  // Whether to perform case sensitive search or not
  caseSensitive: React.PropTypes.bool.isRequired,
  // Text to search for matches
  text: React.PropTypes.string.isRequired,
  // Query String
  query: React.PropTypes.string.isRequired,
  // constrain list to for x matches
  limit: React.PropTypes.number
};
