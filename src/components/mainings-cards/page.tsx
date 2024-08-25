import React from 'react';

import './mainingCard.css';

interface MiningProps {
    title: string;
    level: string;
    price: number;
    
}

const MiningCard: React.FC<MiningProps> = ({ title, level, price }) => {
  return (
    <div className="cart-section">
      <img src={`${title}.png`} />
      <p className="items-section">{title}</p>
      <div className="box-title">
        <p className="box-list">{level}0 ур.</p>
        
        <p className="box-decr">+{income}</p>
        <div className="box-script">
        
        </div>
        <p className="box-end">{tokenCount}</p>
      </div>
    </div>
  );
};

export default MiningCard;
