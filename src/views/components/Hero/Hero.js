import React from 'react'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'
import Header from '../Header/Header'
import styles from './Hero.module.css'

const Hero = () => {
  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false

  return (
    <div className={styles.hero}>
      <div className={`blur ${styles.hero_blur}`}></div>

      <div className={styles.left_h}>
        <Header />
        <div className={styles.the_best_ad}>
          <motion.div
            initial={{ left: mobile ? '160px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>The best Website to invest your money</span>
        </div>

        <div className={styles.hero_text}>
          <div>
            <span className='stroke-text'>Initiate </span>
            <span>Your</span>
          </div>
          <div>First Donation</div>
          <div>
            <span>In here we will help you to find your ideal purpose where you can invest your money</span>
          </div>
        </div>

        <div className={styles.figures}>
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix='+' />
            </span>
            <span>Completed Campaign</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay='4' preFix='+' />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay='4' preFix='+' />
            </span>
            <span>Live Campaign</span>
          </div>
        </div>

        <div className={styles.hero_buttons}>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>

      <div className={styles.right_h}>
        <button className='btn'>Join Now</button>

        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={{ ...transition, type: 'tween' }}
          className={styles.heart_rate}
        >
          <img src='../images/home/heart.png' alt='' />
          <span>Target 2023</span>
          <span>150 Campaigns</span>
        </motion.div>

        <img src='../images/home/hero_image.png' alt='' className={styles.hero_image} />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={{ ...transition, type: 'tween' }}
          src='../images/home/hero_image_back.png'
          alt=''
          className={styles.hero_image_back}
        />

        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={{ ...transition, type: 'tween' }}
          className={styles.calories}
        >
          <img src='../images/home/calories.png' alt='' />
          <div>
            <span>Fund raised</span>
            <span>220$(million)</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
