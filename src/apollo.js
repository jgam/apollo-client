import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: "http://localhost:4000/"
})

export default client

//this is apollo client that helps set up all the apollo server.