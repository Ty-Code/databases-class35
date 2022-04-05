###STEPS FOR MIGRATING DATA TO ATLAS

* installed mongoDB by the command **npm i mongodb**.
* created a new Atlas cluster.
* loaded sample data into the cluster to test it.
* retrieved connection string of the cluster.
* created database 'world'in Atlas.
* installed mongoimport by the command **brew tap mongodb/brew** and **brew install mongodb-database-tools**.
* exported selected tables as csv files.
* imported the csv files to the cluster by the command **mongoimport --uri "mongodb+srv://user:password@cluster0.mtmeg.mongodb.net/world?retryWrites=true&w=majority" --collection collectionname --drop --type csv --headerline --file </path/filename>.csv**

