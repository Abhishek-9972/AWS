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
