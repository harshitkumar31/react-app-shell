import React from 'react';
import ReactDOM from 'react-dom';
import Shell from './shell';
import shellConfig from './shellConfig';

ReactDOM.render(
    <Shell config={shellConfig} ><div>Body</div></Shell>,
    document.getElementById('app')
  );
