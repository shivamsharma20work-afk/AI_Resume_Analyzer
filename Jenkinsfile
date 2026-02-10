pipeline{
    agent any

    environment{
        AWS_ACCESS_KEY_ID = credentials('aws-access-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-access-key')
        AWS_Default_REGION = 'ap-south-1'
    }
    stages{
        stage('Build'){
            steps{
                echo 'Building...'
            }
        }
        stage('Test'){
            steps{
                echo 'Testing...'
            }
        }
        stage('Deploy'){
            steps{
                echo 'Deploying...'
            }
        }
    }
}