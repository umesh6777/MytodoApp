import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (email, password) => {
    if (email === '123@gmail.com' && password === '123') {
      setLoggedIn(true);
      setUsername(email);
    } else {
      alert('Incorrect email or password');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <Dashboard username={username} />
      ) : (
        <LoginForm handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;









