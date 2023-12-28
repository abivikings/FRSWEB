import React from "react";
import styles from './Join.module.css'

const Join=()=>{
    return(
        <div className={styles.Join} id="join-us">
            <div className={styles.leftJ}>
                <hr/>
                <div>
                    <span className="stroke-text">Ready to</span>
                    <span> Make some</span>
                </div>

                <div>
                    <span>sad faces</span>
                    <span className="stroke-text"> turn to happy</span>
                </div>
            </div>
            <div className={styles.rightJ}>
                <form action="" className={styles.emailContainer}>
                    <input type="email" name="user_email" placeholder="Enter Your Email Address"/>
                    <button className={`btn ${styles.btnJ}`}>Join Now</button>
                </form>
            </div>
        </div>
        )
    
    }
    
    export default Join