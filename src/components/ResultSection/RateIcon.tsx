import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { IoSquareSharp, IoTriangle } from 'react-icons/io5';

const RateIcon = ({ rate }: { rate: number }) => {
  const icons = [
    <FaCircle size={13} className="success" />,
    <IoSquareSharp size={15} className="warning" />,
    <IoTriangle size={15} className="danger" />,
    <FaCircle size={13} className="muted-light" />,
  ];

  return rate >= 90 ? icons[0] : rate >= 50 ? icons[1] : rate >= 0 ? icons[2] : icons[3];
};

export default RateIcon;
