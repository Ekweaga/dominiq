import {gql} from '@apollo/client';


const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    token
    user {
      id
      email
    }
  }
}
`;

const REGISTER_USER = gql`
mutation registerUser($email: String!, $password: String! ) {
    registerUser(email: $email, password: $password)
        {   
            id
            email
            password
        }
    }
`;

const VERIFY_EMAIL= gql`
mutation verifyAccount($token: String!) {
    verifyAccount(token: $token)
        {
            success
            message
            user {
                id
                email
                emailVerified
            }
        }
    }
`;


const CHANGE_PASSWORD = gql`
mutation changePassword($userId: ID!, $oldPassword: String!, $newPassword: String!) {
    changePassword(userId: $userId, oldPassword: $oldPassword, newPassword: $newPassword) {
        id
        email
        password
    }
}
`;

//    IMPLEMENTATION:

// const [changePassword, { loading, error }] = useMutation(CHANGE_PASSWORD);

// // Call the mutation with the necessary variables
// changePassword({ variables: { userId: '123', oldPassword: 'old_password', newPassword: 'new_password' } });


export {REGISTER_USER, LOGIN_USER, VERIFY_EMAIL, CHANGE_PASSWORD};


