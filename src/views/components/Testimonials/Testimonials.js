import React, { useState } from "react";
import styles from './Testimonials.module.css'
import {testimonialsData} from '../../data/testimonialsData'

import { motion } from "framer-motion";

const Testimonials=()=>{
    const transition = {type: 'spring', duration: 3}
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length

    return(
        <div className={styles.Testimonials} id="testimonials">
            <div className={styles.leftT}>
                <span>Testimonials</span>
                <span className="stroke-text">why they</span>
                <span>say about us</span>

                <motion.span
                key={selected}
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 100}}
                transition={transition}
                >{testimonialsData[selected].review}</motion.span>
                <span>
                    <span style={{color: 'var(--orange)'}}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className={styles.rightT}>
                <motion.div
                    initial={{opacity: 0, x: 100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{...transition, duration: 2}}></motion.div>
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{...transition, duration: 2}}></motion.div>
                <motion.img
                key={selected}
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                transition={transition}
                src={testimonialsData[selected].image} alt=""/>
                <div className={styles.arrows}>
                    <img onClick={()=>{
                        selected === 0
                        ? setSelected(tLength -1)
                        : setSelected((prev) => prev - 1);
                        }}
                        src='../images/home/leftArrow.png' alt="" />
                    <img onClick={()=>{
                        selected === tLength -1
                        ? setSelected(0)
                        : setSelected((prev) => prev + 1);
                        }}
                        src='../images/home/rightArrow.png' alt="" />
                </div>
            </div>
        </div>
        )
    
    }
    
    export default Testimonials