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