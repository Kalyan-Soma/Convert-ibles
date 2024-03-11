#!/bin/sh
# This script will be run by the custom buildpack

# Navigate to backend directory and build the project
cd backend

# Run Maven install
mvn clean install -DskipTests