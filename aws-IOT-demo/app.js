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
   keyPath: '95b73424a2b0b96280fb91d4754dcda19cd2caa471b528ec85fcf4a4477c791f-private.pem.key',
  certPath: '95b73424a2b0b96280fb91d4754dcda19cd2caa471b528ec85fcf4a4477c791f-certificate.pem.crt',
    caPath: 'AmazonRootCA1.pem',
  clientId: 'awsIOTTest',
      host: "a3q14a9hbgo1p.iot.us-west-2.amazonaws.com"
});

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
device
  .on('connect', function() {
    console.log('connect');
    // device.subscribe('topic_1');
    device.publish('topic_2', JSON.stringify({ test_data_from_local: 1}));
  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });