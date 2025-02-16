import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BillContext } from '../BillContext';
import '../App.css'; // Update the path to correctly point to App.css

const AddDescription = () => {
  const [description, setDescription] = useState('');
  const [briefs, setBriefs] = useState('');
  const [measurement, setMeasurement] = useState('');
  const navigate = useNavigate();
  const { billData, setBillData } = React.useContext(BillContext);

  const handleNext = () => {
    if (description && briefs && measurement) {
      setBillData((prev) => ({
        ...prev,
        items: prev.items.map((item, index) => {
          if (index === prev.items.length - 1) {
            return { ...item, description, briefs, measurement };
          }
          return item;
        })
      }));
      navigate('/add-more-item');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      <h1>Add Description, Briefs, and Measurement</h1>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Briefs"
        value={briefs}
        onChange={(e) => setBriefs(e.target.value)}
      />
      <input
        type="text"
        placeholder="Measurement"
        value={measurement}
        onChange={(e) => setMeasurement(e.target.value)}
      />
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

export default AddDescription;