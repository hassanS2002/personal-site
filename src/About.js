import React from 'react';
import './About.css'; // We'll create this file for the timeline styles

const About = () => {
    const experiences = [
        {
            title: "Software Automation Engineer Intern",
            company: "Advanced Micro Devices (AMD)",
            period: "May 2023 – April 2024",
            details: [
                "Executed automated tests on next-generation GPUs, ensuring functionality and performance standards prior to release.",
                "Automated testing workflows using Python and Bash resulting in a 40% increase in test coverage efficiency.",
                "Optimized and refactored existing automation scripts to boost their execution performance by 15%.",
                "Implemented a Bash script to streamline defect identification, boosting sorting precision by 30% and aiding developer issue resolution.",
                "Lead a collaborative debugging initiative that identified critical root causes for major bugs, expediting the development of patches and updates by 22%."
            ]
        },
        {
            title: "Quality Assurance Engineer Intern",
            company: "Electronic Arts (EA)",
            period: "May 2022 – August 2022",
            details: [
                "Worked on mobile games team helping with the QA process such as test plan writing, test strategy, and bug verification.",
                "Utilizing tools such as JIRA and TestRail following the software development lifecycle (SDLC) and Agile methodologies.",
                "Used Cypress to automate manual test cases which resulted in a 30% reduction in manual labor.",
                "Performed Unit, Functional, and Regression Testing to ensure the highest quality of bug tracking and fixing.",
                "Collaborated across teams to troubleshoot, enhance quality, and mitigate risks, achieving a 65% reduction in user-facing bugs."
            ]
        },
        {
            title: "Software Developer Intern",
            company: "Simulence",
            period: "January 2022 – April 2022",
            details: [
                "Front end development with Vue.js and back end with Java using Spring Boot.",
                "Designed and implemented over 5+ new features based upon feedback given.",
                "Found and fixed over 10+ bugs including accessibility compliance and issues in web applications components.",
                "Integrated REST APIs to extend application capabilities, resulting in a 15% improvement in data retrieval efficiency."
            ]
        }
    ];

    return (
        <section id="about" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
                <p className="text-lg text-center max-w-2xl mx-auto mb-12">
                    I'm Hassan Siddiqui, a software developer. I'm always learning new software, 
                    developing my business acumen, and working on personal projects and hackathons. 
                    Let's work together to bring your ideas to life with cutting-edge technology.
                </p>
                <h3 className="text-2xl font-bold mb-8 text-center">My Experience</h3>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-content">
                                <h3 className="font-bold text-xl mb-2">{exp.title}</h3>
                                <h4 className="text-gray-400 mb-2">{exp.company}</h4>
                                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                                <ul className="list-disc list-inside text-sm">
                                    {exp.details.map((detail, idx) => (
                                        <li key={idx} className="mb-2">{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;