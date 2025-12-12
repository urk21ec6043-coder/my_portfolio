import { Experience, Education, Project, SkillCategory, Certification, Award, SocialLink } from './types';

export const PROFILE = {
  name: "Gowtham Singh Saud",
  title: "Machine Learning Engineer & Robotics Enthusiast",
  email: "gowthamsinghsaud626@gmail.com",
  phone: "+91 9345405257",
  location: "Ooty, India",
  objective: "Motivated B.Tech graduate in Electronics and Computer Engineering with a strong foundation in AI, robotics, and cloud computing. Seeking opportunities to apply expertise in autonomous systems, machine learning, and computer vision to develop impactful real-world solutions."
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Email", url: `mailto:${PROFILE.email}`, icon: "mail" },
  { platform: "Phone", url: `tel:${PROFILE.phone}`, icon: "phone" },
  // Assuming placeholders for LinkedIn/GitHub as they weren't explicitly in the resume text but are standard.
  // Adding them as placeholders or omitting if strictly adhering to text. 
  // Given "animation portfolio", usually implies digital presence. 
  // I will stick to what is provided in the contact info.
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp1",
    role: "Machine Learning Engineer",
    company: "AltrAI Technologies",
    location: "Chennai",
    period: "Jul 2024 – Aug 2025",
    points: [
      "Contributed to the Cattle Monitoring System by developing machine learning components and backend infrastructure.",
      "Built backend services using Django framework and PostgreSQL database.",
      "Integrated YOLOv8 model for real-time object detection in the system."
    ]
  },
  {
    id: "exp2",
    role: "Quality Engineer Intern",
    company: "MathWorks",
    location: "Remote",
    period: "Jun 2024 – Aug 2024",
    points: [
      "Developed and tested AI models using MATLAB & Simulink, improving accuracy by 15%.",
      "Streamlined testing workflows, reducing validation time by 10%.",
      "Collaborated with cross-functional teams to enhance software reliability."
    ]
  },
  {
    id: "exp3",
    role: "Core Team Member",
    company: "Prodigy Infotech",
    location: "Remote",
    period: "Jan 2024 – May 2024",
    points: [
      "Developed generative AI models (GPT-2, Stable Diffusion), improving output quality by 20%.",
      "Presented demos to stakeholders, securing project approval.",
      "Optimized models to meet real-time application needs."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    degree: "B.Tech in Electronics and Computer Engineering",
    institution: "Karunya University",
    location: "Coimbatore, India",
    period: "Aug 2021 – Jun 2025",
    coursework: "Artificial Intelligence, Machine Learning, Robotics, Embedded Systems"
  }
];

export const SKILLS: SkillCategory[] = [
  { category: "Languages", skills: ["Python", "C", "C++", "Java"] },
  { category: "Web", skills: ["HTML", "CSS", "JavaScript", "Django"] },
  { category: "ML / AI", skills: ["PyTorch", "SVM", "KNN", "RNN", "Deep Learning", "Computer Vision", "YOLOv8", "Vertex AI"] },
  { category: "Cloud & DB", skills: ["Google Cloud Platform", "Microsoft Azure", "MySQL", "PostgreSQL"] },
  { category: "Robotics & Tools", skills: ["ROS", "Gazebo", "MATLAB", "Simulink", "Arduino", "SLAM", "IoT", "Linux", "Git"] }
];

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Webpage Chatbot using Vertex AI and Google Cloud",
    description: "Developed an AI-powered chatbot for seamless user interaction on a webpage, utilizing Vertex AI for natural language processing and Google Cloud for scalable deployment. Achieved efficient query handling and response generation.",
    technologies: ["Vertex AI", "Google Cloud", "NLP"],
    period: "Feb 2024"
  },
  {
    id: "proj2",
    title: "Esophageal Cancer Outcome Prediction",
    description: "Implemented Kernel SVM in MATLAB to classify mortality based on tumor grade and age, achieving 85% accuracy.",
    technologies: ["MATLAB", "SVM", "Machine Learning"]
  },
  {
    id: "proj3",
    title: "Autonomous Drone for Search & Rescue",
    description: "Designed drone with YOLOv8 & OpenCV for real-time human detection with 90% accuracy.",
    technologies: ["YOLOv8", "OpenCV", "Drone"]
  },
  {
    id: "proj4",
    title: "Autonomous Mobile Robot with SLAM",
    description: "Built ROS-based robot with Arduino arm control, achieving 95% mapping accuracy.",
    technologies: ["ROS", "Arduino", "SLAM"]
  },
  {
    id: "proj5",
    title: "IoT-Based Cattle Monitoring System",
    description: "Developed Tkinter GUI with Firebase integration, enhancing data accessibility by 30%.",
    technologies: ["IoT", "Python", "Tkinter", "Firebase"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { id: "cert1", name: "Machine Learning", issuer: "Stanford Online (Coursera)", year: "2023" },
  { 
    id: "cert2", 
    name: "Google Data Analytics Specialization", 
    issuer: "Coursera", 
    year: "2024",
    details: [
      "Foundations: Data, Data, Everywhere",
      "Ask Questions to Make Data-Driven Decisions",
      "Prepare Data for Exploration",
      "Process Data from Dirty to Clean",
      "Analyze Data to Answer Questions",
      "Share Data Through the Art of Visualization",
      "Data Analysis with R Programming",
      "Google Data Analytics Capstone"
    ]
  },
  { id: "cert3", name: "Foundations of Business Intelligence", issuer: "Coursera", year: "2023" },
  { id: "cert4", name: "Data Mining", issuer: "IIT Kharagpur", year: "2024" }
];

export const AWARDS: Award[] = [
  { id: "award1", title: "Gold Prize, Techsome Quiz Competition", year: "2023" },
  { id: "award2", title: "Internal Winner, Smart India Hackathon", description: "Solar tracking system with 12% improved output", year: "2024" },
  { id: "award3", title: "Cash Prize, Technology Business Incubation", description: "Search & Rescue Rover", year: "2024" }
];

export const EXTRACURRICULARS = [
  {
    role: "Director, District Priority Project",
    period: "2023–2024",
    description: "Led 10-member volunteer team, improving community engagement by 25%."
  },
  {
    role: "Trainer, IoT & Robotics Club",
    description: "Trained 20+ students in IoT & robotics projects."
  }
];

export const ADDITIONAL_INFO = {
  languages: ["English (Fluent)", "Hindi (Fluent)", "Tamil (Proficient)"],
  interests: ["Football", "Reading", "Travel"],
  memberships: ["IEEE Member since Dec 2023"]
};