# Running Jenkins pipeline with Docker Agent

Setup the jenkins server by following the steps provided in repo.

After setting up the jenkins install docker in master node using below command.

```sh
sudo apt install -y docker.io
```

Now add the jenkins user to docker group by using below command.This step will provide access to docker deamon for jenkins user.

```sh
sudo usermod -aG docker jenkins
```

Close the SSH session and connect again to reflect the changes.
