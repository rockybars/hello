pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'echo $NVM_DIR'
        sh 'whoami'
        sh 'which node'
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