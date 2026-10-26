
pipeline {
    agent any

    tools {
        nodejs 'NodeJS-22'
    }

    stages {
        stage('Verify Runtime') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo 'All tests passed!'
        }

        failure {
            echo 'The pipeline failed. Check the console output.'
        }
    }
}
