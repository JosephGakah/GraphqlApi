const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fs = require("fs")
const {makeExecutableSchema} = require('graphql-tools')
const {graphiqlExpress,graphqlExpress} = require("apollo-server-express");

const db = require("./database/db")
const resolvers = require("./resolver/resolver")

const app = express();
const port = process.env.PORT || 9000;

const typeDefs = fs.readFileSync("./schema/schema.graphql",{encoding:'utf-8'});


const schema = makeExecutableSchema({typeDefs,resolvers})

app.use(cors().bodyParser.json())

app.use('/graphql',graphqlExpress({schema}))

app.use('/graphiql' , graphiqlExpress({endpointURL:'/graphql'}))

app.listen(
  port, () => console.info("*Server started on port ${port} \n\t")
) 