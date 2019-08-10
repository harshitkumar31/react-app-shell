import React from 'react';
import ReactDOM from 'react-dom';
import Shell from './shell';

ReactDOM.render(
    <Shell config={[{header: { visible: true, title: 'Title' }}]} />,
    document.getElementById('app')
  );
