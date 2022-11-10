import React, {useEffect, useState} from 'react';
import MainContent from './Component';
import './assets/scss/styles.scss';
import getTokenAuthen from './api/token.api';

function App() {
  const [token, setToken] = useState<string>('');
  
  const handleInit = () => {
    getTokenAuthen()
    .then((response) =>{
        setToken(response.access_token);
    })
}

useEffect(() => {handleInit()},[]);

  return (
    <div className="App-wrapper">
      <MainContent token={token} />
    </div>
  );
}

export default App;
