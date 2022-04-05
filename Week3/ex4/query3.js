const { MongoClient } = require('mongodb');

const url =
  'mongodb+srv://tycode:mongoDBogreniyorum@cluster0.mtmeg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);

const db = client.db('world');

async function run() {
  try {
    await client.connect();
    console.log('Connected correctly to server');

    const result1 = await db.collection('city').findOne({ Name: 'Izmir2' });

    console.log(result1);

    //I used a different method for the second query
    const result2 = await db.collection('city').find({ CountryCode: 'TUR', ID: 4080 }).toArray();

    console.log(result2);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run();
