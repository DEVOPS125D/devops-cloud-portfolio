output "vpc_id" {
  value       = aws_vpc.main.id
  description = "VPC resource identifier"
}

output "public_subnet_ids" {
  value       = aws_subnet.public[*].id
  description = "IDs of public subnets"
}

output "private_subnet_ids" {
  value       = aws_subnet.private[*].id
  description = "IDs of private subnets"
}

output "web_security_group_id" {
  value       = aws_security_group.web_sg.id
  description = "Security Group ID for Web traffic"
}