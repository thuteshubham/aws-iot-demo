// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
var awsIot = require('aws-iot-device-sdk');

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts
// to connect with a client identifier which is already in use, the existing
// connection will be terminated.
//
var device = awsIot.device({
   keyPath: '2d88466c0fcca4ae1cd3287f245f3d886d06f43681cb8fef976b0617bf1388ff-private.pem.key',
  certPath: '2d88466c0fcca4ae1cd3287f245f3d886d06f43681cb8fef976b0617bf1388ff-certificate.pem.crt',
    caPath: 'AmazonRootCA1.pem',
  clientId: 'node-to-iot-connect',
      host: "a3q14a9hbgo1p-ats.iot.us-west-2.amazonaws.com"
});

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
device
  .on('connect', function() {
    console.log('connect');
    // device.subscribe('topic_1');
    device.publish('myTopic', JSON.stringify({ test_data_from_local: 1}));
    console.log("message sent");
  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });