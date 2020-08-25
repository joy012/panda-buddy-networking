import React from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';


function App() {
  return (
    <div>
      <Header></Header>
      <div className="container py-5">
        <List></List>
      </div>
    </div>
  );
}

export default App;
