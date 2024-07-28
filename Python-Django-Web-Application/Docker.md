# Docker file
This file explains how to run the application using docker.

Launch the ubuntu EC2 instance.

Install docker using below command.

```sh
sudo apt update
sudo apt install -y docker.io
```

Add ubuntu user to docker group

```sh
sudo usermod -aG docker ubuntu
```

Clone the repo and navigate to dockerfile.

Include your host IP address in ALLOWED_HOSTS in myproject/myapp/settings.py

Execute the below command to build image.

```sh
docker build -t sample/pythonapp:v1 .
```

Run the container using below command.

```sh
docker run -d -p 8000:8000 sample/pythonapp:v1 
```

Allow the traffic through port 8000 and try accessing the application.
