import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const mongoose = require('mongoose');

		// Replace 'your_connection_string' with your actual MongoDB connection string
		const uri = 'your_connection_string';

		mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


		const conn = await mongoose.connect(process.env.MONGO_URI, {
			// To avoid warnings in the console
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
