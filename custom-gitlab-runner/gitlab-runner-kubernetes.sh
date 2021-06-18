#https://adambcomer.com/blog/setup-gitlab-cicd-on-kubernetes.html

# First create a runner to get the identifying token-value for the gitlab-runner
#1. sudo docker run -it --entrypoint /bin/bash gitlab/gitlab-runner:latest
#2. gitlab-runner register
#Url: https://gitlab.lnu.se/
#Project token: wnWXncxeAzgF4wLurw_v
#Name: name-of-runner
#null
#decide executor variant (docker/script/kubernetes etc.)
#busybox:latest
#copy info from:
#cat /etc/gitlab-runner/config.toml
#remove the container and use the info from config.toml in the  .yaml files

#Configure the gitlab-runner
#ssh copy files to master kubernetes and run this script

echo "Creating namespace 'gitlab-runner' for the runner"
kubectl create namespace gitlab-runner > /dev/null 2>&1
echo "Applying gitlab-runner-service-account"
kubectl apply -f gitlab-runner-service-account.yaml > /dev/null 2>&1 
echo "Applying gitlab-runner-config"
kubectl apply -f gitlab-runner-config.yaml > /dev/null 2>&1
echo "Applying gitlab-runner-deployment"
kubectl apply -f gitlab-runner-deployment.yaml > /dev/null 2>&1
#echo "Applying gitlab-runner-
#kubectl apply -f gitlab-admin-service-account.yaml > /dev/null 2>&1

