
pipeline {
    agent any

    tools {
        nodejs 'NodeJS-22'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'node --version'
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Package') {
            steps {
                sh 'printf "Build completed successfully.\\n" > build-info.txt'
                archiveArtifacts(
                    artifacts: 'build-info.txt',
                    fingerprint: true
                )
            }
        }
    }

    post {
        always {
            junit(
                testResults: 'reports/junit.xml',
                allowEmptyResults: true
            )
        }

        success {
            echo 'CI pipeline passed!'
        }

        failure {
            echo 'CI pipeline failed. Check the test report.'
        }
    }
}
