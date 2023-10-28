const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');

const app = express();
const PORT = 3000;

async function main() {
  // Set the DATABASE_URL environment variable
  process.env.DATABASE_URL = DATABASE_URL;

  // Your database operations using Prisma

  // Start the Express server
  app.get('/', (req, res) => {
    res.send('Hello, Node.js and Express with Prisma and PostgreSQL!');
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main()
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
