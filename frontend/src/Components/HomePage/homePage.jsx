import React from 'react';
import styles from './homePage.module.scss';

export default props => {
  return (
    <div className={styles.homePage}>
      <div className={styles.leftSection}>
        <div className={styles.companyLogo}>
          <img src={require('../Images/fedorg.svg')} />
        </div>
        <div className={styles.comingSoon}>
          <h4>OUR WEBSITE IS</h4>
          <h1>COMING SOON</h1>
          <p>Meanwhile feeel free to intract with our social networks</p>
        </div>
        <div className={styles.socialMedia}>
          <a href='#'>
            <img src={require('../Images/facebook.svg')} />
          </a>
          <a href='#'>
            <img src={require('../Images/twitter.svg')} />
          </a>
          <a href='#'>
            <img src={require('../Images/Instagram.svg')} />
          </a>
          <a href='#'>
            <img src={require('../Images/google.svg')} />
          </a>
        </div>
      </div>

      <div className={styles.rightSection}>
        <img src={require('../Images/rocket.svg')} />
      </div>
    </div>
  )
}