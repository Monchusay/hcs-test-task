import React from 'react';
import './App.css';
import CountersListPage from './pages/countersListPage/CountersListPage';

function App() {
  return (
    <div className="App">
      <h2 className="Title">Список счётчиков</h2>
      <CountersListPage />
    </div>
  );
}

export default App;
