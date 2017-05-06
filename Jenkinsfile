pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh '. ~/.nvm/nvm.sh use 6'
        sh 'which node'
        sh 'node --version'
        sh 'npm --version'
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
