export const PROFILE = {
  name: "Harshith Reddy Taduri",
  title: "AI/ML Engineer · Data Scientist · Python Developer",
  tagline: "Turning data into intelligent, real-world solutions.",
  intro:
    "I build AI and Machine Learning systems that solve real problems — from cybersecurity to computer vision and healthcare. Passionate about deep learning, data analytics, and shipping scalable software.",
  email: "tharshithreddy433@gmail.com",
  phone: "+91 9676210774",
  location: "Hyderabad, Telangana, India",
  linkedin: "https://www.linkedin.com/in/harshithreddytaduri",
  github: "https://github.com/Harshith-Reddy01",
  resume: "/HarshithReddy_Resume.pdf",
};

export const SKILLS: { category: string; items: string[] }[] = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL", "Bash"],
  },
  {
    category: "Machine Learning & AI",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "Deep Learning (ANN, CNN, LSTM)",
      "NLP",
      "Computer Vision",
      "Prompt Engineering",
      "CUDA Fundamentals",
      "ML Pipelines",
      "Feature Engineering",
    ],
  },
  {
    category: "Data Analytics & Visualization",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "EDA",
      "Power BI",
      "DAX",
      "Data Modeling",
      "KPI Reporting",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL Server", "DBMS"],
  },
  {
    category: "Web Development",
    items: ["Flask", "REST APIs", "HTML/CSS"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Jupyter Notebook", "Linux"],
  },
];

export const PROJECTS = [
  {
    title: "Hybrid ML Model for Botnet Detection",
    tags: ["Python", "CNN", "RNN", "LSTM", "ANN", "Flask", "MySQL"],
    overview:
      "Stacked deep learning architecture (CNN + RNN + LSTM + ANN) for detecting botnet attacks in IoT environments.",
    features: [
      "98% detection accuracy on real-world IoT traffic",
      "End-to-end preprocessing, feature engineering, model training",
      "Flask web app with MySQL for real-time attack prediction",
    ],
    highlight: true,
    github: "https://github.com/Harshith-Reddy01",
  },
  {
    title: "Crowd Management using CCTV Network",
    tags: ["Python", "YOLOv8", "Deep Learning", "Computer Vision"],
    overview:
      "YOLOv8-based real-time people detection and counting that plugs into existing CCTV infrastructure.",
    features: [
      "Real-time crowd monitoring in public environments",
      "Automated counting reduces manual security effort",
      "Integrates with existing CCTV hardware — no rewiring needed",
    ],
    github: "https://github.com/Harshith-Reddy01",
  },
  {
    title: "Neurofibroma Detection & Classification",
    tags: ["Python", "CNN", "Deep Learning", "Medical Imaging"],
    overview:
      "CNN model that detects and classifies brain tumors from MRI scans, showcasing AI in healthcare.",
    features: [
      "End-to-end pipeline: data collection → preprocessing → training → testing",
      "Trained on medical imaging datasets",
      "Demonstrates viability of AI-assisted diagnostics",
    ],
    github: "https://github.com/Harshith-Reddy01",
  },
];

export const EXPERIENCE = [
  {
    role: "Data Science Intern",
    org: "Infoz IT Solutions",
    duration: "Mar 2026 — May 2026",
    location: "Hyderabad, Telangana",
    points: [
      "Developed and tested data science solutions in Python using NumPy, Pandas, Seaborn, and Matplotlib.",
      "Performed data cleaning, EDA, and visualization to extract meaningful insights from large datasets.",
      "Implemented ML and deep learning models for classification, regression, and performance evaluation.",
      "Gained exposure to industry-standard data, AI workflows, and full project lifecycles.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech — CSE (Artificial Intelligence & Machine Learning)",
    school: "ACE Engineering College",
    duration: "2021 — 2025",
    detail: "GPA: 7.83",
  },
  {
    degree: "Intermediate — MPC (Mathematics, Physics, Chemistry)",
    school: "Sri Chaitanya Junior College",
    duration: "2019 — 2021",
    detail: "GPA: 9.66",
  },
  {
    degree: "10th Standard — SSC",
    school: "Joshis Vidyaniketan School",
    duration: "2018 — 2019",
    detail: "GPA: 9.8",
  },
];

export const CERTIFICATIONS = [
  "IIT Guwahati — Data Science with AI, Generative AI & Prompt Engineering (E&ICT Academy)",
  "CISCO Networking Academy — CLA, PCAP",
  "Infoz IT — Industry Exposure Program",
  "Cambridge University — Business English Certificate",
];
