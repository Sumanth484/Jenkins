# Jenkins Pipeline Setup with Maven Installation
This Jenkins pipeline is based on master slave architecture.
There are three stages in this pipeline.

Check out.

Build & Test.

Gathering Artifacts.

This pipeline builds java based application.

This guide outlines the steps to set up a Jenkins pipeline using the master-slave architecture, building a Java-based application with Maven 3.9.2.

## Step-by-Step Guide

### Step 1: Create a New Pipeline

1. Click on **New Item** in Jenkins.
2. Give a name to your pipeline and select **Pipeline**. Click **OK**.

### Step 2: Configure Pipeline Script

1. Scroll down and select **Pipeline script**.
2. Copy the Jenkinsfile script provided and paste it into the script editor. Click **Save**.

### Step 3: Install Maven 3.9.2 on Master or Slave Node

If using the master-slave architecture, install Maven 3.9.2 on your master or slave node.

  #### Step 1: Update the package list
  
```sh
sudo apt update
```
  #### Step 2: Install prerequisites
  
```sh
sudo apt install -y wget unzip
```
  #### Step 3: Download Maven 3.9.2
  
```sh
wget https://archive.apache.org/dist/maven/maven-3/3.9.2/binaries/apache-maven-3.9.2-bin.tar.gz
```
  #### Step 4: Extract the downloaded archive
  
```sh
sudo tar -zxvf apache-maven-3.9.2-bin.tar.gz -C /opt
```
  #### Step 5: Create a symbolic link to make Maven accessible from anywhere
  
```sh
sudo ln -s /opt/apache-maven-3.9.2 /opt/maven
```


  #### Step 6: Set up environment variables

```sh
echo "export M2_HOME=/opt/maven" | sudo tee -a /etc/profile.d/maven.sh
echo "export PATH=\${M2_HOME}/bin:\${PATH}" | sudo tee -a /etc/profile.d/maven.sh
```

  #### Step 7: Make the script executable

```sh
sudo chmod +x /etc/profile.d/maven.sh
```
  #### Step 8: Load the environment variables

```sh
source /etc/profile.d/maven.sh
```
  #### Step 9: Verify the Maven installation

```sh
mvn -version
```
## Step 4: Build the Pipeline
Click Build Now in Jenkins.
Monitor the pipeline execution to see the cloned repository and generated artifacts.

## Viewing the artifacts

You can find the cloned repository and target artifacts in the following path on your master or slave node:
/var/lib/Jenkins/workspace
