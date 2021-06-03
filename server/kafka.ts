import { Confluent } from 'kafka-socks';
// import Confluent from "./../../kafka-socks/Confluent";

require('dotenv').config();

const API_KEY = "OZVVZDUFJ7BEVFAB";
const API_SECRET = `v4oZwZ9J1G0vdUyJje2omOA9MP18SRO9jJmh2aVVkPrqmoU1/EqMaELRPsWMZoyJ`;
const KAFKA_BOOTSTRAP_SERVER = `pkc-lzvrd.us-west4.gcp.confluent.cloud:9092`;


const kafka: { producer: Function; consumer: Function } = new Confluent(
    API_KEY,
    API_SECRET,
    KAFKA_BOOTSTRAP_SERVER
  ).create("client-id-vinit");

export { kafka };