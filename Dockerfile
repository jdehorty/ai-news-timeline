# Use a standard Ubuntu base image
FROM ubuntu:22.04

# Install rsync
RUN apt-get update && apt-get install -y rsync
