import "./App.css";
import { useEffect } from "react";
import ContactForm from "./ContactForm";
import NavBar from './NavBar';
import About from './About';
import resume from './resume.pdf';

// Import AOS library
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS

// Import Font Awesome icons
import { FaReact, FaPython, FaMicrochip, FaJava } from 'react-icons/fa';

// Import react-scroll
import { Link as ScrollLink } from 'react-scroll'; // Add this import

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once when in view
    });

    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
      document.head.appendChild(stylesheet);
    }
  }, []);

  // Define the function to open the resume
  const openResume = () => {
    window.open(resume, "_blank");
  };

  // Define the function to open LinkedIn profile
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/hassan-siddiqui-02/", "_blank");
  };

  // Define the function to open Github profile
  const openGithub = () => {
    window.open("https://github.com/hassanS2002", "_blank");
  };

  const projects = [

    {
      title: "League of Legends Champion Info Web Application",
      date: "2021",
      link: "https://hassans2002.github.io/lolapp/",
      description: [
        "Developed a web application using React that lets users see all league of legends champions and their abilities.",
        "Used a REST API to import accurate league of legend's champion data that would load instantly.",
        "Implemented responsive design principles, resulting in a 35% higher usability score on mobile devices.",
        "Deployed optimization techniques for efficient state management, reducing resource consumption and improving rendering performance by 15%."
      ],
      icon: <FaReact />
    },
    {
      title: "Path Finding Algorithm",
      date: "2021",
      link: "https://github.com/hassanS2002/Path-Finding-Algo",
      description: [
        "Programmed and designed a visualization tool utilizing Python, which is customizable by the user for path finding algorithms.",
        "Enhanced understanding and usability of data structures and algorithms implementing Dijkstra's algorithm and A* algorithm.",
        "Optimized underlying data structures, resulting in a 20% improvement in algorithm execution time."
      ],
      icon: <FaPython />
    },
    {
      title: "Temperature and Humidity Monitoring System",
      date: "2021",
      link: "https://github.com/hassanS2002/Temperature-Humidity-Sesnor/tree/main",
      description: [
        "Developed a real-time monitoring system using an Arduino and a 16x2 LCD display to measure and display the room's temperature and humidity.",
        "Integrated a DHT11 sensor to accurately capture environmental data.",
        "Programmed the system to output temperature (in Celsius) and humidity levels with an intuitive display.",
        "Utilized the LiquidCrystal library for seamless communication between the Arduino and LCD module, ensuring clear and consistent data visualization.",
        "Optimized the system for efficient sensor reading and display refresh with a delay of 1 second."
      ],
      icon: <FaMicrochip /> // You'll need to import this icon or use an appropriate alternative
    },
    {
      title: "Bookstore Application",
      date: "2021",
      link: "https://github.com/hassanS2002/Coe528-Proj",
      description: [
        "Implemented session management in Java to achieve data integrity across multiple accounts while improving teamwork skills in a group of 5.",
        "Introduced the state design pattern with 2 states allowing the program more scalability.",
        "Evaluated the program with 12 tests using the JUnit testing suite to ensure the design operates within specifications."
      ],
      icon: <FaJava /> // Changed to Java icon
    },
  ];

  return (
    <div>
      <NavBar />

      {/* Profile Section */}
      <section id="profile" className="pt-20">
        <div className="section-pic">
          <img src="./profilepic.jpeg" alt="Hassan Profile Pic"></img>
        </div>
        <div className="section_text">
          <p className="Section_text_p1">Hello, I'm</p>
          <h1 className="title">Hassan Siddiqui</h1>
          <p className="section_text_p2">Aspiring Software Engineer</p>
          <p className="section_text_p2">4th Year Computer Engineering Student</p>
          <div className="Button-ctn">
            <button className="btn btn-color-2 mr-4" onClick={openResume}>Resume</button>
            <ScrollLink 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="btn btn-color-1 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
        </div>
        <div id="socials-container">
          <img src="./61109.png" alt="My Linkedin Profile" className="icon" onClick={openLinkedIn} />
          <img src="./gitlogo.png" alt="My Github Profile" className="icon2" onClick={openGithub} />
        </div>
      </section>

      <About />

      {/* Projects Section */}
      <section id="projects" data-aos="fade-up" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4 text-blue-500">{project.icon}</div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">{project.date}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-4 inline-block">
                  View Project
                </a>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {project.description.map((item, i) => (
                    <li key={i} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-aos="fade-up" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default App;
