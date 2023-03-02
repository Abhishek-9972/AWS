# AWS

# EC2 - ELASTIC COMPUTE CLOUD

EC2 -> Elastic Compute Cloud -> Infrastructure as a service

Operating System (OS) : Linux, Windows or MacOS
Firewall Rules : Security Group
Bootstrap Script (Configure at first Launch) :  - 

```diff 
- EC2 User Data -> This script will run only once at instance first start)
```

EC2 user data is used to automate boot tasks such as :
1) Installing updates
2) Installing software
3) Downloading common files from the internet
4) Anything you can think of

EC2 User data script runs with root user

t2.micro is part of AWS free tier

AWS assigns new public address once u terminate and start instance again, but private ip address will remain same.

## EC2 Instance Types

m5.2xlarge

m : instance class
5 : generation (AWS improves them over time)
2xlarge : size within the instance class

## EC2 Instance Types

1) General Purpose
2) Compute Optimized
3) Memory Optimized
4) Storage Optimized

General Purpose - Great for a diversity of workloads such as web servers or code repositories
                Balance between
                  - Compute
                  - Memory
                  - Networking
                  
Compute Optimized - Great for Compute intensive tasks that require high performance processors
                - Batch Processing workloads
                - Media Transcoding
                - High Performance Web Servers
                - High Performance Computing (HPC)
                - Scientific Modeling and Machine Learning
                - Dedicated Gaming Servers
                
Memory Optimized - Fase performance for workfloads that process large data sets in memory
                Use Cases
                - High Perfomance, relational/non-relational databases
                - Distributed web scale cache stores
                - In-memory databases optimized for BI
                - Applications performing real-time processing of big unstructured data
                
Storage Optimized - Great for storage intensive tasks that require high sequential read and write access to large data sets 
                Use Cases
                - High Frequency online transaction processing systems
                - Relational and NoSQL databases
                - Cache for in-memory databases
                - Data Warehousing applications
                - Distributed File Systems
                
                
 ## Security Groups
 
 Security Groups are the fundamental of network security in AWS
 They control how traffic is allowed into or out of our EC2 instances
Secruity Groups only contains allow rules
Security Groups rules can reference by IP or by security group

Security Groups are Acting as a firewall on EC2 instances
They regulate :
1) Access to ports
2) Authorised IP ranges - IPv4 and IPv6
3) Control of inbound network (from other to instance)
4) Control of outbound network (from the instance to other)

Inbound rules
Outbound rules

 ## Security Groups good to know
 1) Can be attached to multiple instances
 2) LOcked down to a region/VPC combination
 3) Does live outside the EC2 - if traffic is blocked the EC2 instance wont see it
 4) It's good to maintain one separate security group for SSH access
 5) If your application is not accessible then its a security group issue
 6) If your application gives a conection refused error then its and application error, or its not launched
 7) All inbound traffic is blocked by default
 8) All outbound traffic is authorised by default
