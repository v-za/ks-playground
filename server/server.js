"use strict";
exports.__esModule = true;
require("dotenv").config();
var express = require("express");
var http = require("http");
var path = require("path");
var Server = require("socket.io").Server;
// import Consumer from "kafka-socks";
// import Subject from "./../../kafka-socks/Subject";
// const {Consumer} = require('kafka-socks');
// const {Subject} = require('kafka-socks');
var kafka_socks_1 = require("kafka-socks");
var kafka_socks_2 = require("kafka-socks");
// import Consumer from "./../../kafka-socks/Consumer";
// import Subject from "./../../kafka-socks/Subject";
var app = express();
var server = http.createServer(app);
var io = new Server(server);
var PORT = 3001;
var producer_1 = require("./producer");
var kafka_1 = require("./kafka");
require('dotenv').config();
// const port = 3001;
app.use(require("cors")());
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
    // res.sendFile("index.html");
});
var kafkaconsumer_1 = kafka_1.kafka.consumer({
    groupId: 'truck-group-1'
});
var kafkaconsumer_2 = kafka_1.kafka.consumer({
    groupId: 'truck-group-2'
});
//const consumer_1 = new Consumer(kafkaconsumer_1, 'trucks-topic-1'<--related to Kafka (what topic should the consumer subscribe to), `truck message-1`<-- socketio (what event should it emit)) //
var consumer_1 = new kafka_socks_1.Consumer(kafkaconsumer_1, 'trucks-topic-1', "truck message-1"); //
var consumer_2 = new kafka_socks_1.Consumer(kafkaconsumer_2, 'trucks-topic-2', 'truck message-2');
var trucks_subject = new kafka_socks_2.Subject(io, 'trucks');
trucks_subject.add(consumer_1);
trucks_subject.add(consumer_2);
app.get('/consume', function (req, res) {
    producer_1.produce()["catch"](function (error) {
        console.log(error);
        process.exit(1);
    });
    trucks_subject.connect();
    return res.send({ message: 'works!' });
});
app.get('/pause', function (req, res) {
    console.log('in the middleware for pause');
    console.log('in pause');
    trucks_subject.pause();
    return res.send({ message: 'works!' });
});
app.get('/resume', function (req, res) {
    console.log('in the middleware for resume');
    trucks_subject.resume();
    return res.send({ message: 'works!' });
});
server.listen(PORT, function () {
    console.log("Listening on port " + server.address().port);
});
require('dotenv').config();
//prior to bringing this in from .env file, we continually received the "split of"
// const { API_KEY: string, API_SECRET: string, KAFKA_BOOTSTRAP_SERVER: string } = process.env;
// const API_KEY = "PS5UR5WJMR3M4IUK";
// const API_SECRET = `sViLnhxYPSZzirnBznMVHxRoQbvltcpmOJjlvnuv0f+SW138XyA1ZmO/kp7K87sg`;
// const KAFKA_BOOTSTRAP_SERVER = `pkc-lzvrd.us-west4.gcp.confluent.cloud:9092`;
// // app.use("/", (req: {}, res: {}) => {
// //   express.static(path.join(__dirname, "./../client/"));
// // });
// app.use(require("cors")());
// app.get("/", (req: any, res: any) => {
//   res.sendFile(path.resolve(__dirname, "../client/index.html"));
//   // res.sendFile("index.html");
// });
// // // 1. set up the producer to produce messages on interval
// // const kafka: { producer: Function; consumer: Function } = new Confluent(
// //   API_KEY,
// //   API_SECRET,
// //   KAFKA_BOOTSTRAP_SERVER
// // ).create("client-id");
// // const randomizer = (hi: number, lo: number = 0) => {
// //   return Math.floor(Math.random() * (hi + 1 - lo) + Math.floor(lo));
// // };
// // const producer = kafka.producer();
// // producer
// //   .connect()
// //   .then(() => {
// //     setInterval(() => {
// //       producer.send({
// //         topic: "Socks",
// //         messages: [
// //           // { key: "some-key", value: Math.floor(Math.random() * 9).toString() },
// //           {
// //             key: "some-key",
// //             value: `{"source":"www.npmjs.com","kafka-socks-downloads":${randomizer(
// //               20
// //             ).toString()},"average-download-speed":${randomizer(2000, 1000)}}`,
// //           },
// //         ],
// //       });
// //       console.log("message sent");
// //     }, 1000);
// //   })
// //   // .then(() => console.log("message sent"))
// //   .catch((err: Error) => {
// //     console.log("Error in producer.connect function", err);
// //     process.exit(1);
// //   });
// // 2. create a kafkasocks instance to:
// // a. consume produced messages and
// // b. emit them on socket
// const consumer = kafka.consumer({ groupId: "group-id" })
// const kafkasockClient = new Consumer(
//   consumer,
//   "Socks",
//   "new download"
// );
// const subject = new Subject(io, "trucks");
// subject.add(kafkasockClient);
// subject.connect();
// server.listen(PORT, () => console.log("listening on port 3001"));
