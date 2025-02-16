import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BillContext } from '../BillContext';
import '../App.css'; 

const SelectClient = () => {
  const [client, setClient] = useState('');
  const [project, setProject] = useState('');
  const navigate = useNavigate();
  const { setBillData } = React.useContext(BillContext);

  const handleNext = () => {
    if (client && project) {
      setBillData((prev) => ({
        ...prev,
        client,
        project
      }));
      navigate('/select-item');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      <h1>Select Client and Project</h1>
      <select
        onChange={(e) => setClient(e.target.value)}
        value={client}
      >
        <option value="">Select Client</option>
        <option value="client1">Client 1</option>
        <option value="client2">Client 2</option>
      </select>
      <select
        onChange={(e) => setProject(e.target.value)}
        value={project}
      >
        <option value="">Select Project</option>
        <option value="project1">Project 1</option>
        <option value="project2">Project 2</option>
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

export default SelectClient;