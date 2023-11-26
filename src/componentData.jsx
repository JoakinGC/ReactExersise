import React from 'react';
import CustomID from './CustomID'; // Ruta correcta al componente CustomID

function App() {
  const userData = {
    name: "EUGENIO",
    surname: "RUIZ DOMENECH",
    username: "eugenio_98",
    gender: "male",
    birthdate: "05/04/1998",
    age: 25,
    email: "eugenio_98@hotmail.com",
    province: "Sevilla",
    image: "https://randomuser.me/api/portraits/lego/1.jpg",
  };

  return (
    <div className="App">
      <CustomID user={userData} />
    </div>
  );
}

export default App;
