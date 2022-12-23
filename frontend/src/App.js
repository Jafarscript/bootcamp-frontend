import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';

function App() {
  const [user, setUser] = useState(false)
  return (
    <div className="App">
      { !user ? <Login  setUser={setUser} /> : (
        <h1>User Logged in</h1>
      )}
    </div>
  );
}

export default App;
