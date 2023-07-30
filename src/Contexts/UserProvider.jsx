import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Cargar datos del localStorage si están disponibles, de lo contrario, usar un array vacío
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('favoritos');
    return storedData ? JSON.parse(storedData) : [];
  });

  // Guardar los datos en el localStorage cada vez que 'data' cambie
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(data));
  }, [data]);

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
