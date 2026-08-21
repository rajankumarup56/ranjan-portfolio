# Ranjan Kumar Upadhyay — Project Portfolio

This directory contains the major academic, cybersecurity, cloud/DevOps, software-development and business-oriented projects associated with my technical learning and professional development.

The projects are presented with an emphasis on practical implementation, security awareness, cloud technologies, automation, monitoring, testing and real-world business workflows.

---

## 1. MCA Cyber Security Major Project

### AI-Powered Autonomous Cyber Defense System for Real-Time Threat Hunting in Cloud ERP Environments

**Academic Project — MCA Cyber Security Specialization**

The project proposes an AI-assisted, human-governed cyber-defense workflow for identifying and prioritizing potentially suspicious activity in cloud-based ERP environments.

### Core Objective

The objective is to design a prototype capable of converting authorized audit telemetry into contextual threat-hunting signals that can help analysts investigate suspicious activity.

### Key Areas

* Cloud ERP security
* Cyber threat detection
* Security event analysis
* Anomaly-oriented detection
* Audit-log analysis
* Threat hunting
* Role-aware analysis
* Privileged activity monitoring
* Source-context analysis
* Explainable prioritization
* Human-in-the-loop security operations

### Proposed Workflow

```text
Authorized Audit Telemetry
        ↓
Event Normalization
        ↓
Validation
        ↓
Context Extraction
        ↓
Feature Engineering
        ↓
Anomaly / Priority Analysis
        ↓
Threat-Hunting Context
        ↓
Analyst Review
        ↓
Disposition / Feedback
```

### Illustrative Detection Signals

The prototype considers contextual signals such as:

* Rare privileged actions
* Repeated denied requests
* Unusual source context
* Unusual timing
* Resource sensitivity
* Role privilege
* Failure frequency
* Actor and source context

### Important Evidence Boundary

This project is documented as a **prototype design and research implementation**.

It does not claim:

* Production deployment
* Live enterprise monitoring
* Verified production accuracy
* Automated real-world containment
* Real enterprise log exports
* Production incident detection

Illustrative scenarios are used to demonstrate the proposed workflow.

### Prototype Test Strategy

| Test ID | Input                   | Expected Behaviour                    |
| ------- | ----------------------- | ------------------------------------- |
| T-01    | Valid audit event       | Normalize and retain source context   |
| T-02    | Missing essential field | Flag validation exception             |
| T-03    | Rare privileged action  | Generate high-priority review context |
| T-04    | Denied-request burst    | Derive frequency signal               |
| T-05    | Analyst disposition     | Persist review outcome                |

### Evidence

Academic project evidence is maintained separately:

* MCA Synopsis
* Interim Report
* Final Report
* Presentation
* Presentation Video
* Plagiarism Report

---

# 2. Cloud Security Monitoring on AWS

### Cloud Security Monitoring and Threat Detection

A cloud-security monitoring project focused on collecting and analyzing AWS audit activity and generating security alerts.

### Architecture

```text
AWS CloudTrail
      ↓
CloudWatch Logs
      ↓
Metric Filters
      ↓
CloudWatch Alarms
      ↓
SNS Notifications
      ↓
Security Review
```

### Security Events Considered

* Root account activity
* Unauthorized API calls
* Console login failures
* IAM changes
* Security-group modifications

### Technologies

* AWS CloudTrail
* AWS CloudWatch
* Amazon SNS
* IAM
* Lambda
* Terraform

### Evidence

The implementation and documentation are maintained in the corresponding GitHub repository.

---

# 3. Secure AWS Cloud Infrastructure

### Secure AWS Cloud Infrastructure with Bastion Host

A cloud infrastructure project demonstrating secure access to private resources using a bastion-host architecture.

### Architecture

```text
Internet
   ↓
Internet Gateway
   ↓
Public Subnet
   ↓
Bastion Host
   ↓
Private Subnet
   ↓
Private EC2
```

### Key Concepts

* VPC
* Public subnet
* Private subnet
* Internet Gateway
* Route tables
* Security Groups
* Bastion Host
* SSH access
* Private EC2 architecture

---

# 4. Highly Available AWS Web Architecture

A cloud architecture project focused on designing a highly available web environment using AWS infrastructure concepts.

### Key Areas

* Availability
* Network architecture
* EC2
* VPC
* Load distribution
* Security controls
* Infrastructure design

---

# 5. Secure CI/CD / DevSecOps Pipeline

A project focused on integrating security considerations into the software delivery lifecycle.

### Key Areas

* Git
* CI/CD
* Jenkins
* GitHub Actions
* YAML
* Automated workflows
* Security checks
* DevSecOps concepts

---

# 6. Network Security & Threat Detection Lab

A cybersecurity laboratory project focused on understanding network activity, security events and threat-detection concepts.

### Key Areas

* Network security
* Threat detection
* Log analysis
* Security monitoring
* Attack-pattern analysis
* Defensive security concepts

---

# 7. Full-Stack / MERN Learning Projects

I have also worked on full-stack development learning projects through Coding Ninjas.

My stronger hands-on foundation currently includes:

* HTML
* CSS
* JavaScript

Additional full-stack technologies have been studied as part of the learning program, while the primary professional direction remains Cyber Security, Cloud and DevOps.

---

# 8. Software Development — PMS/ERP Experience

As part of my Software Developer Internship, I have worked with a business-oriented PMS/ERP software environment.

### Areas of Work

* Sales workflows
* Lifting workflow
* PMS application workflows
* PMS Advance web interface
* Data synchronization
* Business-process features
* Floating-button workflows
* Compact data windows
* WhatsApp communication workflows
* Printing workflows
* Excel reports
* Report validation
* Bug fixing
* Manual testing
* Customer-specific requirements
* TFS / Team Explorer
* PowerShell
* VS Code
* Server deployment

This experience provides practical exposure to how software features connect with real business processes and users.

---

# 9. Project Evidence Philosophy

The portfolio distinguishes between:

### Implemented

Features or systems that were actually developed, configured, tested or used.

### Prototype

Academic or experimental systems designed and demonstrated at prototype level.

### Illustrative

Scenarios or diagrams created to explain a proposed architecture or workflow.

### Future Scope

Features identified for future implementation but not claimed as completed.

This distinction is maintained to keep the portfolio technically honest and professionally credible.

---

# 10. Project Repositories

Individual source repositories contain their own:

* README documentation
* Architecture
* Technologies
* Implementation details
* Configuration information
* Screenshots where appropriate
* Testing information
* Limitations
* Future improvements

The portfolio acts as the central showcase while GitHub repositories provide technical evidence.
