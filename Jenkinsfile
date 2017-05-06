pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        echo 'Installing...'
        sh 'npm install'
      }
    }
    stage('test') {
      steps {
        echo 'Testing...'
        sh 'npm test'
      }
    }
  }
}
