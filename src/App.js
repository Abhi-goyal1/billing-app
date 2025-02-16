import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NewBill from './components/NewBill';
import SelectClient from './components/SelectClient';
import SelectItem from './components/SelectItem';
import AddDescription from './components/AddDescription';
import AddMoreItem from './components/AddMoreItem';
import View from './components/View';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewBill />} />
        <Route path="/select-client" element={<SelectClient />} />
        <Route path="/select-item" element={<SelectItem />} />
        <Route path="/add-description" element={<AddDescription />} />
        <Route path="/add-more-item" element={<AddMoreItem />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </Router>
  );
};

export default App;