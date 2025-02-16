import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css'; 

const AddMoreItem = () => {
  const navigate = useNavigate();

  const handleAddMore = () => {
    navigate('/select-item');
  };

  const handleSaveSubmit = () => {
    navigate('/view');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      <h1>Add More Item or Save & Submit</h1>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleAddMore}
      >
        Add More Item
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSaveSubmit}
      >
        Save & Submit
      </motion.button>
    </motion.div>
  );
};

export default AddMoreItem;