import React from 'react';
import CustomID from './styleComponet';
import useUsers from './useUser';
import LoadingSpinner from './spinerStyle'



function App() {
  const { users, loading, error } = useUsers();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div error={error} />;
  }

  return (
    <div className="App">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', // Otras opciones de diseño
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
