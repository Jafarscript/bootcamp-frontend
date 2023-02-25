import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  const [user, setUser] = useState(false)

  useEffect(() => {
    setUser(sessionStorage.getItem('inputValue'))
  }, [])
  return (
    <div className="App">
      { !user ? <Login  setUser={setUser} /> : (
        <main>
          <Header />
        </main>
      )}
    </div>
  );
}

export default App;
