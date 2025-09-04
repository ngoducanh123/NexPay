const express = require('express');
const connectDB = require('./config/db');
const paymentRoutes = require('./routes/payments');
const authRoutes = require('./routes/auth');
const merchantRoutes = require('./routes/merchants');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const typeDefs = require('./graphql/schema');
const resolvers = { Query: { hello: () => 'Hello world!' } };

const app = express();
connectDB();

app.use(express.json());
app.use('/api/payments', paymentRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/merchants', merchantRoutes);

const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => {
  app.use('/graphql', expressMiddleware(server));
});

app.listen(5000, () => console.log('Server running on port 5000'));