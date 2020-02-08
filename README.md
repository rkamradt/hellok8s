# Hello k8s

Two simple, containerized NodeJS servers suitable for deploying to kubernetes as a test.

Find the image on docker hub at rlkamradt/hellok8s and rlkamradt/greetingsk8s

To deploy the image:

```
cd helloworld
kubectl apply -f hellok8s-deployment.yaml
kubectl apply -f hellok8s-service.yaml
cd ../greetings
kubectl apply -f greetingsk8s-deployment.yaml
kubectl apply -f greetingsk8s-service.yaml
```
