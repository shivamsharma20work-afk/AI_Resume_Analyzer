pipeline{
    agent any

    environment{
        AWS_Default_REGION = 'ap-south-1'
    }

    stages{
        stage('Test AWS Access') {
            steps {
                withCredentials([
                    [$class: 'AmazonWebServicesCredentialsBinding',
                     credentialsId: 'aws-creds']
                ]) {
                    sh 'aws sts get-caller-identity'
                }
            }
        }
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