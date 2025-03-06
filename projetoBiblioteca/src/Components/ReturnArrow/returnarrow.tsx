import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import arrow from '../../assets/returnIcon.png';
import styles from './styles.module.css';

const ReturnArrow: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from);
    } else {
      navigate('/');
    }
  };

  return (
    <img
      className={styles.returnArrow}
      src={arrow}
      alt="return-Arrow-Icon"
      onClick={handleBackClick}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default ReturnArrow;