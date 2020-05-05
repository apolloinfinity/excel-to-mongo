const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = process.env.MONGO_URL;

// Use connect method to connect to the server
async function employeeCollection () {
	const client = await MongoClient.connect(process.env.MONGO_URL, {
		useNewUrlParser: true
	});

	return client.db('report').collection('employees');
}

employeeCollection();
