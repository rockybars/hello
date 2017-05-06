pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'echo $NVM_DIR'
        sh 'whoami'
        sh 'source ~/.bashrc &> /dev/null && nvm use 6 &> /dev/null && npm install'
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