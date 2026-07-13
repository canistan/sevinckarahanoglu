"use client";

import React, { useState } from 'react';

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div 
            key={index} 
            style={{ 
              backgroundColor: 'var(--color-white)', 
              borderRadius: '12px', 
              boxShadow: 'var(--shadow-sm)',
              overflow: 'hidden',
              border: '1px solid var(--color-gray-200)',
              transition: 'all 0.3s ease'
            }}
          >
            <button
              onClick={() => toggleItem(index)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                color: isActive ? 'var(--color-primary)' : 'var(--color-dark)'
              }}
            >
              <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 600, paddingRight: '1rem' }}>
                {item.question}
              </h3>
              <span style={{ 
                fontSize: '1.5rem', 
                fontWeight: 300,
                transform: isActive ? 'rotate(45deg)' : 'rotate(0)',
                transition: 'transform 0.3s ease',
                color: 'var(--color-primary)'
              }}>
                +
              </span>
            </button>
            
            <div style={{
              maxHeight: isActive ? '1000px' : '0',
              opacity: isActive ? 1 : 0,
              overflow: 'hidden',
              transition: 'all 0.4s ease-in-out',
              backgroundColor: 'var(--color-light)'
            }}>
              <div style={{ 
                padding: '0 1.5rem 1.5rem 1.5rem',
                color: 'var(--color-gray-600)',
                lineHeight: 1.6,
                fontSize: '1rem'
              }}>
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
