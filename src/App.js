import { React, BrowserRouter } from 'react';

import './app.css'

import Form from './components/form'
import Card from './components/card'

function App() {
  return (
    <div className="App">
      <header className="App">
        <p>Hello</p>
        <div>
          <Form />
          {/* <Card /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
