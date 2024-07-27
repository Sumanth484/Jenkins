# Jenkins Setup

# Setting Up Jenkins on an EC2 Instance

## Step 1: Launch an EC2 Instance and Connect to It
Launch a new EC2 instance from the AWS Management Console. Once the instance is running, connect to it using SSH.

## Step 2: Prerequisites
Update the package lists and install Java.

```sh
sudo apt update
sudo apt-get install openjdk-17-jre
```
## Step 3: Install Jenkins
Run the following commands to install Jenkins:

```sh
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins
```
## Step 4: Allow Traffic
After installing Jenkins, check if the Jenkins process is running and ensure it is using port 8080:

```sh
ps -ef | grep jenkins
```

Next, edit the inbound rules of the security group associated with your EC2 instance to allow TCP traffic on port 8080 from any source.

## Step 5: Access Jenkins
Open your web browser and navigate to the Jenkins server using the public IP address of your EC2 instance:

http://<'EC2 public IP'>:8080

## Step 6: Set up the password
Navigate to the EC2 instance and execute the below command to fetch the password.

```sh
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

## Step 6:Jenkins UI

Install suggested plugins and set the username and password if required...
You are now successfully logged into Jenkins UI.
Modify

