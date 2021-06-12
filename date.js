// let currentDate = new Date(Date());
// let unixDate = Date.parse(currentDate);
// let utc = new Date().toUTCString();
// console.log(`Current Date : \n ${currentDate} \n`);
// console.log(`Current Date in Unix Timestamp : \n ${unixDate} \n`);
// console.log(`UTC : \n ${utc} \n`);

let dateInput = 1623439926;
let convertDate = new Date(dateInput * 1000).toGMTString();
// let normalDate = currentDate.getTime()/1000;


console.log(`Converted Date = ${convertDate}.`);
// console.log(`normalDate = ${normalDate}`)


// let utcDate = new Date("2015-05");

// console.log(utcDate.toGMTString());
// console.log(utcDate.getTime());