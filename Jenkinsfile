pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'echo $SHELL'
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