pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'source $NVM_DIR/nvm.sh && nvm use 6'
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
