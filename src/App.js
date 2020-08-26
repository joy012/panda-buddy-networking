import React from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';


function App() {
  return (
    <div>
      <Header></Header>
      <List></List>
      <footer className="text-center py-3"><small>&copy; All right reserved. Panda Tech - 2020</small></footer>
    </div>
  );
}

export default App;
