pipeline {
    agent any
    
    tools {
        nodejs "npm"
    }
    
    stages {
        stage("install stage") {
            steps {
                script {
                    // check out git repo
                    checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/ayowilfred95/OpenAi-ChatBot.git']])
                    // install dependencies
                    sh 'npm install'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ayowilfred95/chatbot-openai:1.0 ."
                }
            }
        }
        stage("Push Docker image to Dockerhub") {
            steps {
                script {
                    // login to dockerhub first
                    withCredentials([string(credentialsId: 'dockerpwd', variable: 'dockerhubpwd')]) {
                        sh 'docker login -u ayowilfred95 -p ${dockerhubpwd}'
                        
                        // push docker imae to dockerhub
                        sh "docker push ayowilfred95/chatbot-openai:1.0"
                    }
                }
            }
        }
    }
}
