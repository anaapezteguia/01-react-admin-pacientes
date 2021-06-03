import React from 'react';
import Form from './components/Form';

function App() {
  return (
    <>
      <h1>Clínica veterinaria “Petting my pet”</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </>
  );
}

export default App;