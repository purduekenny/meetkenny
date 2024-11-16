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
            <ResumeBlock name="Strategic Business & Communication Specialist" color="green" graphic="./assets/comm.png" alt='sattelite in space' description="I hold an MBA from Purdue University's Mitch Daniels School of Business and a Master of Science in Strategic Communication Management & Leadership from the Brian Lamb School of Communication. With a strong foundation in business strategy and communication, I bring a holistic approach to problem-solving and decision-making that aligns with both organizational goals and audience needs."></ResumeBlock>
            <ResumeBlock name="Agile Project Management Professional" color="border-color:red" graphic="./assets/pm.png" alt='sattelite in space' description="As a certified Project Management Professional (PMP) and Agile Certified Practitioner (PMI-ACP), I specialize in driving agile transformations. I’ve successfully introduced agile processes to three separate teams, improving collaboration, increasing efficiency, and enhancing project delivery. My passion for agile methodologies lies in their ability to foster creativity, adaptability, and continuous improvement, ensuring that teams meet evolving project requirements with confidence."></ResumeBlock>
            <ResumeBlock name="User Experience Leader" color="yellow" graphic="./assets/ux.png" alt='sattelite in space'description="In my current role at Purdue IT, I lead the direction of user experience (UX) initiatives, ensuring that the technology solutions we create are intuitive, user-friendly, and aligned with the needs of our diverse user base. I hold a UX certification from the Nielsen Norman Group, which has deepened my expertise in creating seamless, engaging experiences. I bring this expertise to every project, whether it's improving user interfaces, enhancing accessibility, or driving cross-functional collaboration to deliver meaningful solutions."></ResumeBlock>
        </div>
    )
}


export default Resume
