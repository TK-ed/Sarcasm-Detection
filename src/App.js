import { React, BrowserRouter } from 'react';

import './App.css'

import Form from './components/form'

function App() {
  return (
    <div className="App">
      <header className="App">
        <p>Hello</p>
        <div>
          <Form />
        </div>
      </header>
    </div>
  );
}

export default App;
