import { createContext, useContext } from "react";
import {
  SiPython, SiMysql, SiPostgresql, SiReact,
  SiSpring, SiSpringboot, SiHibernate, SiGit, SiGithub,
  SiJson, SiJunit5, SiIntellijidea, SiEclipseide, SiDbeaver,
} from "react-icons/si";
import {
  FaDatabase, FaCode, FaTools, FaLayerGroup, FaGlobe,
  FaAws, FaJava, FaPhone, FaEnvelope, FaLinkedin, FaGithub,
} from "react-icons/fa";

export const NAV = ["Experience", "Skills", "Projects", "Education"];

export const SKILL_ICONS = {
  java:               { icon: FaJava,        color: "#f89820" },
  sql:                { icon: FaDatabase,     color: "#00758f" },
  python:             { icon: SiPython,       color: "#3776ab" },
  spring:             { icon: SiSpring,       color: "#6db33f" },
  "spring boot":      { icon: SiSpringboot,   color: "#6db33f" },
  hibernate:          { icon: SiHibernate,    color: "#a0aec0" },
  jpa:                { icon: FaLayerGroup,   color: "#818cf8" },
  reactjs:            { icon: SiReact,        color: "#61dafb" },
  mysql:              { icon: SiMysql,        color: "#00758f" },
  postgresql:         { icon: SiPostgresql,   color: "#336791" },
  "rest apis":        { icon: FaGlobe,        color: "#06b6d4" },
  json:               { icon: SiJson,         color: "#f5a623" },
  "web applications": { icon: FaCode,         color: "#818cf8" },
  junit:              { icon: SiJunit5,       color: "#25a162" },
  eclipse:            { icon: SiEclipseide,   color: "#7b5ea7" },
  myeclipse:          { icon: SiEclipseide,   color: "#7b5ea7" },
  intellij:           { icon: SiIntellijidea, color: "#fe315d" },
  dbeaver:            { icon: SiDbeaver,      color: "#5b8dd9" },
  git:                { icon: SiGit,          color: "#f05032" },
  github:             { icon: SiGithub,       color: "#e2e8f0" },
  aws:                { icon: FaAws,          color: "#ff9900" },
  _fallback:          { icon: FaTools,        color: "#94a3b8" },
};

export const portfolioData = {
  name: "REPATI SOMESH KUMAR",
  title: "Java Spring Boot Developer",
  contact: [
    { icon: FaPhone,    href: null,                                          title: "+91-9052608804" },
    { icon: FaEnvelope, href: "mailto:somesh.repati@gmail.com",          title: "somesh.repati@gmail.com" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/someshkumar-repati", title: "LinkedIn" },
    { icon: FaGithub,   href: "https://github.com/someshkumar721",        title: "GitHub" },
  ],
  experience: [
    {
      period: "Oct 2023 – Feb 2026",
      company: "APCFSS",
      points: [
        "Architected and developed scalable microservices using Spring Boot, following domain-driven and modular design principles to ensure high availability and faulttolerance.",
        "Implemented a layered architecture (Controller, Service, DAO) adhering to OOP principles and industry-standard design patterns.",
        "Designed and implemented secure RESTful APIs for efficient JSON-based communication across distributed systems.",
        "Implemented Spring Security with JWT-based authentication and role-based authorization to protect sensitive government financial and citizen data.",
        "Built enterprise-grade backend components using Controller, Service, and DAO layers, adhering to SOLID principles and clean code standards.",
        "Utilized Spring Data JPA and Hibernate for ORM, optimizing database interactions and application performance.",
        "Developed complex SQL queries with joins, subqueries, indexing, and query optimization to ensure data integrity and performance.",
        "Applied OOAD principles and design patterns to improve code reusability and maintainability.",
        "Implemented centralized logging using SLF4J and Logback for effective production monitoring and debugging.",
        "Collaborated with QA, DevOps, and cross-functional teams to resolve critical production issues.",
        "Managed source code using Git and AWS CodeCommit, and supported CI/ CD pipelines for reliable deployments."
      ],
    },
    {
      period: "Sep 2020 – Feb 2023",
      company: "VWEB HR Solutions",
      points: [
        "Implementing functionalities using Controller, Service and DAO layers.",
        "Design, write and test high-quality software by using a range of practices, Clean Code or SOLID Principles Understanding of web services technologies such as REST, HTTP, JSON.",
        "Resolving the bugs assigned by the testers in the module.",
        "Implemented Rest Applications in the Micro service Architecture.",
        "Built enterprise-grade backend components using Controller, Service, and DAO layers, adhering to SOLID principles and clean code standards.",
        "Utilized Spring Data JPA and Hibernate for ORM, optimizing database interactions and application performance.",
        "Used GIT for code repository and as version control mechanism.",
        "Object-Oriented Analysis and design using common design patterns."
      ],
    },
  ],
  skills: {
    "Programming Languages": "Java, SQL",
    "Backend Frameworks":    "Spring, Spring Boot, Hibernate, JPA",
    Databases:               "MySQL, PostgreSQL",
    "APIs & Integrations":   "REST APIs, JSON, Web Applications",
    "Testing & Quality":     "JUnit, SonarQube",
    "Dev Tools":             "Eclipse, MyEclipse, STS, IntelliJ, DBeaver",
    "Version Control":       "Git, AWS",
    "Tomcat Server":         "PostMan",
    "Open API":              "SwaggerUI",
  },
  projects: [
    {
      name: "DOPP Cadre & Position Management (Andhra Pradesh Govt)",
      points: [
        "Built a centralized cadre management system enabling auditable post sanctioning, position lifecycle management (create/update/delete), nomenclature standardization, and rule-based handling of vacant posts and positions.",
        "Designed and developed a centralized system for managing state cadre posts and positions.",
        "Enabled structured, auditable sanctioning of state cadre posts.",
        "Implemented workflows for creation, deletion, and controlled management of posts and positions.",
        "Standardized and facilitated updates to position nomenclature.",
        "Supported position name shifting for vacant posts and safe deletion of posts with associated vacant positions."
      ],
    },
    {
      name: "PROCUREMENT AND CONSULTANT SERVICES (Andhra Pradesh Govt)",
      points: [
        "Procurement and Consultant service main aim to develop Government need to require for (Adviser or Counselor) to develop Ares who are backwards in govt. And who are eligible for job onboarding. And to those who have been onboarded collect Employee updating earnings and deduction. Get the monthly attendance by the HOD's and. Generate the Pay bill for giving monthly salaries.",
        "Managing employee onboarding.",
        "Maintaining employee earnings and deductions.",
        "Collecting monthly attendance from Heads of Departments (HODs).",
        "Generating pay bills for monthly salary disbursement, This system ensures transparency, efficiency, and accuracy in employee management and payroll processing."
      ],
    },
    {
      name: "ANDHRA PRADESH STATECIVIL SUPPLIES CORPORATION LTD, (Andhra Pradesh State Govt)",
      points: [
        "The main of this project This project aims to develop a system for a corporation to manage vendor registration, bill generation, payments, and accounts. It streamlines the process of suppliers providing goods by facilitating vendor registration, bill creation, and payment initiation. Additionally, it includes an accounts section for tracking financial transactions related to vendor payments.",
        "The system streamlines the supplier workflow by",
        "Enabling vendor registration.",
        "Facilitating bill creation.",
        "Initiating vendor payments.",
        "It also includes an accounts module to track and manage all financial transactions related to vendor payments efficiently."
      ],
    },
    {
      name: "Budget (Andhra Pradesh State Budget)",
      points: [
        "Developed a centralized budgeting platform for the State Budget of Andhra Pradesh, enabling efficient planning, allocation, and monitoring of departmental expenditures.",
        "Implemented approval workflows, and variance analysis to ensure fiscal discipline and transparency across government departments.",
        "Implemented comprehensive financial reports for all departments to track fund allocation, utilization, and expenditure status.",
      ],
    },
    {
      name: "PICK AND GO",
      points: [
        "Pick & Go allows customers to conveniently leave the store after selecting their items, as purchases are automatically charged to their accounts. Customers can view their purchase receipts directly in the Pick & Go mobile application.",
        "The system integrates Order Management, Customer Details, Product Management, User Management, and Pickup Points. Pick & Go follows a multi-stage process that focuses on initiating and developing relationships with producers of goods and services to fulfill customer needs efficiently. The main goal of this project.",
        "Reduce delivery and product charges for customers.",
        "Minimize website and application maintenance costs for producers.",
        "Pickup outlets are created along common routes, enabling customers to collect their items conveniently while traveling.",
      ],
    },
    {
      name: "ORGER MANAGMENT SYSTEM",
      points: [
        "The Order Management System (OMS) tracks order processing and ensures quick fulfillment. It enables back- office users to manage incoming orders, view and edit order details, track order status, and directly contact customers with open orders.",
        "With compact and efficient order management features, the system ensures smooth order processing. OMS includes:",
        "Integration with multiple payment providers.",
        "State machine modeling.",
        "Order creation and processing.",
        "Purchase order generation.",
        "Vendorallocation"
      ],
    },
  ],
  education: [
    {
      period: "2017 – 2020",
      institution: "Sri Venkateswara Arts & Science College.",
      degree: "Bachelor of Arts",
      cgpa: "6.30",
    },
  ],
};

const PortfolioContext = createContext(portfolioData);
export const usePortfolio = () => useContext(PortfolioContext);
export default PortfolioContext;
