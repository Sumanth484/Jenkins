# Steps to Configure GitHub Webhook and Jenkins Job

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
