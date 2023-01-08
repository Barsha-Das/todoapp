// // import mongodb from "mongodb"
// // import dotenv from "dotenv"
// // //import { MongoClient } from "mongodb" 
// // const mongoose = require("mongoose");
// // const MongoClient = require('mongodb').MongoClient
// // const express = require('express');
// const MongoClient = require('mongodb').MongoClient
// const dotenv = require("dotenv")
// // dotenv.config()
// // // const url = "mongodb+srv://barsha:sabyapriya@cluster0.fqityf3.mongodb.net/?retryWrites=true&w=majority"
// // // //"mongodb : //localhost:27017";
// // // const client = new MongoClient(url);

// // // //await client.connect();
// export const mongoDbConnection = async () => MongoClient.connect(
//     process.env.MONGODB_URL as String,
//     {
//         useUnifiedTopology: true,
//     },
//     async (error, client) => {
//         if (error) throw error; //if error then send me the error 
//         console.log("Db connected!!!");
//         const database = client.db();
//         const collection = database.collection("MedicineApp");


//         let dataFromMongo = await collection.find().toArray();
//         console.log(dataFromMongo);

//     }
// );

// // const MongoClient = require('mongodb').MongoClient
// // const dotenv = require("dotenv")
// // dotenv.config()

// // const connectionString = process.env.MONGOURI
// // let db;

// // module.exports = {
// //   connectToServer : function(callback) {
// //     MongoClient.connect(connectionString, {
// //         useUnifiedTopology: true
// //       }, (err, client) => {
// //         if (err) return console.error(err)
    
// //         db = client.db('MedicalApp');
// //         console.log('Connected to Database');

// //         return callback
// //      });
// //   },

// //   getDb: function () {
// //     return db;
// //   }
// // }