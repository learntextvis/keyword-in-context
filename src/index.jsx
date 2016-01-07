import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';

import Search from './components/search/search.jsx';
import Concordance from './components/concordance/concordance.jsx';
import sampleData from '../data/sample_data';

import '../index.html';

document.addEventListener("DOMContentLoaded", function() {

  var text = sampleData.value;
  var config = {
    contextSize: 20,
    caseSensitive:true
  };

  // Update our concordance view.
  //
  // Note: A function like could be added as a class method to Concordance
  // to allow direct rendering and hiding ReacDOM.render completely
  function update(query){
    ReactDOM.render(
      <div>
        <Search updated={update} />
        <Concordance
          config={config}
          text={text}
          query={query}
        />
      </div>,
      document.querySelector("#main")
    );
  }

  // Render initial state.
  update('')
});
