pipeline {
    agent any
    stages {
        stage('cleanup') {
            steps {
                deleteDir()
            }
        }
        stage('clone repo') {
            steps {
                sh 'git clone https://github.com/SudarshanSaxena/simple-node-express-app.git'
            }
        }
        stage('build') {
            steps {
                dir('simple-node-express-app') {
                    sh 'node -v'
                    sh 'npm install'
                }
            }
        }
        stage('test') {
            steps {
                dir('simple-node-express-app') {
                    sh "echo 'test runs here'"
                }
            }
        }
    }
}
