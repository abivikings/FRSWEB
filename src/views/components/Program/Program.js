import React from "react";
import styles from './Program.module.css'
import {programsData} from '../../data/programsData'

const Programs=()=>{
    return(
        <div className={styles.Programs} id="programs">
            <div className={styles.programsHeader}>
                <span className="stroke-text">Donate</span><span>Happiness</span><span className="stroke-text">peace</span>
            </div>

            <div className={styles.programCategories}>
                {programsData.map((program, i)=>(
                    <div className={styles.category} key={i}>
                        {program.image}
                        <span>{program.heading}</span><span>{program.details}</span>

                        <div className={styles.joinNow}>
                            <span>Join Now</span>
                            <img src='../images/home/rightArrow.png' alt=""/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        )
    
    }

    export default Programs