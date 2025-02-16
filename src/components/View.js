import React from 'react';
import { motion } from 'framer-motion';
import { BillContext } from '../BillContext';
import '../App.css'; 

const View = () => {
  const { billData } = React.useContext(BillContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      <h1>View Bill</h1>
      <p>Client: {billData.client}</p>
      <p>Project: {billData.project}</p>
      <h2>Items:</h2>
      <ul>
        {billData.items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p>Item: {item.item}</p>
            <p>Description: {item.description}</p>
            <p>Briefs: {item.briefs}</p>
            <p>Measurement: {item.measurement}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default View;