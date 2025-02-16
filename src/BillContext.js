// src/BillContext.js
import React, { createContext, useState } from 'react';

export const BillContext = createContext();

export const BillProvider = ({ children }) => {
  const [billData, setBillData] = useState({
    client: '',
    project: '',
    items: []
  });

  return (
    <BillContext.Provider value={{ billData, setBillData }}>
      {children}
    </BillContext.Provider>
  );
};