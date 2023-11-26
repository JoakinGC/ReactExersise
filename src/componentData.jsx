import React, { useState, useEffect } from 'react';
import CustomID from './CustomID';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const getImageURL = (user) =>
    `https://randomuser.me/api/portraits/${
      user.gender === 'female' ? 'women' : 'men'
    }/${getRandomInt(100)}.jpg`;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://randomuser.me/api/?results=10&nat=es&inc=name,email,gender'
        );
        if (!response.ok) {
          throw new Error('Error al obtener los usuarios');
        }
        const data = await response.json();
        const processedUsers = data.results.map((user) => ({
          ...user,
          image: getImageURL(user),
        }));
        setUsers(processedUsers);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Cargando...</div>; // Aquí puedes mostrar un spinner o un mensaje de carga
  }

  if (error) {
    return <div>Error: {error}</div>; // Manejo de errores
  }

  return (
    <div className="App">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // Ejemplo de grid con 3 columnas
          gap: '20px',
        }}
      >
        {users.map((user, index) => (
          <CustomID key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
