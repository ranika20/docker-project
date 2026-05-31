const dns = require('node:dns');

dns.setServers(['8.8.8.8', '1.1.1.1']);

dns.resolveSrv(
  '_mongodb._tcp.cluster0.bwln9w9.mongodb.net',
  (err, records) => {
    console.log('ERR:', err);
    console.log('RECORDS:', records);
  }
);