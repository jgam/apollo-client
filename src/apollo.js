import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: "https://movieql.now.sh/"
})

export default client

//this is apollo client that helps set up all the apollo server.