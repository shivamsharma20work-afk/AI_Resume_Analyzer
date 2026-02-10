pipeline {
  agent any

  environment {
    AWS_REGION = 'ap-south-1'
    AWS_ACCOUNT_ID = '288096932508'
    BACKEND_REPO = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/ai-resume-backend"
    FRONTEND_REPO = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/ai-resume-frontend"
    IMAGE_TAG = "${BUILD_NUMBER}"
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('AWS Auth Check') {
      steps {
        withCredentials([[
          $class: 'AmazonWebServicesCredentialsBinding',
          credentialsId: 'aws-creds'
        ]]) {
          sh 'aws sts get-caller-identity'
        }
      }
    }

    stage('ECR Login') {
      steps {
        withCredentials([[
          $class: 'AmazonWebServicesCredentialsBinding',
          credentialsId: 'aws-creds'
        ]]) {
          sh '''
            aws ecr get-login-password --region $AWS_REGION \
            | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com
          '''
        }
      }
    }

    stage('Build Backend Image') {
      steps {
        sh '''
          docker build -t ai-resume-backend:${IMAGE_TAG} backend
          docker tag ai-resume-backend:${IMAGE_TAG} ${BACKEND_REPO}:${IMAGE_TAG}
        '''
      }
    }

    stage('Build Frontend Image') {
      steps {
        sh '''
          docker build -t ai-resume-frontend:${IMAGE_TAG} frontend
          docker tag ai-resume-frontend:${IMAGE_TAG} ${FRONTEND_REPO}:${IMAGE_TAG}
        '''
      }
    }

    stage('Push Images to ECR') {
      steps {
        sh '''
          docker push ${BACKEND_REPO}:${IMAGE_TAG}
          docker push ${FRONTEND_REPO}:${IMAGE_TAG}
        '''
      }
    }
  }

  post {
    success {
      echo "✅ CI successful: Images pushed to ECR"
    }
    failure {
      echo "❌ CI failed"
    }
  }
}
