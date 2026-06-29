import {
  SiPython,
  SiMysql,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPytorch,
  SiHuggingface,
  SiGit,
  SiGithub,
  SiJupyter,
  SiDocker,
  SiFastapi,
  SiTerraform,
  SiLinux,
  SiGnubash,
  SiPlotly,
  SiOpencv,
} from "react-icons/si";
import { TbSql, TbBrandPowershell, TbChartHistogram, TbDatabase, TbBrain } from "react-icons/tb";
import { FaChartBar } from "react-icons/fa";
import type { IconType } from "react-icons";

export const PROFILE = {
  name: "Harshith Reddy Taduri",
  title: "AI/ML Engineer · Data Scientist · Python Developer",
  tagline: "Turning data into intelligent, real-world solutions.",
  intro:
    "I build AI and Machine Learning systems that solve real problems — across cloud infrastructure, cybersecurity, computer vision, and healthcare. Passionate about deep learning, generative AI, and shipping scalable software.",
  email: "tharshithreddy433@gmail.com",
  phone: "+91 9676210774",
  location: "Hyderabad, Telangana, India",
  linkedin: "https://www.linkedin.com/in/harshithreddytaduri",
  github: "https://github.com/Harshith-Reddy01",
  resume: "/HarshithReddy_Resume.pdf",
};

export type SkillItem = { name: string; icon: IconType };
export type SkillGroup = { category: string; items: SkillItem[] };

export const SKILLS: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: TbSql },
      { name: "Bash", icon: SiGnubash },
    ],
  },
  {
    category: "Machine Learning & Generative AI",
    items: [
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Keras", icon: SiKeras },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Deep Learning (ANN/CNN/LSTM/GNN)", icon: TbBrain },
      { name: "Transformers / LLMs", icon: SiHuggingface },
      { name: "NLP", icon: TbBrain },
      { name: "Computer Vision", icon: SiOpencv },
      { name: "Prompt Engineering", icon: TbBrain },
      { name: "RAG & Vector DBs", icon: TbDatabase },
    ],
  },
  {
    category: "Data Analysis & Visualization",
    items: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Matplotlib", icon: SiPlotly },
      { name: "Seaborn", icon: TbChartHistogram },
      { name: "EDA", icon: TbChartHistogram },
      { name: "Power BI (DAX, Modeling, KPIs)", icon: FaChartBar },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQL Server", icon: TbBrandPowershell },
      { name: "DBMS", icon: TbDatabase },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Jupyter", icon: SiJupyter },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "Docker", icon: SiDocker },
      { name: "FastAPI", icon: SiFastapi },
      { name: "SQLAlchemy", icon: TbDatabase },
      { name: "Terraform", icon: SiTerraform },
      { name: "Linux", icon: SiLinux },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Autonomous Infrastructure-as-Code Generator & Drift Detector",
    tags: [
      "Python",
      "FastAPI",
      "LLMs (Ollama/Groq)",
      "PyTorch Geometric (GNN)",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Terraform",
      "Keycloak",
      "Next.js",
    ],
    overview:
      "End-to-end AI-powered IaC platform that automates cloud infrastructure generation, drift detection, and governance.",
    features: [
      "LLM-driven natural-language IaC generation and AI remediation recommendations",
      "Scalable FastAPI backend with PostgreSQL, Redis, Celery, and a containerized multi-service architecture",
      "Terraform + Open Policy Agent (OPA) for compliance validation and policy enforcement",
      "Graph Neural Networks for blast-radius prediction and infrastructure impact analysis",
    ],
    highlight: true,
    github: "https://github.com/Harshith-Reddy01",
  },
  {
    title: "Hybrid ML Model for Botnet Detection",
    tags: ["Python", "CNN", "RNN", "LSTM", "ANN", "Flask", "MySQL"],
    overview:
      "Stacked deep learning architecture (CNN + RNN + LSTM + ANN) for detecting botnet attacks in IoT environments.",
    features: [
      "98% detection accuracy on real-world IoT traffic",
      "End-to-end preprocessing, feature engineering, and model training",
      "Flask web app with MySQL for real-time attack prediction",
    ],
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
      "Evaluated with precision, recall, and real-time inference metrics",
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
    role: "AI Intern",
    org: "SYNYCS",
    duration: "June 2026",
    location: "Hyderabad, Telangana",
    points: [
      "Designed, developed, and delivered an end-to-end AI-powered Infrastructure-as-Code (IaC) Drift Detection platform from scratch as the key deliverable.",
      "Translated project requirements into a scalable AI solution with backend services, cloud automation workflows, and intelligent infrastructure analysis.",
      "Integrated modern AI and cloud technologies for infrastructure governance, compliance validation, policy enforcement, and intelligent drift analysis.",
      "Gained hands-on experience across the complete software development lifecycle — from system design to deployment.",
    ],
  },
  {
    role: "Data Science Intern",
    org: "Infoz IT Solutions",
    duration: "Mar 2026 — May 2026",
    location: "Hyderabad, Telangana",
    points: [
      "Performed EDA and data preprocessing on real-world Kaggle datasets using Pandas, NumPy, Matplotlib, and Seaborn.",
      "Built and evaluated classification and regression models with Scikit-learn, applying feature engineering and hyperparameter tuning.",
      "Developed interactive Power BI dashboards to communicate data-driven insights to technical and non-technical stakeholders.",
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
