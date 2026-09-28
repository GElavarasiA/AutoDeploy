pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t autodeploy .'
            }
        }

        stage('Deploy Container') {
            steps {
                bat 'docker stop autodeploy-container || exit 0'
                bat 'docker rm autodeploy-container || exit 0'
                bat 'docker run -d --name autodeploy-container -p 8000:80 autodeploy'
            }
        }

    }
}