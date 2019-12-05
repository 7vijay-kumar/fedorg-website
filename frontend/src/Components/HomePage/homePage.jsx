import React from 'react';
import styles from './homePage.module.scss';

export default props => {
  return (
    <div className={styles.homePage}>
      <img src={require('../Images/logo.jpg')} />
      <h1>Coming Soon</h1>
    </div>
  )
}