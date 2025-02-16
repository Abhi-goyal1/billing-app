import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css'; 

const NewBill = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/select-client');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      <h1>Create New Bill</h1>
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

export default NewBill;