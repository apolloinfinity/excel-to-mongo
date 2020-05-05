const { Schema, model } = require('mongoose');

const EmployeeSchema = new Schema({
	first_name: String,
	last_name: String,
	gender: String,
	age: Number,
	experience_years: String,
	salary: Number
});

module.exports = {
	Employee: model('employee', EmployeeSchema)
};
