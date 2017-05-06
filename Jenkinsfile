pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'echo $NVM_DIR'
        sh 'whoami'
        sh 'nvm use 6'
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