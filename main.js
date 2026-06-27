/* ==========================================================================
   MAIN PORTFOLIO INTERACTIVITY - REWTERZ CYBER PROFESSIONAL THEME
   ========================================================================== */

// 1. DATA DICTIONARY FOR MULTI-PERSONA RESUMES
const PERSONA_DATA = {
  vapt: {
    role: "VAPT Analyst",
    statusText: "VAPT_PROTOCOL_ACTIVE",
    summary: "Cybersecurity graduate specializing in penetration testing, vulnerability assessment, and offensive security. Experienced in web application testing, reconnaissance automation, and exploit development through hands-on labs, CTFs, and vulnerable machine environments.",
    badges: ["Pen-Testing", "Offensive Security", "API & Web Security", "Threat Modeling"],
    metrics: [
      { num: "50+", label: "THM & VulnHub Labs" },
      { num: "6+", label: "Cyber Security Projects" },
      { num: "Fall '24", label: "FAST Silver Medalist" },
      { num: "ISC2", label: "Certified Member" }
    ],
    biography: [
      "Greetings! I am Rana Ismail Ahmed, a Cyber Security graduate specializing in penetration testing, vulnerability assessment, and offensive security. My focus is on automating security testing workflows and discovering vulnerability flaws in web structures.",
      "I actively practice offensive techniques on platforms like VulnHub, TryHackMe, and OverTheWire, mastering reconnaissance, enumeration, privilege escalation, and payload writing. I have configured secure networks and solved multiple cryptography and reverse engineering CTFs.",
      "As a developer, I build security-oriented applications including automated web testers (NucloGem), reconnaissance toolkits (OctaRecon), and data anonymization tools. I strive for clean coding standards, secure credential management, and implementing cryptographic primitives securely."
    ],
    skills: [
      {
        category: "Offensive Security & VAPT",
        tags: ["Penetration Testing", "Web Application Testing", "Reconnaissance Automation", "Vulnerability Assessment", "API Testing", "Threat Modeling", "Exploit Development"]
      },
      {
        category: "Pen-Testing Stacks & Tools",
        tags: ["Kali Linux", "Burp Suite", "Metasploit", "Nuclei", "SQLMap", "OWASP ZAP", "Nessus", "Hydra", "Nmap", "GoBuster", "Hashcat", "Wireshark"]
      },
      {
        category: "Programming & Foundations",
        tags: ["Python", "C/C++", "SQL", "KQL", "MongoDB", "Bash Scripting", "REST APIs", "Git / GitHub", "Docker", "Kubernetes (K8s)"]
      }
    ],
    projects: [
      {
        title: "NucloGem (Automated Web Tester)",
        category: "cybersecurity",
        tags: ["Python", "Gemini API", "Nuclei"],
        desc: "An automatic web-testing tool integrating Nuclei with the Gemini API to scan webpages against thousands of Nuclei templates. Automates executive security report generation using Gemini and Python.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "OctaRecon (Reconnaissance Toolkit)",
        category: "cybersecurity",
        tags: ["Python", "Bash", "OSINT"],
        desc: "An automated web-reconnaissance script tool integrating 8 different tools to perform active and passive reconnaissance, indexing server headers, open ports, and DNS records.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "AI/ML-Based Self-healing SIEM (FYP - 2026)",
        category: "cybersecurity",
        tags: ["Wazuh", "AI/ML", "SIEM", "Anomaly Detection"],
        desc: "Improved log parsing and classification efficiency by up to 50% across 12+ endpoints. Achieved a 60% reduction in log noise through optimized filtering, log aggregation, and automated forensic packaging.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "Ecommerce Ecosystem",
        category: "webdev",
        tags: ["NextJs", "NestJS", "Docker", "DevSecOps"],
        desc: "Full-stack e-commerce ecosystem with Seller, Admin, and Customer portals. Integrates DevSecOps practices: secure authentication, RBAC, secure SDLC validation, and automated SAST/DAST scanning.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "Data Anonymizer",
        category: "systems",
        tags: ["Python", "Privacy", "GDPR"],
        desc: "Takes data in CSV format and applies modern privacy-enhancing techniques like generalization and suppression to ensure compliance with standards like GDPR.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "AI-Based GRC Toolkit",
        category: "systems",
        tags: ["RAG", "Embeddings", "LLMs", "Compliance"],
        desc: "AI-driven governance, risk, and compliance system using RAG and vector embeddings. Automates risk assessment, Gap analysis, and compliance recommendations across ISO27001, NIST CSF 2.0, GDPR.",
        github: "https://github.com/zismailths",
        demo: "#"
      }
    ],
    timeline: [
      {
        date: "Aug 2022 - Jun 2026",
        role: "BS Cyber Security (Silver Medalist)",
        org: "National University of Computer and Emerging Sciences (FAST NUCES)",
        desc: "Completed specialized study paths on computer architecture, networks, and cryptography. Awarded Silver Medal in Cyber Security Department (Fall 2024)."
      },
      {
        date: "2023 - Present",
        role: "Offensive Security Practice",
        org: "TryHackMe, VulnHub, OverTheWire",
        desc: "Completed hands-on penetration testing labs. Practicing reconnaissance, enumeration, privilege escalation, and web exploitation. Solved cryptography and reverse engineering CTFs."
      },
      {
        date: "Mar 2024 - Apr 2025",
        role: "Internal Systems Audit Intern",
        org: "TCF Head Office",
        desc: "Reviewed yearly IT audit reports and identified compliance gaps in security controls and SOPs. Evaluated cybersecurity policies to assess organizational risk posture."
      },
      {
        date: "Aug 2018 - Jun 2020",
        role: "Network & IT Support Assistant",
        org: "The Hub School",
        desc: "Provided technical support for 50+ systems, performed network troubleshooting, hardware and software configuration."
      }
    ],
    certs: [
      { title: "Certified in Cybersecurity (CC)", issuer: "ISC2", icon: "🛡️", link: "https://isc2.obrizum.io/org/cc/certificate/0d3be2be-5eef-4e72-bd9b-3b50e8fe8779" },
      { title: "SSCP Exam Preparation Course", issuer: "ISC2 (Coursera)", icon: "🔒", link: "#" },
      { title: "Google Cybersecurity Professional Certificate", issuer: "Google (Coursera)", icon: "🎓", link: "#" },
      { title: "Silver Medalist - FALL 2024", issuer: "BS Cyber Security - FAST-NUCES", icon: "🎓", link: "https://drive.google.com/file/d/1LwOmwCGuWSuJ3RcJWBsWhWMi7UZpGcHS/view?usp=drive_link" },
      { title: "2nd ICyDD Award Winner", issuer: "ICyDD Conference 2025", icon: "🏆", link: "https://www.juw.edu.pk/conference/ICyDD/2025/ICyDD_2025_Proceedings-57-60.pdf" },
      { title: "Into the trenches: Security Operations Centre", issuer: "EC-Council (Coursera)", icon: "🖥️", link: "#" },
      { title: "Certified Kubernetes Administrator (CKA)", issuer: "Linux Foundation (Coursera Unit 1-6)", icon: "☸️", link: "#" },
      { title: "Certified Ethical Hacker (CEHv13)", issuer: "EC-Council", icon: "💻", link: "#", status: "coming_soon" }
    ]
  },
  grc: {
    role: "GRC Analyst",
    statusText: "GRC_PROTOCOL_ACTIVE",
    summary: "Cybersecurity graduate specializing in Governance, Risk, and Compliance (GRC), IT auditing, and security policy evaluation. Experienced in risk assessment, compliance analysis, audit documentation review, and governance framework evaluation. Strong understanding of enterprise security controls and regulatory alignment.",
    badges: ["Governance", "Risk Assessment", "IT Auditing", "ISO 27001 / NIST"],
    metrics: [
      { num: "ISO 27001", label: "Framework Focus" },
      { num: "~1 Year", label: "Audit Intern Exp" },
      { num: "Fall '24", label: "FAST Silver Medalist" },
      { num: "ISC2", label: "Certified Member" }
    ],
    biography: [
      "Greetings! I am Rana Ismail Ahmed, a Cyber Security graduate specializing in Governance, Risk, and Compliance (GRC), IT auditing, and security policy evaluation. I focus on helping organizations understand their risk posture and align with standard regulatory frameworks.",
      "During my internship at TCF Head Office, I reviewed yearly IT audit reports, assessed cybersecurity policies, and formulated recommendations to bridge compliance gaps in security controls and SOPs.",
      "I leverage technology to automate GRC compliance. I designed a RAG-based AI GRC toolkit to automate ISO27001, NIST CSF 2.0, PCI-DSS, GDPR, and SOC 2 audits, translating complex standards into actionable checklists."
    ],
    skills: [
      {
        category: "Governance & Risk Management",
        tags: ["Risk Assessment", "IT Auditing", "Compliance Analysis", "Governance Frameworks", "Policy Evaluation", "Control Assessment", "Gap Analysis"]
      },
      {
        category: "Standards & Systems Knowledge",
        tags: ["ISO 27001 Awareness", "NIST CSF 2.0 Concepts", "GDPR", "SOC 2", "Risk Management Lifecycle", "Excel-based Audit Tracking"]
      },
      {
        category: "Tools & Scripting",
        tags: ["Splunk (Basic)", "Wazuh (Basic)", "SQL", "KQL", "Git / GitHub", "Python Automation"]
      }
    ],
    projects: [
      {
        title: "AI-Based GRC Toolkit",
        category: "systems",
        tags: ["RAG", "Embeddings", "LLMs", "Compliance"],
        desc: "AI-driven governance, risk, and compliance system using RAG and vector embeddings. Automates risk assessment, Gap analysis, and compliance recommendations across ISO27001, NIST CSF 2.0, GDPR.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "Data Anonymizer",
        category: "systems",
        tags: ["Python", "Privacy", "GDPR"],
        desc: "Takes data in CSV format and applies modern privacy-enhancing techniques like generalization and suppression to ensure compliance with standards like GDPR.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "AI/ML-Based Self-healing SIEM (FYP - 2026)",
        category: "cybersecurity",
        tags: ["Wazuh", "AI/ML", "SIEM", "Anomaly Detection"],
        desc: "Improved log parsing and classification efficiency by up to 50% across 12+ endpoints. Achieved a 60% reduction in log noise through optimized filtering, log aggregation, and automated forensic packaging.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "Ecommerce Ecosystem",
        category: "webdev",
        tags: ["NextJs", "NestJS", "Docker", "DevSecOps"],
        desc: "Full-stack e-commerce ecosystem with Seller, Admin, and Customer portals. Integrates DevSecOps practices: secure authentication, RBAC, secure SDLC validation, and automated SAST/DAST scanning.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "NucloGem (Automated Web Tester)",
        category: "cybersecurity",
        tags: ["Python", "Gemini API", "Nuclei"],
        desc: "An automatic web-testing tool integrating Nuclei with the Gemini API to scan webpages against thousands of Nuclei templates. Automates executive security report generation using Gemini and Python.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "OctaRecon (Reconnaissance Toolkit)",
        category: "cybersecurity",
        tags: ["Python", "Bash", "OSINT"],
        desc: "An automated web-reconnaissance script tool integrating 8 different tools to perform active and passive reconnaissance, indexing server headers, open ports, and DNS records.",
        github: "https://github.com/zismailths",
        demo: "#"
      }
    ],
    timeline: [
      {
        date: "Aug 2022 - Jun 2026",
        role: "BS Cyber Security (Silver Medalist)",
        org: "National University of Computer and Emerging Sciences (FAST NUCES)",
        desc: "Completed specialized study paths on computer architecture, networks, and cryptography. Awarded Silver Medal in Cyber Security Department (Fall 2024)."
      },
      {
        date: "Mar 2024 - Apr 2025",
        role: "Internal Systems Audit Intern",
        org: "TCF Head Office",
        desc: "Reviewed yearly IT audit reports, identified compliance gaps in security controls and SOPs, and evaluated cybersecurity policies to assess risk posture."
      },
      {
        date: "2023 - Present",
        role: "Offensive Security Practice",
        org: "Self-paced GRC/VAPT Labs",
        desc: "Practiced vulnerability assessments, mapped technical controls, and studied incident response lifecycles."
      },
      {
        date: "Aug 2018 - Jun 2020",
        role: "Network & IT Support Assistant",
        org: "The Hub School",
        desc: "Maintained assets inventory, troubleshot connection controls, and configured user endpoints."
      }
    ],
    certs: [
      { title: "Certified in Cybersecurity (CC)", issuer: "ISC2", icon: "🛡️", link: "https://isc2.obrizum.io/org/cc/certificate/0d3be2be-5eef-4e72-bd9b-3b50e8fe8779" },
      { title: "Google Cybersecurity Professional Certificate", issuer: "Google (Coursera)", icon: "🎓", link: "#" },
      { title: "2nd ICyDD Award Winner", issuer: "ICyDD Conference 2025", icon: "🏆", link: "https://www.juw.edu.pk/conference/ICyDD/2025/ICyDD_2025_Proceedings-57-60.pdf" },
      { title: "Silver Medalist - FALL 2024", issuer: "BS Cyber Security - FAST-NUCES", icon: "🎓", link: "https://drive.google.com/file/d/1LwOmwCGuWSuJ3RcJWBsWhWMi7UZpGcHS/view?usp=drive_link" },
      { title: "SSCP Exam Preparation Course", issuer: "ISC2 (Coursera)", icon: "🔒", link: "#" },
      { title: "Into the trenches: Security Operations Centre", issuer: "EC-Council (Coursera)", icon: "🖥️", link: "#" },
      { title: "Certified Kubernetes Administrator (CKA)", issuer: "Linux Foundation (Coursera Unit 1-6)", icon: "☸️", link: "#" },
      { title: "Certified Ethical Hacker (CEHv13)", issuer: "EC-Council", icon: "💻", link: "#", status: "coming_soon" }
    ]
  },
  soc: {
    role: "SOC Analyst",
    statusText: "SOC_PROTOCOL_ACTIVE",
    summary: "Cybersecurity graduate focused on SOC operations, SIEM monitoring, and incident response. Experienced in log analysis, threat detection, alert triaging, and security event correlation. Strong ability to identify anomalies and support real-time security operations.",
    badges: ["SOC Operations", "SIEM Monitoring", "Incident Response", "Threat Detection"],
    metrics: [
      { num: "AI / ML", label: "SIEM integration" },
      { num: "Log Reduction", label: "Hot & Cold Storage" },
      { num: "Fall '24", label: "FAST Silver Medalist" },
      { num: "ISC2", label: "Certified Member" }
    ],
    biography: [
      "Greetings! I am Rana Ismail Ahmed, a Cyber Security graduate focused on SOC operations, SIEM monitoring, and incident response. I specialize in identifying anomalous network activity and designing automated log analysis tools.",
      "I have completed extensive hands-on SIEM monitoring and threat detection labs, mapping out attack vectors and configuring alert rules in Wazuh and Splunk. I practice incident response tactics through CTF exercises.",
      "My Final Year Project is an AI-Integrated SIEM Extension, which improves log classification efficiency by up to 50% across 12+ endpoints and reduces noise by 60% through optimized filtering algorithms."
    ],
    skills: [
      {
        category: "SOC Operations & Forensics",
        tags: ["Threat Detection", "SIEM Monitoring", "Log Analysis", "Alert Triaging", "Event Correlation", "Digital Forensics", "Network Forensics"]
      },
      {
        category: "SOC Tool Stack",
        tags: ["Wazuh", "Splunk", "Graylog", "Wireshark", "Ghidra", "IDA", "FTK Imager", "Kali Linux"]
      },
      {
        category: "Programming & Data",
        tags: ["Python", "KQL (Kusto)", "SQL", "Bash Scripting", "REST APIs", "Cisco Packet Tracer", "Docker"]
      }
    ],
    projects: [
      {
        title: "AI/ML-Based Self-healing SIEM (FYP - 2026)",
        category: "cybersecurity",
        tags: ["Wazuh", "AI/ML", "SIEM", "Anomaly Detection"],
        desc: "Improved log parsing and classification efficiency by up to 50% across 12+ endpoints. Achieved a 60% reduction in log noise through optimized filtering, log aggregation, and automated forensic packaging.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "OctaRecon (Reconnaissance Toolkit)",
        category: "cybersecurity",
        tags: ["Python", "Bash", "OSINT"],
        desc: "An automated web-reconnaissance script tool integrating 8 different tools to perform active and passive reconnaissance, indexing server headers, open ports, and DNS records.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "NucloGem (Automated Web Tester)",
        category: "cybersecurity",
        tags: ["Python", "Gemini API", "Nuclei"],
        desc: "An automatic web-testing tool integrating Nuclei with the Gemini API to scan webpages against thousands of Nuclei templates. Automates executive security report generation using Gemini and Python.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "Data Anonymizer",
        category: "systems",
        tags: ["Python", "Privacy", "GDPR"],
        desc: "Takes data in CSV format and applies modern privacy-enhancing techniques like generalization and suppression to ensure compliance with standards like GDPR.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "AI-Based GRC Toolkit",
        category: "systems",
        tags: ["RAG", "Embeddings", "LLMs", "Compliance"],
        desc: "AI-driven governance, risk, and compliance system using RAG and vector embeddings. Automates risk assessment, Gap analysis, and compliance recommendations across ISO27001, NIST CSF 2.0, GDPR.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "Ecommerce Ecosystem",
        category: "webdev",
        tags: ["NextJs", "NestJS", "Docker", "DevSecOps"],
        desc: "Full-stack e-commerce ecosystem with Seller, Admin, and Customer portals. Integrates DevSecOps practices: secure authentication, RBAC, secure SDLC validation, and automated SAST/DAST scanning.",
        github: "https://github.com/zismailths",
        demo: "#"
      }
    ],
    timeline: [
      {
        date: "Aug 2022 - Jun 2026",
        role: "BS Cyber Security (Silver Medalist)",
        org: "National University of Computer and Emerging Sciences (FAST NUCES)",
        desc: "Completed specialized study paths on computer architecture, networks, and cryptography. Awarded Silver Medal in Cyber Security Department (Fall 2024)."
      },
      {
        date: "2023 - Present",
        role: "SOC-Oriented Security Practice",
        org: "TryHackMe SOC Paths, CTFs",
        desc: "Performed digital forensics, log analysis, and incident simulation labs. Investigated attack scenarios and mapped detection techniques."
      },
      {
        date: "Mar 2024 - Apr 2025",
        role: "Internal Systems Audit Intern",
        org: "TCF Head Office",
        desc: "Reviewed yearly IT audit reports, verified security controls, and audited organizational compliance with local security SOPs."
      },
      {
        date: "Aug 2018 - Jun 2020",
        role: "Network & IT Support Assistant",
        org: "The Hub School",
        desc: "Managed system reliability across 50+ workstations, configured network hardware, and handled technical logs."
      }
    ],
    certs: [
      { title: "Into the trenches: Security Operations Centre", issuer: "EC-Council (Coursera)", icon: "🖥️", link: "#" },
      { title: "Certified in Cybersecurity (CC)", issuer: "ISC2", icon: "🛡️", link: "https://isc2.obrizum.io/org/cc/certificate/0d3be2be-5eef-4e72-bd9b-3b50e8fe8779" },
      { title: "Google Cybersecurity Professional Certificate", issuer: "Google (Coursera)", icon: "🎓", link: "#" },
      { title: "SSCP Exam Preparation Course", issuer: "ISC2 (Coursera)", icon: "🔒", link: "#" },
      { title: "Silver Medalist - FALL 2024", issuer: "BS Cyber Security - FAST-NUCES", icon: "🎓", link: "https://drive.google.com/file/d/1LwOmwCGuWSuJ3RcJWBsWhWMi7UZpGcHS/view?usp=drive_link" },
      { title: "2nd ICyDD Award Winner", issuer: "ICyDD Conference 2025", icon: "🏆", link: "https://www.juw.edu.pk/conference/ICyDD/2025/ICyDD_2025_Proceedings-57-60.pdf" },
      { title: "Certified Kubernetes Administrator (CKA)", issuer: "Linux Foundation (Coursera Unit 1-6)", icon: "☸️", link: "#" },
      { title: "Certified Ethical Hacker (CEHv13)", issuer: "EC-Council", icon: "💻", link: "#", status: "coming_soon" }
    ]
  },
  devsecops: {
    role: "DevSecOps",
    statusText: "DEVSECOPS_PROTOCOL_ACTIVE",
    summary: "Cybersecurity graduate with hands-on experience in secure SDLC, CI/CD security, vulnerability management, and cloud security fundamentals. Skilled in Linux, Git, Docker, security automation, and application security testing (SAST/DAST).",
    badges: ["DevSecOps", "Secure SDLC", "Kubernetes", "CI/CD Security"],
    metrics: [
      { num: "Docker/K8s", label: "Container Stack" },
      { num: "SAST/DAST", label: "Testing Methods" },
      { num: "Silver", label: "FAST NUCES Medal" },
      { num: "CKA", label: "Kubernetes Prep" }
    ],
    biography: [
      "Greetings! I am Rana Ismail Ahmed, a Cyber Security graduate with hands-on experience in secure SDLC, CI/CD security, vulnerability management, and cloud security fundamentals.",
      "I excel at integrating security checkpoints (SAST/DAST/API testing) into release pipelines. I configure container environments in Docker and Kubernetes, and utilize tools like SonarQube, OWASP ZAP, and Postman to ensure codebases are secure prior to deployment.",
      "I have engineered complex secure software solutions, including a full-stack e-commerce ecosystem incorporating secure authentication, role-based access control, and automated application security scans."
    ],
    skills: [
      {
        category: "DevSecOps & SecOps Stacks",
        tags: ["CI/CD Security", "Kubernetes Administration", "Secure SDLC (SSDLC)", "Threat Modeling", "Vulnerability Management", "SAST", "DAST", "API Security"]
      },
      {
        category: "Software Engineering & Testing",
        tags: ["Secure Software Design", "Automated Testing", "Load & Performance Testing", "AI/ML Integration", "OOP Principles", "Kubernetes (K8s)", "Git / GitHub", "Docker"]
      },
      {
        category: "Security & Testing Tools",
        tags: ["SonarQube", "OWASP ZAP", "Burp Suite", "IriusRisk", "Threat Dragon", "Postman", "Selenium IDE", "Apache JMeter", "Jenkins", "Linux Systems"]
      }
    ],
    projects: [
      {
        title: "Ecommerce Ecosystem",
        category: "webdev",
        tags: ["NextJs", "NestJS", "Docker", "DevSecOps"],
        desc: "Full-stack e-commerce ecosystem with Seller, Admin, and Customer portals. Integrates DevSecOps practices: secure authentication, RBAC, secure SDLC validation, and automated SAST/DAST scanning.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "AI/ML-Based Self-healing SIEM (FYP - 2026)",
        category: "cybersecurity",
        tags: ["Wazuh", "AI/ML", "SIEM", "Anomaly Detection"],
        desc: "Improved log parsing and classification efficiency by up to 50% across 12+ endpoints. Achieved a 60% reduction in log noise through optimized filtering, log aggregation, and automated forensic packaging.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "NucloGem (Automated Web Tester)",
        category: "cybersecurity",
        tags: ["Python", "Gemini API", "Nuclei"],
        desc: "An automatic web-testing tool integrating Nuclei with the Gemini API to scan webpages against thousands of Nuclei templates. Automates executive security report generation using Gemini and Python.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "AI-Based GRC Toolkit",
        category: "systems",
        tags: ["RAG", "Embeddings", "LLMs", "Compliance"],
        desc: "AI-driven governance, risk, and compliance system using RAG and vector embeddings. Automates risk assessment, Gap analysis, and compliance recommendations across ISO27001, NIST CSF 2.0, GDPR.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "Data Anonymizer",
        category: "systems",
        tags: ["Python", "Privacy", "GDPR"],
        desc: "Takes data in CSV format and applies modern privacy-enhancing techniques like generalization and suppression to ensure compliance with standards like GDPR.",
        github: "https://github.com/zismailths",
        demo: "#"
      },
      {
        title: "OctaRecon (Reconnaissance Toolkit)",
        category: "cybersecurity",
        tags: ["Python", "Bash", "OSINT"],
        desc: "An automated web-reconnaissance script tool integrating 8 different tools to perform active and passive reconnaissance, indexing server headers, open ports, and DNS records.",
        github: "https://github.com/zismailths",
        demo: "#"
      }
    ],
    timeline: [
      {
        date: "Aug 2022 - Jun 2026",
        role: "BS Cyber Security (Silver Medalist)",
        org: "National University of Computer and Emerging Sciences (FAST NUCES)",
        desc: "Completed specialized study paths on computer architecture, networks, and cryptography. Awarded Silver Medal in Cyber Security Department (Fall 2024)."
      },
      {
        date: "Nov 2025 - Jun 2026",
        role: "Self-healing SIEM & AI Projects (FYP)",
        org: "Academic FYP Lab",
        desc: "Integrated ML algorithms to map attack paths and automate response workflows. Created secure e-commerce systems."
      },
      {
        date: "Mar 2024 - Apr 2025",
        role: "Internal IT Audit Intern",
        org: "TCF Head Office",
        desc: "Audited organizational infrastructures, validated security controls, and proposed cloud-hardening procedures."
      },
      {
        date: "Aug 2018 - Jun 2020",
        role: "Network & IT Support Assistant",
        org: "The Hub School",
        desc: "Set up network hardware and provided technical support and troubleshooting to teaching staff."
      }
    ],
    certs: [
      { title: "Certified Kubernetes Administrator (CKA)", issuer: "Linux Foundation (Coursera Unit 1-6)", icon: "☸️", link: "#" },
      { title: "SSCP Exam Preparation Course", issuer: "ISC2 (Coursera)", icon: "🔒", link: "#" },
      { title: "Certified in Cybersecurity (CC)", issuer: "ISC2", icon: "🛡️", link: "https://isc2.obrizum.io/org/cc/certificate/0d3be2be-5eef-4e72-bd9b-3b50e8fe8779" },
      { title: "Google Cybersecurity Professional Certificate", issuer: "Google (Coursera)", icon: "🎓", link: "#" },
      { title: "Silver Medalist - FALL 2024", issuer: "BS Cyber Security - FAST-NUCES", icon: "🎓", link: "https://drive.google.com/file/d/1LwOmwCGuWSuJ3RcJWBsWhWMi7UZpGcHS/view?usp=drive_link" },
      { title: "2nd ICyDD Award Winner", issuer: "ICyDD Conference 2025", icon: "🏆", link: "https://www.juw.edu.pk/conference/ICyDD/2025/ICyDD_2025_Proceedings-57-60.pdf" },
      { title: "Into the trenches: Security Operations Centre", issuer: "EC-Council (Coursera)", icon: "🖥️", link: "#" },
      { title: "Certified Ethical Hacker (CEHv13)", issuer: "EC-Council", icon: "💻", link: "#", status: "coming_soon" }
    ]
  }
};

// 2. DOM EVENT CONTROLLER
document.addEventListener('DOMContentLoaded', () => {
  initTimeAndTelemetry();
  initMobileMenu();
  initCanvasGrid();
  initScrollObserver();
  initContactForm();

  // Setup Switchable Profile Buttons
  initPersonaSelector();

  // Initialize Terminal Shell
  initTerminal();

  // Initialize 3D Certificate Carousel
  initCertCarousel();
});

/* ==========================================================================
   TIME & TELEMETRY CLOCK
   ========================================================================== */
function initTimeAndTelemetry() {
  const timeSpan = document.getElementById('current-time');
  const tickerTextElement = document.querySelector('.ticker-text');
  let blockedCount = 142;

  function updateClock() {
    const now = new Date();
    const pkt = new Date(now.getTime() + 5 * 60 * 60 * 1000);
    const timeStr = pkt.toISOString().replace('T', ' ').substring(0, 19) + ' PKT';
    if (timeSpan) timeSpan.textContent = timeStr;
  }
  setInterval(updateClock, 1000);
  updateClock();

  function simulateActivity() {
    if (!tickerTextElement) return;
    blockedCount += Math.floor(Math.random() * 3) + 1;
    const baseText = `[SYS_OK] SECURE_SOCKET: ACTIVE // PORT_FIREWALL: STANDBY // THREAT_LEVEL: 0 // ACTIVE_CONNECTION: LOCAL // MOCK_TRAFFIC_BLOCK: ${blockedCount} // SYSTEM_UPTIME: 99.98% // DEPLOYED_VER: 2.6.0-SEC // `;
    tickerTextElement.textContent = baseText.repeat(5);
  }
  setInterval(simulateActivity, 5000);
  simulateActivity();
}

/* ==========================================================================
   MOBILE NAV MENU
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}

/* ==========================================================================
   PARTICLES CANVAS NODE GRID
   ========================================================================== */
function initCanvasGrid() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const maxParticles = 150;
  const connectionDistance = 130;
  const mouse = { x: null, y: null, radius: 150 };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  document.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.size = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(214, 31, 38, 0.7)';
      ctx.fill();
    }
  }

  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * 0.32;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(214, 31, 38, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      if (mouse.x !== null && mouse.y !== null) {
        const p = particles[i];
        const mDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (mDist < mouse.radius) {
          const alpha = (1 - mDist / mouse.radius) * 0.45;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(214, 31, 38, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   MATRIX DECRYPT / SCRAMBLE EFFECT
   ========================================================================== */
function runMatrixDecrypt(element) {
  const chars = '01ABCDEFHIJKLMNOPQRSTUVWXYZ@#$%&[]';
  const target = element.dataset.value;
  if (!target) return;
  let iteration = 0;
  let interval = null;

  clearInterval(interval);

  interval = setInterval(() => {
    element.innerText = target
      .split('')
      .map((char, index) => {
        if (index < iteration) {
          return target[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');

    if (iteration >= target.length) {
      clearInterval(interval);
    }
    iteration += 1 / 2;
  }, 25);
}

// Function to trigger scrambler on visible element markers
function initMatrixDecrypt() {
  const decryptElements = document.querySelectorAll('.matrix-decrypt');
  decryptElements.forEach(el => {
    if (!el.dataset.value) {
      el.dataset.value = el.innerText;
    }
    runMatrixDecrypt(el);
  });
}

/* ==========================================================================
   SCROLL OBSERVATION & ACTIVE STATE
   ========================================================================== */
function initScrollObserver() {
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => revealObserver.observe(el));

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   PERSONA PROTOCOL SELECTOR
   ========================================================================== */
function initPersonaSelector() {
  const toggleButtons = document.querySelectorAll('.protocol-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const protocol = e.target.dataset.protocol;
      switchPersona(protocol);
    });
  });

  // Default Load
  switchPersona('vapt');
}

function switchPersona(personaId) {
  const data = PERSONA_DATA[personaId];
  if (!data) return;

  // 1. Toggle button classes
  document.querySelectorAll('.protocol-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.protocol === personaId) {
      btn.classList.add('active');
    }
  });

  // 2. Telemetry indicator text
  const statusLightText = document.getElementById('protocol-status-text');
  if (statusLightText) {
    statusLightText.textContent = data.statusText;
  }

  // 3. Update Hero Title (Role) & Bio
  const dynamicRole = document.getElementById('dynamic-role');
  if (dynamicRole) {
    dynamicRole.textContent = data.role;
    dynamicRole.dataset.value = data.role;
  }

  const dynamicSummary = document.getElementById('dynamic-summary');
  if (dynamicSummary) {
    dynamicSummary.textContent = data.summary;
  }

  // 4. Update badges
  const badgesContainer = document.getElementById('dynamic-badges');
  if (badgesContainer) {
    badgesContainer.innerHTML = data.badges
      .map(b => `<span class="hero-badge">${b}</span>`)
      .join('');
  }

  // 5. Update Biography
  const bioContainer = document.getElementById('about-biography');
  if (bioContainer) {
    bioContainer.innerHTML = data.biography
      .map(para => `<p>${para}</p>`)
      .join('');
  }

  // 6. Update Metrics
  const metricsContainer = document.getElementById('about-metrics');
  if (metricsContainer) {
    metricsContainer.innerHTML = data.metrics
      .map(m => `
        <div class="metric-card">
          <div class="metric-num">${m.num}</div>
          <div class="metric-label">${m.label}</div>
        </div>
      `).join('');
  }

  // 7. Update Skills
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer) {
    skillsContainer.innerHTML = data.skills
      .map(group => `
        <div class="skills-category-group">
          <div class="skills-category-title">${group.category}</div>
          <div class="skills-tags">
            ${group.tags.map(t => {
        const iconObj = getToolIcon(t);
        const customStyle = iconObj.bgColor ? `style="background-color: ${iconObj.bgColor} !important;"` : '';
        return `<div class="skill-tag icon-only" title="${t}" ${customStyle}>${iconObj.html}</div>`;
      }).join('')}
          </div>
        </div>
      `).join('');
  }

  // 8. Update Projects (With Filter Navigation Buttons)
  const filterCategories = new Set(['all']);
  data.projects.forEach(p => filterCategories.add(p.category));

  const filterBar = document.getElementById('projects-filter-bar');
  if (filterBar) {
    filterBar.innerHTML = Array.from(filterCategories).map(cat => {
      const activeClass = cat === 'all' ? 'active' : '';
      const label = cat === 'all' ? 'All' : cat === 'cybersecurity' ? 'Cybersecurity' : cat === 'webdev' ? 'Web Dev' : cat === 'systems' ? 'Systems' : cat;
      return `<button class="filter-btn ${activeClass}" data-filter="${cat}">${label}</button>`;
    }).join('');
  }

  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer) {
    projectsContainer.innerHTML = data.projects
      .map(p => `
        <div class="project-card" data-category="${p.category}">
          <div class="project-image-wrapper">
            <img src="${getProjectThumbnail(p.title)}" alt="${p.title} thumbnail" class="project-image" style="cursor: zoom-in;" onclick="openImageModal(this.src)" />
          </div>
          <div class="project-info">
            <div class="project-tags">
              ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.desc}</p>
            <div class="project-links">
              <a href="${p.github}" target="_blank" class="project-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
              ${p.demo && p.demo !== '#' ? `
                <a href="${p.demo}" target="_blank" class="project-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Live Demo
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      `).join('');
  }

  // 9. Update Timeline
  const timelineContainer = document.getElementById('experience-timeline');
  if (timelineContainer) {
    timelineContainer.innerHTML = data.timeline
      .map(t => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <span class="timeline-date">${t.date}</span>
          <div class="timeline-card">
            <h3 class="timeline-role">${t.role}</h3>
            <span class="timeline-org">${t.org}</span>
            <p class="timeline-desc">${t.desc}</p>
          </div>
        </div>
      `).join('');
  }

  // 10. Update Certs / Courses
  const certContainer = document.getElementById('certifications-container');
  const certHeading = document.getElementById('certifications-heading');
  if (certContainer) {
    if (certHeading) {
      certHeading.textContent = "Certifications and Achievements";
      certHeading.dataset.value = "Certifications and Achievements";
    }

    certContainer.innerHTML = data.certs
      .map(c => {
        if (c.status === "coming_soon") {
          return `
            <div class="cert-card coming-soon">
              <div class="cert-coming-soon-front">
                <div class="cert-icon">⏳</div>
                <h3 class="cert-title">Coming Soon</h3>
                <span class="cert-link disabled" style="opacity: 0.5; cursor: not-allowed; display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-family: var(--font-mono); color: var(--color-text-muted); margin-top: auto;">
                  <span>Scheduled Protocol</span>
                </span>
              </div>
              <div class="cert-coming-soon-hover">
                <div class="cert-icon">${c.icon}</div>
                <h3 class="cert-title">${c.title}</h3>
                <span class="cert-issuer">${c.issuer}</span>
                <span class="cert-link disabled" style="color: #fff; opacity: 0.9; font-size: 11px; font-family: var(--font-mono); margin-top: auto;">
                  <span>InshALLAH soon</span>
                </span>
              </div>
            </div>
          `;
        }
        return `
          <div class="cert-card">
            <div class="cert-icon">${c.icon}</div>
            <h3 class="cert-title">${c.title}</h3>
            <span class="cert-issuer">${c.issuer}</span>
            ${c.link && c.link !== '#' ? `
              <a href="${c.link}" target="_blank" class="cert-link">
                <span>Verify Credential</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            ` : `
              <span class="cert-link disabled" style="opacity: 0.5; cursor: not-allowed; display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-family: var(--font-mono); color: var(--color-text-muted);">
                <span>Verification Pending</span>
              </span>
            `}
          </div>
        `;
      }).join('');
  }

  // Trigger Matrix Scramble Reveal on text fields
  initMatrixDecrypt();
  initProjectFilter();
}

/* ==========================================================================
   PROJECT FILTER ENGINE
   ========================================================================== */
function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.dataset.filter;

      projectCards.forEach(card => {
        if (filterVal === 'all' || card.dataset.category === filterVal) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   CLI TERMINAL PANEL
   ========================================================================== */
function initTerminal() {
  const trigger = document.getElementById('terminal-trigger');
  const widget = document.getElementById('terminal-widget');
  const closeBtn = document.getElementById('terminal-close');
  const minBtn = document.getElementById('terminal-minimize');
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  const minimizedHandle = document.getElementById('terminal-minimized-handle');

  if (!widget || !trigger) return;

  trigger.addEventListener('click', () => {
    widget.classList.add('open');
    if (minimizedHandle) minimizedHandle.style.display = 'none';
    input.focus();
  });

  closeBtn.addEventListener('click', () => {
    if (typeTimeout) clearTimeout(typeTimeout);
    terminalQueue = [];
    isPrinting = false;
    output.innerHTML = '';
    widget.classList.remove('open');
    if (minimizedHandle) minimizedHandle.style.display = 'none';
  });

  minBtn.addEventListener('click', () => {
    widget.classList.remove('open');
    if (minimizedHandle) minimizedHandle.style.display = 'flex';
  });

  if (minimizedHandle) {
    minimizedHandle.addEventListener('click', () => {
      widget.classList.add('open');
      minimizedHandle.style.display = 'none';
      input.focus();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === '`' || e.key === '~') {
      e.preventDefault();
      widget.classList.toggle('open');
      if (widget.classList.contains('open')) {
        if (minimizedHandle) minimizedHandle.style.display = 'none';
        input.focus();
      }
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCommand = input.value.trim();
      input.value = '';
      if (rawCommand) {
        handleCommand(rawCommand);
      }
    }
  });

  let terminalQueue = [];
  let isPrinting = false;
  let typeTimeout = null;

  function printLine(text, type = '', speed = 4) {
    terminalQueue.push({ text, type, speed });
    processTerminalQueue();
  }

  function processTerminalQueue() {
    if (isPrinting || terminalQueue.length === 0) return;
    isPrinting = true;

    const { text, type, speed } = terminalQueue.shift();

    const line = document.createElement('div');
    line.className = `terminal-line ${type}`;
    line.innerHTML = text;
    output.appendChild(line);
    output.parentElement.scrollTop = output.parentElement.scrollHeight;

    const textNodes = [];
    function collect(n) {
      if (n.nodeType === Node.TEXT_NODE) {
        textNodes.push({ node: n, content: n.nodeValue });
        n.nodeValue = '';
      } else {
        for (let child of n.childNodes) {
          collect(child);
        }
      }
    }
    collect(line);

    if (speed === 0) {
      for (let item of textNodes) {
        item.node.nodeValue = item.content;
      }
      isPrinting = false;
      output.parentElement.scrollTop = output.parentElement.scrollHeight;
      processTerminalQueue();
      return;
    }

    let nodeIdx = 0;
    let charIdx = 0;

    function typeChar() {
      if (nodeIdx >= textNodes.length) {
        isPrinting = false;
        typeTimeout = setTimeout(processTerminalQueue, 30);
        return;
      }

      const currentItem = textNodes[nodeIdx];
      if (charIdx < currentItem.content.length) {
        currentItem.node.nodeValue += currentItem.content[charIdx];
        charIdx++;
        output.parentElement.scrollTop = output.parentElement.scrollHeight;
        typeTimeout = setTimeout(typeChar, speed);
      } else {
        nodeIdx++;
        charIdx = 0;
        typeChar();
      }
    }

    typeChar();
  }

  function handleCommand(cmd) {
    printLine(`guest@rana-ismail-shell:~$ <span class="command">${cmd}</span>`, '', 0);
    const parts = cmd.toLowerCase().split(' ');
    const primaryCmd = parts[0];

    switch (primaryCmd) {
      case 'help':
        printLine(`System Commands Available:
  - <span class="info">about</span>              : Display developer biographical packet
  - <span class="info">skills</span>             : List technical stacks in order
  - <span class="info">projects</span>           : Output highlighted works
  - <span class="info">protocol &lt;name&gt;</span>     : Switch profile protocol ('vapt', 'grc', 'soc', 'devsecops')
  - <span class="info">contact</span>            : Display encrypted communication endpoints
  - <span class="info">theme</span>              : Toggle terminal text coloration
  - <span class="info">matrix</span>             : Launch a secure visual matrix rain sequence
  - <span class="info">clear</span>              : Wipe local output buffer`);
        break;

      case 'about':
        printLine(`Subject: Rana Ismail Ahmed
Status: BS Cyber Security Graduate (FAST NUCES, Silver Medalist)
DOB: 20 February 2004
Focus: VAPT, GRC frameworks, SOC analytics, secure SDLC integration.`);
        break;

      case 'skills':
        printLine(`* Active Technical Stack:
  - Pen-Testing: Kali Linux, Burp Suite, Metasploit, OWASP ZAP, Nessus, Hydra
  - Frameworks : Wazuh, Splunk, Graylog, CKA (Kubernetes), Docker, Git
  - Languages  : Python, C++, SQL, KQL, Bash Scripting`);
        break;

      case 'projects':
        printLine(`* Highlighted Repositories:
  - NucloGem/OctaRecon: Web testing and active recon pipelines.
  - AI SIEM Extension : Log parsing, noise reduction and automated forensics.
  - AI GRC Toolkit    : ISO27001, NIST CSF, PCI-DSS compliance RAG engine.
  - Ecommerce SecOps  : Full-stack seller portal with automated SAST/DAST.`);
        break;

      case 'protocol':
        const mode = parts[1];
        if (['vapt', 'grc', 'soc', 'devsecops'].includes(mode)) {
          switchPersona(mode);
          printLine(`SUCCESS: System protocol swapped to ${mode.toUpperCase()}_ANALYST`, 'success');
        } else {
          printLine(`ERROR: Invalid protocol mode. Use 'vapt', 'grc', 'soc', or 'devsecops'.`, 'error');
        }
        break;

      case 'contact':
        printLine(`* Encryption Endpoints:
  - Mail       : zismail.ths@gmail.com
  - Phone      : +92 319 9238727
  - LinkedIn   : linkedin.com/in/rana-ismail-ahmed
  - GitHub     : github.com/zismailths`);
        break;

      case 'theme':
        const curColor = window.getComputedStyle(output).color;
        if (curColor.includes('224') || curColor.includes('e0e0e0')) {
          output.style.color = '#39FF14';
          input.style.color = '#39FF14';
          printLine('Theme set to: DIGITAL_GREEN', 'success');
        } else {
          output.style.color = '#e0e0e0';
          input.style.color = '#e0e0e0';
          printLine('Theme set to: WHITE_SMOKE', 'success');
        }
        break;

      case 'matrix':
        runMatrixRain();
        break;

      case 'clear':
        if (typeTimeout) clearTimeout(typeTimeout);
        terminalQueue = [];
        isPrinting = false;
        output.innerHTML = '';
        break;

      default:
        printLine(`command not found: ${primaryCmd}. Type <span class="error">'help'</span> for reference.`, 'error');
    }
  }

  function runMatrixRain() {
    printLine('Launching simulated matrix decryption stream...', 'info');
    let frames = 0;
    const matrixInterval = setInterval(() => {
      let rainLine = '';
      for (let i = 0; i < 40; i++) {
        rainLine += Math.random() > 0.5 ? Math.floor(Math.random() * 2).toString() : String.fromCharCode(Math.floor(Math.random() * 93) + 33);
      }
      printLine(rainLine);
      frames++;
      if (frames > 20) {
        clearInterval(matrixInterval);
        printLine('--- STREAM DISCONNECTED: SAFE MODE RESTORED ---', 'success');
      }
    }, 100);
  }
}

/* ==========================================================================
   CONTACT FORM SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    feedback.style.display = 'block';
    feedback.style.color = 'var(--color-primary)';
    feedback.innerHTML = 'Initializing Handshake...';

    setTimeout(() => {
      feedback.innerHTML = 'Generating AES-GCM Key Pair...';
      setTimeout(() => {
        feedback.innerHTML = 'Encrypting Packet Data...';
        setTimeout(() => {
          feedback.innerHTML = 'Transmitting Payload to Secure Node...';
          setTimeout(() => {
            feedback.style.color = '#4CAF50';
            feedback.innerHTML = 'SUCCESS: Packet Received. (HTTP 200 OK)';
            form.reset();
            setTimeout(() => {
              feedback.style.display = 'none';
            }, 6000);
          }, 1200);
        }, 1000);
      }, 1000);
    }, 1000);
  });
}

/* ==========================================================================
   TOOL ICONS RETRIEVER
   ========================================================================== */
function getToolIcon(name) {
  const n = name.toLowerCase().trim();
  let file = '';
  let isNew = false;

  // Specific tool icon filenames mapping (Phase 1)
  if (n.includes('kali linux') || n.includes('kali-linux')) file = 'kali_linux.png';
  else if (n.includes('burp suite') || n.includes('burp-suite') || n.includes('burp_suit') || n.includes('burp')) file = 'burp_suit.png';
  else if (n.includes('metasploit')) file = 'metasploit.png';
  else if (n.includes('nuclei')) file = 'nuclei.png';
  else if (n.includes('sqlmap')) file = 'sqlmap.png';
  else if (n.includes('owasp zap') || n.includes('zap')) file = 'owasp_zap.png';
  else if (n.includes('nessus')) file = 'nessus.png';
  else if (n.includes('hydra')) file = 'hydra.png';
  else if (n.includes('nmap')) file = 'nmap.png';
  else if (n.includes('gobuster')) file = 'gobuster.png';
  else if (n.includes('hashcat')) file = 'hashcat.png';
  else if (n.includes('wazuh')) file = 'wazuh.png';
  else if (n.includes('splunk')) file = 'splunk.png';
  else if (n.includes('graylog')) file = 'graylog.png';
  else if (n.includes('wireshark')) file = 'wireshark.png';
  else if (n.includes('ghidra')) file = 'ghidra.png';
  else if (n.includes('ida')) file = 'ida.png';
  else if (n.includes('ftk')) file = 'ftk.png';
  else if (n.includes('docker')) file = 'docker.png';
  else if (n.includes('kubernetes administration')) file = 'kubernetes_administration.png';
  else if (n.includes('kubernetes') || n.includes('k8s')) file = 'k8s.png';
  else if (n.includes('jenkins')) file = 'jenkins.png';
  else if (n.includes('sonarqube')) file = 'sonarqube.png';
  else if (n.includes('postman')) file = 'postman.png';
  else if (n.includes('selenium')) file = 'selenium.png';
  else if (n.includes('jmeter') || n.includes('apache jmeter')) file = 'jmeter.png';
  else if (n.includes('iriusrisk') || n.includes('irius_risk')) file = 'irius_risk.png';
  else if (n.includes('threat dragon') || n.includes('threat_dragon')) file = 'threat_dragon.png';
  else if (n.includes('python')) file = 'python.png';
  else if (n.includes('c/c++') || n.includes('c++')) file = 'c_c++.png';
  else if (n.includes('kql') || n.includes('kusto')) file = 'kql.png';
  else if (n.includes('mongodb')) file = 'mongodb.png';
  else if (n.includes('bash') || n.includes('scripting')) file = 'bash.png';
  else if (n.includes('git') || n.includes('github')) file = 'git_github.png';
  else if (n.includes('rest api') || n.includes('rest apis') || n.includes('api testing')) file = 'api_test.png';
  else if (n.includes('api security')) file = 'api_sec.png';
  else if (n.includes('api')) file = 'rest_api.png';
  else if (n.includes('sql')) file = 'sql.png';
  else if (n.includes('excel') || n.includes('audit tracking')) file = 'excel.png';
  else if (n.includes('packet tracer') || n.includes('cpt')) file = 'cpt.png';

  // Generic / Newly Added Skills mapping (Phase 2)
  else if (n.includes('penetration testing') || n.includes('pen-testing')) { file = 'pentest.png'; isNew = true; }
  else if (n.includes('web application testing')) { file = 'web_app_test.png'; isNew = true; }
  else if (n.includes('reconnaissance automation')) { file = 'recon_auto.png'; isNew = true; }
  else if (n.includes('vulnerability assessment')) { file = 'vuln_assess.png'; isNew = true; }
  else if (n.includes('threat modeling')) { file = 'threat_modeling.png'; isNew = true; }
  else if (n.includes('exploit development')) { file = 'exploit_dev.png'; isNew = true; }
  else if (n.includes('risk assessment')) { file = 'risk_assess.png'; isNew = true; }
  else if (n.includes('it auditing')) { file = 'it_audit.png'; isNew = true; }
  else if (n.includes('compliance analysis')) { file = 'compliance_analysis.png'; isNew = true; }
  else if (n.includes('governance frameworks') || n.includes('governance')) { file = 'governance_framework.png'; isNew = true; }
  else if (n.includes('policy evaluation')) { file = 'policy_evaluation.png'; isNew = true; }
  else if (n.includes('control assessment')) { file = 'control_assessment.png'; isNew = true; }
  else if (n.includes('gap analysis')) { file = 'gap_analysis.png'; isNew = true; }
  else if (n.includes('iso 27001') || n.includes('iso')) { file = 'iso.png'; isNew = true; }
  else if (n.includes('nist')) { file = 'nist.png'; isNew = true; }
  else if (n.includes('gdpr')) { file = 'gdpr.png'; isNew = true; }
  else if (n.includes('soc 2') || n.includes('soc2')) { file = 'soc2.png'; isNew = true; }
  else if (n.includes('risk management lifecycle') || n.includes('risk management')) { file = 'rm_lifecycle.png'; isNew = true; }
  else if (n.includes('threat detection')) { file = 'threat_detect.png'; isNew = true; }
  else if (n.includes('siem monitoring') || n.includes('siem')) { file = 'siem.png'; isNew = true; }
  else if (n.includes('log analysis')) { file = 'log_analysis.png'; isNew = true; }
  else if (n.includes('alert triaging') || n.includes('alerts')) { file = 'alerts.png'; isNew = true; }
  else if (n.includes('event correlation')) { file = 'event_corr.png'; isNew = true; }
  else if (n.includes('digital forensics')) { file = 'digital_forensics.png'; isNew = true; }
  else if (n.includes('network forensics')) { file = 'network_forensics.png'; isNew = true; }
  else if (n.includes('devsecops')) { file = 'ssdlc.png'; isNew = true; }
  else if (n.includes('ci/cd security')) { file = 'cicd.png'; isNew = true; }
  else if (n.includes('secure sdlc') || n.includes('ssdlc')) { file = 'ssdlc.png'; isNew = true; }
  else if (n.includes('vulnerability management')) { file = 'vuln_manag.png'; isNew = true; }
  else if (n.includes('sast / dast testing') || n.includes('sast') || n.includes('dast')) { file = 'sast.png'; isNew = true; }
  else if (n.includes('secure software design')) { file = 'ssd.png'; isNew = true; }
  else if (n.includes('automated testing')) { file = 'automated_test.png'; isNew = true; }
  else if (n.includes('load & performance testing') || n.includes('performance testing')) { file = 'load_perf.png'; isNew = true; }
  else if (n.includes('ai/ml integration') || n.includes('ai/ml')) { file = 'ai_ml.png'; isNew = true; }
  else if (n.includes('oop principles') || n.includes('oop')) { file = 'oop.png'; isNew = true; }
  else if (n.includes('linux')) file = 'bash.png';

  let html = '';
  if (file) {
    html = `<img src="assets/icons/${file}" alt="${name} logo" class="tool-icon-img" style="width: 100px; height: 100px; object-fit: contain; transition: all 0.3s ease;" />`;
  } else {
    html = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool-icon-svg" style="width: 100px; height: 100px; color: var(--color-text-muted);"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
  }

  let bgColor = '#181818'; // Default phase-1 background
  if (n.includes('api security') || n.includes('api testing') || n.includes('rest api') || n === 'api') {
    bgColor = '#131313';
  } else if (n.includes('kubernetes administration') || n === 'kubernetes administration') {
    bgColor = '#131313';
  } else if (isNew) {
    bgColor = '#121312'; // Default phase-2 background
  }

  return { html, bgColor };
}

/* ==========================================================================
   PROJECT THUMBNAIL MAPPER
   ========================================================================== */
function getProjectThumbnail(title) {
  const t = title.toLowerCase();
  if (t.includes('nuclogem')) return 'assets/thumbnails/nuclogem.png';
  if (t.includes('octarecon')) return 'assets/thumbnails/octarecon.png';
  if (t.includes('siem') || t.includes('fyp')) return 'assets/thumbnails/fyp.png';
  if (t.includes('ecommerce') || t.includes('e-commerce') || t.includes('ecom')) return 'assets/thumbnails/ecom.png';
  if (t.includes('anonymizer')) return 'assets/thumbnails/anonymizer.png';
  if (t.includes('grc')) return 'assets/thumbnails/grc.png';
  return 'assets/thumbnails/nuclogem.png';
}

/* ==========================================================================
   IMAGE LIGHTBOX MODAL TRIGGER
   ========================================================================== */
function openImageModal(src) {
  const modal = document.createElement('div');
  modal.className = 'project-image-modal';
  modal.innerHTML = `
    <div class="project-image-modal-content">
      <img src="${src}" alt="Project Preview Image" />
      <span class="project-image-modal-close">&times;</span>
    </div>
  `;
  document.body.appendChild(modal);

  // Close triggers
  modal.addEventListener('click', () => {
    modal.remove();
  });

  modal.querySelector('img').addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

/* ==========================================================================
   3D COVERFLOW CERTIFICATE CAROUSEL ENGINE
   ========================================================================== */
function initCertCarousel() {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let activeIndex = 0;

  function updateCarousel() {
    const n = slides.length;
    slides.forEach((slide, index) => {
      let offset = index - activeIndex;

      // Shortest circular distance wrap
      while (offset < -n / 2) offset += n;
      while (offset > n / 2) offset -= n;

      const absOffset = Math.abs(offset);

      // Hide slides that are too far away (show exactly center + 2 on left + 2 on right)
      if (absOffset > 2) {
        slide.style.opacity = '0';
        slide.style.pointerEvents = 'none';
        slide.style.transform = `translateX(${offset * 140}px) scale(0.5) rotateY(${offset > 0 ? -45 : 45}deg) translateZ(-300px)`;
        return;
      }

      slide.style.opacity = '1';
      slide.style.pointerEvents = 'auto';

      let translateX = offset * 180;
      let rotateY = 0;
      let translateZ = -120 * absOffset;
      let scale = 1 - absOffset * 0.15;

      if (offset < 0) {
        rotateY = 30;
        translateX -= 30;
      } else if (offset > 0) {
        rotateY = -30;
        translateX += 30;
      } else {
        // Active center slide
        rotateY = 0;
        translateZ = 50;
        scale = 1.05;
      }

      slide.style.transform = `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
      slide.style.zIndex = 10 - absOffset;

      if (index === activeIndex) {
        slide.classList.add('active');
        slide.style.borderColor = 'var(--color-primary)';
        slide.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.4)';
      } else {
        slide.classList.remove('active');
        slide.style.borderColor = 'var(--color-border)';
        slide.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.5)';
      }
    });
  }

  // Go to slide on click
  slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
      activeIndex = index;
      updateCarousel();
    });
  });

  // Prev / Next button click handlers
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      activeIndex = (activeIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      activeIndex = (activeIndex + 1) % slides.length;
      updateCarousel();
    });
  }

  updateCarousel();
}
