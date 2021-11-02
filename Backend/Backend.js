const neo4j = require('neo4j-driver');

const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const driver = neo4j.driver('bolt://localhost:7687',
                  neo4j.auth.basic('neo4j', 'password'), 
                  {/* encrypted: 'ENCRYPTION_OFF' */});

const query =
  `
  MATCH (movie:Movie {title:$favorite})<-[:ACTED_IN]-(actor)-[:ACTED_IN]->(rec:Movie)
   RETURN distinct rec.title as title LIMIT 20
  `;

const params = {"favorite": "The Matrix"};

const session = driver.session({database:"neo4j"});

session.run(query, params)
  .then((result) => {
    result.records.forEach((record) => {
        console.log(record.get('title'));
    });
    session.close();
    driver.close();
  })
  .catch((error) => {
    console.error(error);
  });
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})