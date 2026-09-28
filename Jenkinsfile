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
                sh 'docker build -t autodeploy .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker stop autodeploy-container || true'
                sh 'docker rm autodeploy-container || true'
                sh 'docker run -d --name autodeploy-container -p 8000:80 autodeploy'
            }
        }

    }
}