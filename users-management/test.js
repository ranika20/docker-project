const dns = require('node:dns');

dns.resolveSrv(
  '_mongodb._tcp.cluster0.bwln9w9.mongodb.net',
  (err, records) => {
    console.log('ERR:', err);
    console.log('RECORDS:', records);
  }
);