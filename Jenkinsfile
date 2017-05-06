pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"'
        sh 'nvm use 6'
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
