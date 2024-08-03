This file explains steps to execute the below project.

## Step 1: Create an EC2 instance.
## Step 2: Setup Jenkins by instanlling java and jenkins by executing below command.
Update the package lists and install Java.

```sh
sudo apt update
sudo apt-get install -y openjdk-17-jre
```
Run the following commands to install Jenkins:

```sh
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install -y jenkins
```
After installing Jenkins, check if the Jenkins process is running and ensure it is using port 8080:

```sh
ps -ef | grep jenkins
```

Next, edit the inbound rules of the security group associated with your EC2 instance to allow TCP traffic on port 8080 from any source.

## Step 3: Setup docker 
After setting up the jenkins install docker in master node using below command.

```sh
sudo apt install -y docker.io
```

Now add the jenkins user to docker group by using below command.This step will provide access to docker deamon for jenkins user.

```sh
sudo usermod -aG docker jenkins
systemctl restart docker
```
## Step 4: Install Docker pipeline and Git-Hub integration plugin and configure credentials

## Step 5: Configure Git-Hub webhook and jenkins Pipeline
Follow the steps mentioned in the `git-hub-webhook.md` file to configure webhook.
Create the pipeline with the jenkinsfile.
Since the project is a static website, dockerfile with nginx image is enough, no need to build the project.
Create and push the docker image by automating steps with pipeline.
