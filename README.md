# AI Resume Analyzer – DevOps Project

This project demonstrates an end-to-end DevOps workflow using modern tools and cloud-native practices.  
The focus of this project is **CI/CD automation, containerization, Kubernetes deployment, and GitOps concepts**, rather than application feature complexity.

---

## 📌 Project Overview

The AI Resume Analyzer is a full-stack application consisting of:
- **Frontend** (UI)
- **Backend** (API)

The application is containerized using Docker, built and pushed via Jenkins CI, and designed to be deployed on Kubernetes (EKS-ready).  
GitOps principles are demonstrated using Argo CD manifests.

---

## 🛠️ Tech Stack

- **CI/CD**: Jenkins  
- **Containerization**: Docker  
- **Container Registry**: AWS ECR  
- **Orchestration**: Kubernetes (EKS-ready)  
- **GitOps**: Argo CD  
- **Cloud**: AWS  
- **Version Control**: GitHub  

---


## 🔄 CI Pipeline (Jenkins)

The Jenkins pipeline performs the following steps:

1. Pulls source code from GitHub  
2. Builds Docker images for frontend and backend  
3. Tags images using the Jenkins build number  
4. Authenticates with AWS ECR  
5. Pushes Docker images to ECR  

**Jenkinsfile** is included at the root of the repository.

---

## ☸️ Kubernetes Deployment

Kubernetes manifests are defined for:

- Namespaces
- Deployments (frontend & backend)
- Services (ClusterIP / LoadBalancer)

These manifests are stored in the `k8s/` directory and are **cloud-agnostic**, making them deployable on:
- AWS EKS
- Minikube
- Kind

---

## 🚀 GitOps with Argo CD

Argo CD is used to demonstrate GitOps-based continuous deployment.

- Kubernetes manifests stored in Git are treated as the **source of truth**
- Argo CD continuously syncs the desired state from Git to the cluster
- Automated sync with self-healing and pruning enabled


## ⚠️ Challenges Faced & Learnings

This project involved debugging real-world DevOps and cloud issues, including:

- **ImagePullBackOff** due to incorrect image tags in ECR  
- **IAM permission issues** while accessing AWS resources  
- **Kubernetes scheduling failures** caused by node taints (Karpenter / Auto Mode)  
- Understanding the difference between **CI (Jenkins)** and **CD (Kubernetes / GitOps)**  

These challenges helped build a strong understanding of production-grade DevOps workflows.

---


## 🔮 Future Improvements

- Helm charts for Kubernetes deployments  
- Monitoring with Prometheus & Grafana  
- Logging with ELK / CloudWatch  
- Secure access using IRSA (IAM Roles for Service Accounts)  

---

## ✅ Key Takeaway

This project focuses on **DevOps concepts, automation, and problem-solving**, showcasing:
- CI pipeline design
- Cloud container registry usage
- Kubernetes deployment design
- GitOps workflows
- Debugging real infrastructure issues

---

## 👤 Author

**Shivam Sharma**  
Aspiring DevOps Engineer 🚀





