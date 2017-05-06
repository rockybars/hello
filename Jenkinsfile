pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'command -v nvm'
        sh 'npm install'
      }
    }
    stage('Tests') {
      steps {
        echo 'Testing...'
        sh 'npm test'
      }
    }
  }
}