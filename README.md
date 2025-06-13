# Journal-App
a secure journal app
 # prerequisites
 Node.js
 AWS account with profile or access keys
 ## initialize project
 npm create vite@latest my-journal -- --template react
 cd my-journal
 npm install 
 npm run dev

 ## initialize authorization and authentication
npm install -g @aws-amplify/cl1
amplify init //initializing amplify project

## add Amazon Cognito for authenticationa and authorization
amplify add auth
* can customize signin/registration flow
* customize email and SMS foor MFA
* customize attributes for your social users
* enable third-pary providers
To enable federate login configure them first
https://docs.amplify.aws/gen1/react/build-a-backend/auth/add-social-provider/#social-providers-and-federation

#amplify update auth

# using Amplify Authenticator instead of Amplify libraries