pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'echo $NVM_DIR'
        sh 'whoami'
        sh 'source ~/.bashrc && nvm use 6 && which node && npm install'
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