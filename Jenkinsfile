
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Jenkins has loaded this pipeline from GitHub.'
                checkout scm
            }
        }

        stage('Inspect Project') {
            steps {
                sh 'pwd'
                sh 'ls -la'
                sh 'cat package.json'
            }
        }
    }

    post {
        success {
            echo 'GitHub checkout completed successfully!'
        }

        failure {
            echo 'Something failed. Check the console logs.'
        }
    }
}
