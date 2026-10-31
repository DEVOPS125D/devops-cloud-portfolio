# 🚀 CloudOps: Enterprise Full-Stack Microservices & GitOps Platform

[![CI/CD Pipeline](https://github.com/DEVOPS125D/devops-cloud-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/DEVOPS125D/devops-cloud-portfolio/actions)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Production%20Ready-326CE5?logo=kubernetes)
![Prometheus](https://img.shields.io/badge/Prometheus-Telemetry-E6522C?logo=prometheus)
![Grafana](https://img.shields.io/badge/Grafana-Visualization-F46800?logo=grafana)
![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?logo=terraform)

A production-grade, containerized multi-tier cloud application featuring automated CI/CD pipelines, container orchestration, persistent database storage, and full-stack telemetry monitoring.

---

## 🏛️ System Architecture

```text
[ Browser / Client ]
         │
         ▼ (Port 80 / 8085)
┌───────────────────────────────────────────────┐
│              Kubernetes Cluster               │
│                                               │
│   ┌───────────────────────────────────────┐   │
│   │  Frontend Pod (React + Nginx Proxy)   │   │
│   └───────────────────┬───────────────────┘   │
│                       │                       │
│                       ▼ (Internal DNS:8000)   │
│   ┌───────────────────────────────────────┐   │
│   │      Backend Pod (FastAPI Core)       │   │
│   └───────────┬───────────────────────┬───┘   │
│               │                       │       │
│               ▼                       ▼       │
│   ┌───────────────────────┐   ┌───────────┐   │
│   │ PostgreSQL (Stateful) │   │ /metrics  │   │
│   │ PersistentVolumeClaim │   │ Telemetry │   │
│   └───────────────────────┘   └─────┬─────┘   │
│                                     │         │
│                                     ▼         │
│                          ┌────────────────┐   │
│                          │ Prometheus Pod │   │
│                          └────────┬───────┘   │
│                                   │           │
│                                   ▼           │
│                          ┌────────────────┐   │
│                          │  Grafana Pod   │   │
│                          └────────────────┘   │
└───────────────────────────────────────────────┘
📸 Production Verification & Telemetry Gallery
1. Automated CI/CD Pipeline (GitHub Actions & KinD)
Automated multi-stage container builds, Docker Hub publishing, and rolling deployment verification on ephemeral Kubernetes clusters.
2. Live Web Application & Database Persistence
Microservices communication verified with PostgreSQL stateful storage and real-time record synchronization.
Web Application Dashboard	Database Operational State
3. Real-Time Telemetry & Monitoring (Grafana & Prometheus)Real-time container health probes, HTTP request rate metrics, and microservice uptime tracking.Grafana Telemetry DashboardPrometheus   Target Monitoring
4. API Gateway & Cluster OrchestrationSwagger OpenAPI schema validation and live Kubernetes namespace resource inspection.
Swagger OpenAPI Documentation   Kubernetes Cluster Resources
🛠️ Tech Stack & Tooling
Application: FastAPI (Python), React.js (Vite), PostgreSQL 16.

Containerization: Multi-stage Dockerfiles optimized for minimal footprint, custom Docker bridge networks.

Orchestration: Kubernetes (Namespaces, PVCs, ConfigMaps, Secrets, Services, Deployments).

Infrastructure as Code (IaC): Terraform templates for AWS modular VPC, subnets, route tables, and security groups.

CI/CD Pipeline: GitHub Actions workflow building multi-arch Docker images, pushing to Docker Hub, and executing KinD deployment validation.

Observability: Prometheus real-time metric scraping and custom Grafana visual telemetry dashboards.
