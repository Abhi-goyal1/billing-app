import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BillContext } from '../BillContext';
import '../App.css'; 

const SelectItem = () => {
  const [item, setItem] = useState('');
  const navigate = useNavigate();
  const { setBillData } = React.useContext(BillContext);

  const handleNext = () => {
    if (item) {
      setBillData((prev) => ({
        ...prev,
        items: [...prev.items, { item, description: '', briefs: '', measurement: '' }]
      }));
      navigate('/add-description');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      <h1>Select Item</h1>
      <select
        onChange={(e) => setItem(e.target.value)}
        value={item}
      >
        <option value="">Select Item</option>
        <option value="item1">Item 1</option>
        <option value="item2">Item 2</option>
      </select>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
      >
        Next
      </motion.button>
    </motion.div>
  );
};

export default SelectItem;