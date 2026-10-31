# 🚀 CloudOps: Enterprise Full-Stack Microservices & GitOps Platform

[![CI/CD Pipeline](https://github.com/DEVOPS125D/devops-cloud-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/DEVOPS125D/devops-cloud-portfolio/actions)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Production%20Ready-326CE5?logo=kubernetes)
![Prometheus](https://img.shields.io/badge/Prometheus-Telemetry-E6522C?logo=prometheus)
![Grafana](https://img.shields.io/badge/Grafana-Visualization-F46800?logo=grafana)
![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?logo=terraform)

A production-grade, containerized multi-tier cloud application featuring automated CI/CD pipelines, Kubernetes container orchestration, persistent PostgreSQL storage, and full-stack telemetry monitoring.

## What you will build

| Project 1: Microservices Web App | Project 2: Grafana Live Telemetry | Project 3: OpenAPI Gateway |
| :---: | :---: | :---: |
| <img src="outputss/Screenshot%20(328).png" width="100%" /> | <img src="outputss/Screenshot%20(329).png" width="100%" /> | <img src="outputss/Screenshot%20(327).png" width="100%" /> |
| React + Nginx frontend with real-time PostgreSQL database persistence | Real-time Grafana dashboard tracking pod status and HTTP traffic | FastAPI REST backend with automated Swagger OpenAPI documentation |

Project wires a GitHub Actions CI/CD pipeline to Docker Hub and Kubernetes, so every push builds and validates deployments automatically.

## What you will see in the console

### 1. Automated GitHub Actions CI/CD Pipeline
<img src="outputss/Screenshot%20(326).png" width="100%" />

### 2. Live Telemetry & Metric Scraping (Prometheus & Grafana)

| Prometheus Scrape Target (1/1 UP) | Time-Series HTTP Request Streams |
| :---: | :---: |
| <img src="outputss/Screenshot%20(331).png" width="100%" /> | <img src="outputss/Screenshot%20(330).png" width="100%" /> |
| FastAPI `/metrics` endpoint running healthy in production | Live PromQL queries monitoring traffic spikes |

### 3. Production Kubernetes Cluster & Persistent Storage
<img src="outputss/Screenshot%20(332).png" width="100%" />

## 🛠️ Tech Stack & Tooling

* **Application:** FastAPI (Python), React.js (Vite), PostgreSQL 16.
* **Containerization:** Multi-stage Dockerfiles optimized for minimal footprint, custom Docker bridge networks.
* **Orchestration:** Kubernetes (Namespaces, PVCs, ConfigMaps, Secrets, Services, Deployments).
* **Infrastructure as Code (IaC):** Terraform templates for AWS modular VPC, subnets, route tables, and security groups.
* **CI/CD Pipeline:** GitHub Actions workflow building Docker images, pushing to Docker Hub, and executing KinD deployment validation.
* **Observability:** Prometheus real-time metric scraping and custom Grafana visual telemetry dashboards.

## ⚡ Quickstart & Local Deployment

1. **Local Orchestration:** `docker compose up -d`
2. **Kubernetes Deployment:** `kubectl apply -f k8s/`
3. **Frontend Access:** `kubectl port-forward -n production svc/frontend 8085:80`
4. **Prometheus UI:** `kubectl port-forward -n production svc/prometheus 9090:9090`
5. **Grafana Dashboard:** `kubectl port-forward -n production svc/grafana 3000:3000`