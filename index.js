const mongoose = require('mongoose');
const mongoXlsx = require('mongo-xlsx');

const { Employee } = require('./model');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	dbName: 'report'
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
	console.log('Connected to Mongo!');
});

const data = './employees.xlsx';
const model = null; /* mongoXlsx.buildDynamicModel(data); */

// const test = mongoXlsx.xlsx2MongoData(data, model, (err, mongoData) => {
// 	console.log(mongoData);
// });

const employee = mongoXlsx.xlsx2MongoData(data, model, (err, mongoData) => {
	mongoData.forEach((emp) => {
		const newEmp = new Employee(emp);
		newEmp.save();
	});
});
