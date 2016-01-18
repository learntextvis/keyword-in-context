import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';

import Search from './components/search/search.jsx';
import KeywordInContext from './components/keyword_in_context/keyword_in_context.jsx';

import config from '../data/config.json';
import data from '../data/data.json';

import '../index.html';

document.addEventListener("DOMContentLoaded", function() {
  // Update our concordance view.
  //
  // Note: A function like could be added as a class method to Concordance
  // to allow direct rendering and hiding ReacDOM.render completely
  function update(query){
    ReactDOM.render(
      <div>
        <Search updated={update} />
        <KeywordInContext
          caseSensitive={config.caseSensitive}
          contextSize={config.contextSize}
          text={data[0].text}
          query={query}
          limit={config.limit}
        />
      </div>,
      document.querySelector("#main")
    );
  }

  // Render initial state.
  update(config.query);
});
