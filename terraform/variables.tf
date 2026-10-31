variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "Primary AWS target region"
}

variable "project_name" {
  type        = string
  default     = "devops-portfolio"
  description = "Prefix for tagging AWS infrastructure resources"
}

variable "vpc_cidr" {
  type        = string
  default     = "10.0.0.0/16"
  description = "Virtual Private Cloud base CIDR"
}

variable "public_subnet_cidrs" {
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24"]
  description = "Subnet CIDR blocks for public ingress"
}

variable "private_subnet_cidrs" {
  type        = list(string)
  default     = ["10.0.10.0/24", "10.0.20.0/24"]
  description = "Subnet CIDR blocks for isolated backend and database tiers"
}

variable "availability_zones" {
  type        = list(string)
  default     = ["us-east-1a", "us-east-1b"]
  description = "AWS availability zones"
}