const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql'); // creates a GraphQLSchema
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

const schema = buildASTSchema(gql`
  type Query {
    hello: String
    bye: String
    posts: [Post]
    post(id: ID): Post
    authors: [Person]
    author(id: ID): Person
  }

  type Post {
    id: ID
    author: Person
    body: String
  }

  type Person {
    id: ID
    posts: [Post]
    firstName: String
    lastName: String
  }
`);

// resolvers
const rootValue = {
  hello: () => 'Hello, world',
  bye: () => 'C-ya later!',
  posts: () => POSTS.values(),
  post: ({ id }) => POSTS.get(id),
  authors: () => PEOPLE.values(),
  author: ({ id }) => PEOPLE.get(id),
};

const PEOPLE = new Map();
const POSTS = new Map();

class Post {
  constructor(data) {
    Object.assign(this, data);
  }
  get author() {
    return PEOPLE.get(this.authorId);
  }
}

class Person {
  constructor(data) {
    Object.assign(this, data);
  }
  get posts() {
    return [...POSTS.values()].filter(post => post.authorId === this.id);
  }
}

// some fake data
const initializeData = () => {
  // person
  const fakePeople = [
    { id: '1', firstName: 'Derek', lastName: 'Jeter' },
    { id: '2', firstName: 'Aaron', lastName: 'Judge' },
  ];

  fakePeople.forEach(person => PEOPLE.set(person.id, new Person(person)));

  // posts
  const fakePosts = [
    { id: '1', authorId: '1', body: 'I am the Captain' },
    { id: '2', authorId: '2', body: 'I am the Captain now!' },
    { id: '3', authorId: '1', body: 'I have more rings!' },
    { id: '4', authorId: '2', body: 'Who cares about your rings!' },
  ];

  fakePosts.forEach(post => POSTS.set(post.id, new Post(post)));
};

initializeData();

app.use('/graphql', graphqlHTTP({ schema, rootValue }));
app.listen(port);
console.log(`Server running at port :${port}/graphql`);
