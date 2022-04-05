const { MongoClient } = require('mongodb');

const url =
  'mongodb+srv://tycode:mongoDBogreniyorum@cluster0.mtmeg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);

const db = client.db('world');

async function run() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
    
    //I've found this solution to increment 'ID' field automatically
    const index = await db.collection('city').countDocuments();

    const newCity = {
      ID: index + 1,
      Name: 'Izmir2',
      CountryCode: 'TUR',
      District: 'Izmir',
      Population: '4500000',
    };
    const result = await db.collection('city').insertOne(newCity);
    console.log(result);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run();
