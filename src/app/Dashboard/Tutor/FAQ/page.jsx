'use client'
import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import CustomAccordion from './CustomAccordian/CustomAccordion';



export default function FAQ() {
  const [expanded, setExpanded] = useState('');

  const handleChange = (panelId) => (event, newExpanded) => {
    setExpanded(newExpanded ? panelId : '');
  };

  const accordionItems = [
    { id: 'panel1', title: 'Collapsible Group Item #1', content: 'Content for item #1' },
    { id: 'panel2', title: 'Collapsible Group Item #2', content: 'Content for item #2' },
    { id: 'panel3', title: 'Collapsible Group Item #3', content: 'Content for item #3' },
    // Add more items as needed
  ];

  return (
   <>
   
   
   {accordionItems.map((item) => (
        <CustomAccordion
          key={item.id}
          panelId={item.id}
          panelTitle={item.title}
          panelContent={<Typography>{item.content}</Typography>}
          expanded={expanded}
          onChange={handleChange}
          handleChange={handleChange}
        />
      ))}
   
   
   </>
  );
}