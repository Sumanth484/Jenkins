## Setting Up the Netflix Clone Application

Follow these steps to set up and run the Netflix clone application on your local machine:

### 1. Update Package List

Run the following commands to update the package list on your system:

```bash
sudo apt update
```

### 2. Install Required Packages

Install the necessary packages and dependencies for the application using the following command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
```

### 3. Install Node.js

Install Node.js, a JavaScript runtime, with the following commands:

```bash
nvm install 15
nvm use 15
```

### 4. Check the versions

Check the versions of installed softwares, with the following commands:

```bash
node -v
npm-v
```

### 5. Clone the Repo

Install git if not installed and clone the repository, with the following commands:

```bash
sudo apt install -y git
git clone https://github.com/Sumanth484/Netflix-Clone.git
```

### 4. Install Project Dependencies

Navigate to the project directory and install the project-specific dependencies:

```bash
cd Netflix-Clone
npm install
```

### 5. Start the Application: Works

To start the Netflix clone application, use the following command:

```bash
npm start &
```

### 6. Optional & May Not Work: Serve the Built Application

If you want to serve the built version of the application, you can use the `serve` package. First, install it globally:

```bash
npm install -g serve
```

Then, serve the built application on port 4000:

```bash
serve -s build -l 4000
```

Now you should be able to access the Netflix clone application by opening your web browser and navigating to `http://localhost:4000`.

Enjoy exploring the Netflix clone!!
