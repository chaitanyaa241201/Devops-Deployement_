# 🌟 End-to-End DevOps Deployment

### 📖 Documented by: Chaitanya Kulkarni  
[LinkedIn](https://www.linkedin.com/in/chaitanya-kulkarni-devopsengineer/) | [GitHub](https://github.com/chaitanyaa241201)

---

## ✏️ Table of Contents

1. ✨ Project Overview  
2. 📉 Architecture Diagram  
3. 💡 Tools & Technologies Used  
4. ⌚ Step-by-Step Guide  
5. 💡 Troubleshooting & Fixes  
6. 👨‍💻 Blog Style Walkthrough  
7. 📊 Results & Outputs  
8. 🔢 Future Improvements  

---

## 1. ✨ Project Overview

**Goal**: Deploy a static React website hosted via Nginx, containerized using Docker, managed using Kubernetes (k3s), and provisioned with Terraform on AWS EC2.

**Live Site**: Hosted using Kubernetes NodePort on a public EC2 instance.

---

## 2. 📉 Architecture Diagram

```
+------------------------------+
|   GitHub Repo (Code + HTML) |
+-------------+----------------
              |
              v
      +----------------+
      |   Terraform    |  ==> Launch EC2
      +----------------+
              |
              v
      +------------------------+
      |  EC2 Instance (Ubuntu) |
      +-----------+------------+
                  |
        +---------+--------+
        | Docker + Nginx   |
        +---------+--------+
                  |
        +---------v---------+
        |  Kubernetes (k3s) |
        +---------+---------+
                  |
        +---------v---------+
        |  React Static Site |
        +-------------------+
```

---

## 3. 💡 Tools & Technologies Used

- **Terraform** – Infrastructure as Code for EC2 provisioning  
- **AWS EC2** – Compute environment  
- **Docker** – Image build + Nginx server  
- **Kubernetes (k3s)** – Lightweight K8s cluster  
- **React (Vite)** – Frontend static site  
- **GitHub** – Source control  
- **MobXterm / SSH** – Instance access

---

## 4. ⌚ Step-by-Step Guide

### 🔄 EC2 Setup with Terraform

```bash
terraform init
terraform plan
terraform apply
```

### 🔐 SSH Access

```bash
ssh -i lab.pem ubuntu@<EC2_PUBLIC_IP>
```

### 🧱 Install Docker & k3s

```bash
curl -sfL https://get.k3s.io | sh -
sudo apt install docker.io -y
```

### 🧩 Clone and Build Static App

```bash
git clone <your-repo>
cd suncraft-solar-shine
npm install
npm run build
sudo docker build -t suncraft-portfolio:v1 .
```

### 📦 Load Docker Image into k3s

```bash
sudo docker save suncraft-portfolio:v1 -o suncraft-portfolio.tar
sudo k3s ctr images import suncraft-portfolio.tar
```

### 🚀 Deploy to Kubernetes

```bash
kubectl apply -f suncraft_deploy.yaml
kubectl expose deployment suncraft-app --type=NodePort --port=80
```

### 🌐 View Your Website

```bash
http://3.134.234.73:30997

```

---

## 5. 💡 Troubleshooting & Fixes

- `ImagePullBackOff` → solved by importing local Docker image to k3s  
- DiskPressure → resolved by increasing EC2 volume size  
- Pod Pending → fixed by freeing disk space and adding swap memory  
- Swap Setup → added 2GB swap using `/swapfile`

---

## 6. 👨‍💻 Blog Style Walkthrough

> “I started with a React site, but wanted a real-world cloud deployment. So I built from scratch — provisioned an EC2 instance, containerized the app, managed it in Kubernetes, and made it public on AWS. Faced pod failures and disk pressure, but fixed them with resizing and swap!”

**End Result**: Static site live from GitHub to AWS — infrastructure as code style 💪

---

## 7. 📊 Results & Outputs

- ✅ EC2 provisioned via Terraform  
- ✅ Docker image built and deployed  
- ✅ Kubernetes pod running  
- ✅ Website accessible publicly  
- ✅ Infrastructure entirely automated and documented

---

## 8. 🔢 Future Improvements

- Set up GitHub Actions for CI/CD 🚀  
- Add Prometheus + Kubernetes Dashboard for monitoring 📊  
- Host with Route 53 + HTTPS 🔐  
- Push Docker image to Docker Hub 📦  

---

### 💼 Project by Chaitanya Kulkarni  
🔗 [LinkedIn](https://www.linkedin.com/in/chaitanya-kulkarni-devopsengineer/)  
📁 [GitHub](https://github.com/chaitanyaa241201)

---

