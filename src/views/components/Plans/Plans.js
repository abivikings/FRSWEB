import React from "react";
import styles from './Plans.module.css'
import {plansData} from '../../data/plansData'

const Plans=()=>{
    return(
        <div className={styles.plansContainer} id="plans">
            <div className={`blur ${styles.plansBlur1}`}></div>
            <div className={`blur ${styles.plansBlur2}`}></div>
            <div className={styles.plansHeader} style={{gap: '2rem'}}>
                <span className="stroke-text">Ready to start</span>
                <span>Your journey</span>
                <span className="stroke-text">Now with us</span>
            </div>

            <div className={styles.plans}>
                {plansData.map((plan, i)=>(
                    <div className={styles.plan} key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>{plan.price}</span>
                        
                        <div className={styles.features}>
                            {plan.features.map((feature, i)=> (
                                <div className={styles.feature} key={i}>
                                    <img src='../images/home/whiteTick.png' alt=""/>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div><span>See more benefits </span></div>

                        <button className="btn">Join Now</button>
                    </div>
                ))}
            </div>
        </div>
        )
    
    }

    export default Plans