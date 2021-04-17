import React from "react"
import { Link } from 'gatsby'
import styles from './Resume.module.css'

const ResumeBlock = props => (
            <div className={styles.card}>
                <div className={styles.graphic}>
                    <img src={props.graphic} alt={props.alt} />
                </div>
                <div className={styles.meta}>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
)

function Resume () {
    return (
        <div className={styles.resumeHighlight}>
            <ResumeBlock name="Communication Professional" color="green" graphic="./assets/comm.png" alt='sattelite in space' description="I have my Master's of Science in Strategic Communication from Brian Lamb School of Communication at Purdue University. Additionally, I have nearly a decade of experience working with a full-service communication department. I have significant experience planning, managing, and delivering successful projects."></ResumeBlock>
            <ResumeBlock name="Project Management Professional" color="border-color:red" graphic="./assets/pm.png" alt='sattelite in space' description="I have my Project Management Professional (PMP) certification from the PMI. I love managing creative projects and creative people."></ResumeBlock>
            <ResumeBlock name="User Experience Certification" color="yellow" graphic="./assets/ux.png" alt='sattelite in space'description="Not only do I focus on my audience when drafting communication plans, but also when creating solutions. I have a certification for Nielsen Norman Group in UX."></ResumeBlock>
        </div>
    )
}


export default Resume