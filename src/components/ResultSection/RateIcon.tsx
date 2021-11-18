import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { IoSquareSharp, IoTriangle } from 'react-icons/io5';

interface Rate {
  rate: number;
}

const RateIcon: React.FC<Rate> = ({ rate }) => {
  const icons = [
    <FaCircle size={13} className="success" />,
    <IoSquareSharp size={15} className="warning" />,
    <IoTriangle size={15} className="danger" />,
    <FaCircle size={13} className="muted-light" />,
  ];

  if (rate >= 90) return icons[0];
  if (rate >= 50) return icons[1];
  if (rate >= 0) return icons[2];

  return icons[3];
};

export default RateIcon;
