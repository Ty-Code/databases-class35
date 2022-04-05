const { MongoClient } = require('mongodb');

const url =
  'mongodb+srv://tycode:mongoDBogreniyorum@cluster0.mtmeg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);

const db = client.db('world');

async function run() {
  try {
    await client.connect();
    console.log('Connected correctly to server');

    const result = await db.collection('city').updateOne(
      { Name: 'Izmir2' },
      {
        $set: { Population: 5000000 },
        $currentDate: { lastModified: true },
      }
    );
    console.log(result);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run();
