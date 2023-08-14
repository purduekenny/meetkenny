import React from "react"
import { Link } from 'gatsby'
import styles from './Resume.module.css'

const ResumeBlock = props => (
            <div className={styles.card}>
                <div className={styles.graphic}>
                    <img width="100%" height="100%" src={props.graphic} alt={props.alt} />
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
            <ResumeBlock name="Business & Communication Specialist" color="green" graphic="./assets/comm.png" alt='sattelite in space' description="In May 2024, I will receive my Master of Business Administration (MBA) from Purdue University's Mitchell E. Daniels, Jr. School of Business and the Krannert Graduate Institute. Additionally, I have my Master of Science (MS) in Strategic Communication from Brian Lamb School of Communication at Purdue University."></ResumeBlock>
            <ResumeBlock name="Agile Project Management Professional" color="border-color:red" graphic="./assets/pm.png" alt='sattelite in space' description="I have my Project Management Professional (PMP) certification and my Agile Certified Practitioner (PMI-ACP) certification from the PMI. I love managing creative projects and creative people."></ResumeBlock>
            <ResumeBlock name="User Experience Certified" color="yellow" graphic="./assets/ux.png" alt='sattelite in space'description="Not only do I focus on my audience when drafting communication plans, but also when creating solutions for the products I manage. I have a certification for User Experience from Nielsen Norman Group."></ResumeBlock>
        </div>
    )
}


export default Resume
