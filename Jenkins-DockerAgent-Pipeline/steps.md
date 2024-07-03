# Running Jenkins pipeline with Docker Agent

Setup the jenkins server by following the steps provided in repo.

After setting up the jenkins install docker in master node using below command.

```sh
sudo apt install -y docker.io
```

Now add the jenkins user to docker group by using below command.This step will provide access to docker deamon for jenkins user.

```sh
sudo usermod -aG docker jenkins
systemctl restart docker
```

Close the SSH session and connect again to reflect the changes.

You can select suitable docker image as agent for running pipeline.
The can be from docker hub or create your own docker image and push it to dockerhub

Based on the image you selected you can modify or keep the same stages and execute the pipeline.

## Important things 

The jenkins work space is mounted as a volume to the docker container.Hence the jenkins workspace is shared resource.Hence the artifacts generated are stored inside jenkins workspace.

By default the docker container will run by jenkins user.

You can always pass arguments to the docker run command from pipeline.
