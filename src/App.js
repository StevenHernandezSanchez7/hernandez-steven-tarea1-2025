import React, { useEffect } from 'react';
import { auth, db } from './firebase';

function App() {
  useEffect(() => {
    console.log("Firebase configurado correctamente");
    console.log("Auth service:", auth);
    console.log("Firestore service:", db);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Proyecto React con Firebase</h1>
        <p>Firebase configurado correctamente</p>
        <p>Consulta la consola para ver los servicios de Firebase</p>
      </header>
    </div>
  );
}

export default App;