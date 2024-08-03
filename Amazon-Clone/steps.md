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

## 1. Configure GitHub Webhook

### Navigate to Your GitHub Repository:
- Go to the repository you want to trigger the Jenkins build.

### Access Webhook Settings:
- Click on **`Settings`** in the repository menu.
- In the left sidebar, click on **`Webhooks`**.

### Add a New Webhook:
- Click on the **`Add webhook`** button.

### Configure Webhook:
- **`Payload URL`**: Enter the URL of your Jenkins server followed by `/github-webhook/`. For example, `http://your-jenkins-server/github-webhook/`.
- **`Content type`**: Select `application/json`.
- **`Secret`**: You can leave it empty or set a secret (shared secret between GitHub and Jenkins for security).
- **`Which events would you like to trigger this webhook?`**: Select `Just the push event`.

### Save the Webhook:
- Click on the **`Add webhook`** button to save.

## 2. Configure Jenkins Job

### Create a New Jenkins Job:
- If you haven't already created a Jenkins job, create one. 
- Go to **`New Item`**, enter an item name, select **`Pipeline`**, and click **`OK`**.

### Configure the Job:
- In the job configuration page, under the **`General`** tab, ensure **`GitHub project`** is checked and the project URL is entered correctly.

### Build Triggers:
- Check the **`GitHub hook trigger for GITScm polling`** option. This will allow the job to be triggered by the GitHub webhook.

### Pipeline Definition:
- Under **`Pipeline`**, configure your pipeline script or define the location of your `Jenkinsfile`.

### Source Code Management:
- Under **`Pipeline`**, configure your pipeline script, click on generate pipeline syntax and select the checkout and configure the Git VCS by mentioning authentication and credentials.
- Select **`Git`** and provide the repository URL and credentials if required.

## 3. Ensure Jenkins GitHub Plugin is Installed

### Install GitHub Plugin:
- Go to **`Manage Jenkins`** -> **`Manage Plugins`** -> **`Available`**.
- Search for **`GitHub Integration Plugin`** or **`GitHub Plugin`** and install it.


