let currentDate = Date();
let unixDate = Date.parse(currentDate);
let utc = new Date().toUTCString();
console.log(`Current Date : \n ${currentDate} \n`);
console.log(`Current Date in Unix Timestamp : \n ${unixDate} \n`);
console.log(`UTC : \n ${utc} \n`);