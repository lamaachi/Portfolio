import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Skylark Services",
    role: "AI / Back-end Engineering",
    period: "Feb 2025 – Jun 2025",
    description: `• Fine-tuned BERT and LLM models for classification and text generation tasks.
• Developed intelligent back-end services with Spring AI, integrating OpenAI APIs.
• Deployed models via FastAPI for a secure and scalable service.
• Automated annotation using GenAI and Label Studio in NLP pipelines.
• Implemented CI/CD pipelines with GitLab for continuous integration and deployment.`
  },
  {
    id: 2,
    company: "PCS Agri",
    role: "Full-Stack Developer",
    period: "Jun 2024 – Aug 2024",
    description: `• Designed an offline-first mobile architecture with SQLite for seamless data synchronization.
• Improved app performance (+20%) through local data optimization.
• Analyzed and improved code quality with SonarQube, reducing bugs and enhancing maintainability.`
  },
  {
    id: 3,
    company: "WebLinking",
    role: "Full-Stack Developer",
    period: "Apr 2023 – Jun 2023",
    description: `• Developed a complete web application with Spring Boot and a modular architecture.
• Deployed on Microsoft Azure to ensure high availability and scalability.
• Set up CI/CD pipelines with GitHub Actions to automate deployments.`
  },
  {
    id: 4,
    company: "VRI ELECTRO",
    role: ".NET Developer",
    period: "Apr 2022 – Jun 2022",
    description: `• Designed a desktop application for managing household appliance repairs, boosting productivity by 30%.
• Implemented a centralized SQL Server database for unified data access.`
  }
];
