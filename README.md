# testnode

Simple NodeJS application with express module.

## Cloud Instances
- Can be deployed on AWS
  - Use testnode.service from `aws` directory
- Can be deployed on GCP
  - Use testnode.service from `gcp` directory

## Setup
- For Amazon Linux 2 Instance on `AWS`
  - run these commands to setup node
  ```
  yum -y update
  yum install -y gcc-c++ make git zip unzip
  curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
  yum -y install nodejs
  ```

- For Debian 11 Instance on `GCP`
  ```
  curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
  sudo apt update -y
  sudo apt install nodejs -y
  sudo apt install git -y
  ```

## Create systemd service
- As **root** user, copy *testnode.service* file to /etc/systemd/system/
- Reload systemd daemon
```
systemctl daemon-reload
```
- Enable and Start node app
```
systemctl enable testnode
systemctl start testnode
``` 

## Verify node app
```
curl -vvv http://<instance_ip>:8080
```

### Expected result:
- In case of `AWS` ..
```
{"message":"Welcome to sample node mysql restapi - from - <instance private dns name> - in - <AWS AZ name>"}
```

- In case of `GCP` ..
```
{"message":"Welcome to sample node mysql restapi - from - <vm name> - in - <GCP Zone name>"}
```
