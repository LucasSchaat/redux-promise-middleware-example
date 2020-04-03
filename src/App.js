import React from 'react';
import NoPromiseMemes from './Components/NoPromiseComponents/NoPromiseMemes'
import ReduxPromiseMemes from './Components/ReduxPromiseComponents/ReduxPromiseMemes'
import './App.css';

function App() {
  return (
    <div className="App">
      <NoPromiseMemes/>
      <ReduxPromiseMemes/>
    </div>
  );
}

export default App;
