import ecommerce from "@/public/images/ecommerce.png";
import gym from "@/public/images/gym.png";
import chatgpt from "@/public/images/chatgpt.png";
import weather from "@/public/images/weather.png";
import movie from "@/public/images/movie.png";

import frontend from "@/public/icons/frontend.png";
import backend from "@/public/icons/backend.png";
import app from "@/public/icons/app.png";
import uiux from "@/public/icons/uiux.png";

export const navbar = ["About", "Skills", "Experience", "Services", "Contacts"];

export const aboueMe =
  "I am a passionate Computer Science student with a flair for full-stack web development. I specialize in building dynamic, interactive, and scalable websites that merge functionality with exceptional design. My mission is to create impactful web applications that solve real-world problems while delivering seamless user experiences. With a commitment to learning and innovation, I continuously explore emerging technologies to stay ahead in the fast-paced world of tech.";

export const details = {
  Name: "Mohamed Hafid",
  Degree: "Computer Science Engineering",
  Email: "mohamedhafid825@gmail.com",
  Phone: "8438883656",
};

export const skills = {
  "React Js": "90%",
  "Express Js": "80%",
  "React Native": "75%",
  "Flutter": "70%",
  "Mongo DB": "85%",
  "Mysql": "90%",
};


export const experience = [
  {
    label: "Web Development Intern",
    company: "Oneyes Infotech Solution | June 5 2024 - July 4 2024",
    description:
      "I completed an internship at OneYes Infotech Solution, Chennai, where I gained hands-on experience in web development. During the internship, I collaborated with the team to design responsive layouts and implement interactive features, enhancing my skills in web development.",
  },
];

export const services = [
  {
    icon: frontend,
    label: "Frontend Development",
    description:
      "I excel in frontend development, creating responsive, visually appealing interfaces with React, Next.js, HTML, CSS, and JavaScript. I focus on crafting seamless designs that deliver exceptional user experiences.",
  },
  {
    icon: backend,
    label: "Backend Development",
    description:
      "Skilled in backend development, I specialize in building scalable systems using Node.js, Express, and MongoDB. I design efficient APIs and ensure secure, reliable server-side operations for seamless application performance.",
  },
  {
    icon: app,
    label: "App Development",
    description:
      "Experienced in building responsive mobile apps using React Native and Flutter, focusing on seamless user experiences and cross-platform performance.",
  },
  {
    icon: uiux,
    label: "UI / UX Design",
    description:
      "I excel in UI/UX design, creating intuitive and visually engaging interfaces that enhance user satisfaction. With a focus on user-centric design principles, I craft seamless experiences that balance aesthetics and functionality. My goal is to deliver designs that are not only beautiful but also easy to navigate and highly effective.",
  },
];

export const projects = [
  {
    image: ecommerce,
    title: "E-Commerce Website",
    description:
      " A full-stack e-commerce website that allows users to browse products, add them to the cart, and complete the purchase. The website features user authentication, product search, and payment integration using Stripe API.",
    github: "https://github.com/mohamedshafid/food_delivery",
  },
  {
    image: gym,
    title: "Gym website",
    description:
      " A responsive gym website that showcases the gym's services, trainers, and facilities. The website features a user-friendly interface, interactive elements, and a contact form for inquiries.",
    github: "https://github.com/mohamedshafid/gym_website",
  },
  {
    image: chatgpt,
    title: "Chatgpt Clone",
    description:
      " A chatbot application that uses the OpenAI GPT-3 model to generate human-like responses to user queries. The application features a chat interface where users can interact with the chatbot and receive responses in real-time.",
    github: "https://github.com/mohamedshafid/chatgpt_clone",
  },
  {
    image: weather,
    title: "Weather App",
    description:
      " A weather application that displays real-time weather information based on the user's location. The application features a clean, intuitive interface with weather updates, temperature, and other relevant",
    github: "https://github.com/mohamedshafid/weather_app",
  },
  {
    image:  movie,
    title: "Movie Website",
    description:
      " A movie website that allows users to browse movies, view details, and watch trailers. The website features a search functionality, movie recommendations, and user reviews.",
    github: "https://github.com/mohamedshafid/movie_website",
  },
];
