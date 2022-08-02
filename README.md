# testnode

Simple NodeJS application with express module.

## Setup
- run these commands to setup node
```
yum -y update
yum install -y gcc-c++ make git zip unzip
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
yum -y install nodejs
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
```
{"message":"Welcome to sample node mysql restapi - from - <instance private dns name> - in - <AWS AZ name>"}
```
