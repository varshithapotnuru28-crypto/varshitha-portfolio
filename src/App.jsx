
import React, { useState } from "react";
import {
  ArrowUpRight, Code2, Database, Cloud,
  GraduationCap, BriefcaseBusiness, Trophy,
  Github, Linkedin, Mail, MapPin, Smartphone,
  Sparkles, Menu, X, BookOpen, Award
} from "lucide-react";

const skills = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["Java", "JavaScript", "SQL"]
  },
  {
    title: "Web Technologies",
    icon: Code2,
    items: ["HTML", "CSS"]
  },
  {
    title: "Databases",
    icon: Database,
    items: ["Firebase Authentication", "Cloud Firestore", "MySQL"]
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    items: ["AWS EC2", "EBS", "VPC"]
  },
  {
    title: "Developer Tools",
    icon: BriefcaseBusiness,
    items: ["Android Studio", "VS Code", "Git", "GitHub"]
  },
  {
    title: "Core Subjects",
    icon: BookOpen,
    items: [
      "DSA",
      "DBMS",
      "Software Engineering",
      "Computer Networks"
    ]
  }
];

const projects = [
  {
    number: "01",
    name: "SkillSwapAI",
    type: "Major Project · Android Application",
    description:
      "An AI-powered skill exchange platform that helps users share skills, discover learning partners, and support collaborative learning.",
    details: [
      "Built with Android and Java.",
      "Used Firebase Authentication and Cloud Firestore.",
      "Integrated Gemini AI for personalized learning roadmaps.",
      "Implemented profile management and skill discovery."
    ],
    tags: ["Android", "Java", "Firebase", "Gemini AI"],
    icon: Smartphone
  },
  {
    number: "02",
    name: "AI Smart Study Assistant",
    type: "Other Project · Web Application",
    description:
      "A web application that processes PDF study materials and generates notes, quizzes, and flashcards using AI.",
    details: [
      "Built using Python and Streamlit.",
      "Integrated Gemini API.",
      "Used PyPDF2 to process PDF study materials.",
      "Deployed as a live application."
    ],
    tags: ["Python", "Streamlit", "Gemini API", "PyPDF2"],
    icon: Sparkles
  }
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">

      {/* NAVBAR */}
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">V</span>
          <span>varshitha<span className="brand-dot">.</span></span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            "About",
            "Education",
            "Skills",
            "Projects",
            "Experience",
            "Achievements"
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}

          <a
            className="nav-contact"
            href="#contact"
            onClick={closeMenu}
          >
            Let's connect <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>

        {/* HERO SECTION */}
        <section className="hero section-wrap" id="home">

          <div className="hero-copy">

            <div className="availability">
              <span className="status-dot"></span>
              COMPUTER SCIENCE & DATA SCIENCE STUDENT
            </div>

            <p className="hero-greeting">Hello, I'm</p>

            <h1>
              Varshitha
              <br />
              <span>Potnuru.</span>
            </h1>

            <p className="hero-summary">
              An enthusiastic CSE (Data Science) undergraduate
              who enjoys building practical software solutions
              with Java, Android, AI tools, and cloud technologies.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>

              <a className="button button-secondary" href="#contact">
                Get in touch <Mail size={16} />
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <MapPin size={15} />
                Andhra Pradesh, India
              </span>

              <span>
                <GraduationCap size={16} />
                Class of 2027
              </span>
            </div>

          </div>

          <div className="hero-side">

            <div className="profile-card">
              <div className="profile-art">

                <div className="art-orbit orbit-one"></div>
                <div className="art-orbit orbit-two"></div>

                <div className="profile-monogram">
                  V<span>.</span>
                </div>

                <div className="floating-chip chip-code">
                  <Code2 size={17} /> Java
                </div>

                <div className="floating-chip chip-ai">
                  <Sparkles size={16} /> AI
                </div>

                <div className="floating-chip chip-cloud">
                  <Cloud size={16} /> Cloud
                </div>

              </div>

              <div className="profile-card-bottom">
                <div>
                  <span className="mini-label">CURRENT FOCUS</span>
                  <strong>Learning · Building · Growing</strong>
                </div>
                <span className="profile-arrow">
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </div>

            <div className="cgpa-card">
              <span className="cgpa-label">ACADEMIC SCORE</span>

              <div className="cgpa-number">
                9.41<span>/10</span>
              </div>

              <div className="cgpa-bar">
                <span></span>
              </div>

              <span className="cgpa-caption">
                B.Tech · CSE (Data Science)
              </span>
            </div>

          </div>

          <a className="scroll-cue" href="#about">
            ↓ SCROLL TO EXPLORE
          </a>

        </section>

        {/* ABOUT SECTION */}
        <section className="section-wrap section-block" id="about">

          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title="Curious mind. Practical builder."
          />

          <div className="about-grid">

            <div className="about-main">

              <p className="about-lead">
                I'm a Computer Science and Engineering
                (Data Science) undergraduate at ANITS,
                interested in software development,
                Android applications, and cloud computing.
              </p>

              <p className="body-copy">
                I enjoy turning ideas into useful applications
                and exploring technologies that make products
                more helpful. Through academic projects and
                hands-on learning, I have worked with Java,
                Firebase, Python, web technologies, and AWS
                fundamentals.
              </p>

            </div>

            <div className="about-facts">

              <div className="fact">
                <span>01</span>
                <div>
                  <strong>Problem solving</strong>
                  <small>DSA and core CS foundations</small>
                </div>
              </div>

              <div className="fact">
                <span>02</span>
                <div>
                  <strong>Application development</strong>
                  <small>Android and web projects</small>
                </div>
              </div>

              <div className="fact">
                <span>03</span>
                <div>
                  <strong>Continuous learning</strong>
                  <small>AI tools and cloud computing</small>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="soft-section" id="education">
          <div className="section-wrap section-block">

            <SectionHeading
              eyebrow="MY ACADEMIC JOURNEY"
              title="Education"
              text="Building a strong foundation in technology and problem solving."
            />

            <div className="timeline">

              <div className="timeline-item">
                <div className="timeline-marker">
                  <GraduationCap size={18} />
                </div>

                <div className="timeline-content">
                  <span className="timeline-date">
                    2023 — 2027
                  </span>

                  <h3>
                    Anil Neerukonda Institute of Technology & Sciences
                  </h3>

                  <p>
                    B.Tech · Computer Science and Engineering
                    (Data Science)
                  </p>

                  <strong className="score">
                    CGPA: 9.41/10
                  </strong>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <BookOpen size={17} />
                </div>

                <div className="timeline-content">
                  <span className="timeline-date">2023</span>

                  <h3>Sri Sampath Sai Junior College</h3>

                  <p>Intermediate · MPC</p>

                  <strong className="score">98.3%</strong>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <Award size={17} />
                </div>

                <div className="timeline-content">
                  <span className="timeline-date">2021</span>

                  <h3>Z.P.H. School</h3>

                  <p>Secondary School Certificate (SSC)</p>

                  <strong className="score">98%</strong>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section-wrap section-block" id="skills">

          <SectionHeading
            eyebrow="WHAT I WORK WITH"
            title="Technical skills"
            text="Tools and technologies I have learned and used in my projects."
          />

          <div className="skills-grid">

            {skills.map(({ title, items, icon: Icon }, index) => (
              <article className="skill-card" key={title}>

                <div className="skill-card-top">
                  <span className="skill-icon">
                    <Icon size={19} />
                  </span>

                  <span className="skill-index">
                    0{index + 1}
                  </span>
                </div>

                <h3>{title}</h3>

                <div className="skill-tags">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

              </article>
            ))}

          </div>
        </section>

        {/* PROJECTS */}
        <section className="soft-section" id="projects">

          <div className="section-wrap section-block">

            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Projects I'm proud of"
              text="A selection of applications built through learning and experimentation."
            />

            <div className="projects-grid">

              {projects.map(
                ({ number, name, type, description, details, tags, icon: Icon }) => (

                  <article className="project-card" key={name}>

                    <div className="project-top">
                      <span className="project-number">
                        {number} / PROJECT
                      </span>

                      <span className="project-icon">
                        <Icon size={21} />
                      </span>
                    </div>

                    <span className="project-type">{type}</span>

                    <h3>{name}</h3>

                    <p className="project-description">
                      {description}
                    </p>

                    <ul className="project-details">
                      {details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>

                    <div className="project-tags">
                      {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                  </article>
                )
              )}

            </div>
          </div>
        </section>

        {/* INTERNSHIP */}
        <section
          className="section-wrap section-block"
          id="experience"
        >

          <SectionHeading
            eyebrow="LEARNING BEYOND THE CLASSROOM"
            title="Internship experience"
          />

          <article className="experience-card">

            <div className="experience-icon">
              <Cloud size={25} />
            </div>

            <div className="experience-content">

              <div className="experience-heading">

                <div>
                  <span className="timeline-date">
                    MAY — JUL 2025
                  </span>

                  <h3>AWS Cloud Computing & DevOps Intern</h3>

                  <p>
                    Andhra Pradesh State Skill Development
                    Corporation (APSSDC)
                  </p>
                </div>

                <span className="grade-pill">A Grade</span>

              </div>

              <ul className="experience-list">
                <li>
                  Learned AWS cloud fundamentals, Linux
                  environments, and basic cloud infrastructure
                  provisioning and management.
                </li>

                <li>
                  Practiced Git version control and explored
                  fundamental DevOps concepts and CI/CD workflows.
                </li>
              </ul>

              <div className="project-tags">
                <span>AWS</span>
                <span>Linux</span>
                <span>Git</span>
                <span>DevOps</span>
                <span>CI/CD</span>
              </div>

            </div>
          </article>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="soft-section" id="achievements">

          <div className="section-wrap section-block">

            <SectionHeading
              eyebrow="MILESTONES"
              title="Achievements & certifications"
            />

            <div className="achievement-grid">

              <article className="achievement-card">
                <span className="achievement-icon">
                  <Trophy size={20} />
                </span>

                <div>
                  <h3>Technova 2025 Hackathon</h3>
                  <p>
                    Coordinated the hackathon at ANITS,
                    supporting event organization and coordination.
                  </p>
                </div>
              </article>

              <article className="achievement-card">
                <span className="achievement-icon">
                  <Cloud size={20} />
                </span>

                <div>
                  <h3>AWS Workshop</h3>
                  <p>
                    Conducted a workshop introducing AWS services
                    and cloud computing fundamentals.
                  </p>
                </div>
              </article>

              <article className="achievement-card">
                <span className="achievement-icon">
                  <Trophy size={20} />
                </span>

                <div>
                  <h3>Smart India Hackathon</h3>
                  <p>
                    Participated with an APSRTC Bus Live
                    Tracking System.
                  </p>
                </div>
              </article>

              <article className="achievement-card">
                <span className="achievement-icon">
                  <Award size={20} />
                </span>

                <div>
                  <h3>Certifications</h3>
                  <p>
                    HackerRank — Java Basics.
                    Unstop — Excel and Power BI.
                  </p>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="section-wrap contact-section"
          id="contact"
        >

          <div className="contact-panel">

            <div>
              <span className="eyebrow">
                HAVE A PROJECT OR OPPORTUNITY?
              </span>

              <h2>
                Let's build
                <br />
                <span>something meaningful.</span>
              </h2>

              <p>
                I'm always interested in learning,
                collaborating, and exploring opportunities
                in technology.
              </p>
            </div>

            <div className="contact-links">

              <a href="mailto:YOUR_EMAIL@example.com">
                <Mail size={18} />
                Email me
                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                GitHub
                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
                LinkedIn
                <ArrowUpRight size={16} />
              </a>

            </div>
          </div>

          <footer>

            <a className="brand" href="#home">
              <span className="brand-mark">V</span>
              <span>varshitha<span className="brand-dot">.</span></span>
            </a>

            <span>
              Designed with curiosity · © {new Date().getFullYear()}
              Varshitha Potnuru
            </span>

            <a href="#home" className="back-top">
              Back to top ↑
            </a>

          </footer>
        </section>

      </main>
    </div>
  );
}

export default App;
