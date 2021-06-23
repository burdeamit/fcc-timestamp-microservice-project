// let currentDate = new Date(Date());
// let unixDate = Date.parse(currentDate);
// let utc = new Date().toUTCString();
// console.log(`Current Date : \n ${currentDate} \n`);
// console.log(`Current Date in Unix Timestamp : \n ${unixDate} \n`);
// console.log(`UTC : \n ${utc} \n`);

// let dateInput = 1623439926;
// let convertDate = new Date(dateInput * 1000).toGMTString();
// let normalDate = currentDate.getTime()/1000;

// console.log(`Converted Date = ${convertDate}.`);
// console.log(`normalDate = ${normalDate}`)

// let utcDate = new Date("2015-05");

// console.log(utcDate.toGMTString());
// console.log(utcDate.getTime());

// let test = Date.parse("1624402440000");
// let test = Date.parse("Tuesday, 22 June 2021 22:54:00");
// let test1 = Date.parse("2015-12-25");
// let test1 = new Date(2015);
// let test1 = Date.parse("1624");
// let test = Date.parse(1624402440000);
// let test1 = new Date(1624402440000);
// console.log(test);
// console.log(test1);
// Date.prototype.isValid()
// let num1 = parseInt("abc");
// console.log(num1);

// let test1 = new Date("2015-12-25");
// let test2 = new Date("1451001600000");
// let test21 = new Date(parseInt("1451001600000"));
// let test3 = Date.parse("2015-12-25");
// let test4 = Date.parse("1451001600000");

// let test5 = Date.parse(1451001600000);
// let test6 = isNaN(test3);
// let test7 = isNaN(test4);
// let test8 = Date.parse("ABC");

// console.log(`test1 = ${test1}`);
// console.log(`test2 = ${test2}`);
// console.log(`test21 = ${test21}`);
// console.log(`test3 = ${test3}`);
// console.log(`test4 = ${test4}`);
// console.log(`test5 = ${test5}`);
// console.log(`test6 = ${test6}`);
// console.log(`test7 = ${test7}`);
// console.log(`test8 = ${test8}`);

// console.log(new Date("ABC"));

// let testNan = !isNaN(NaN);
// console.log(testNan);

// console.log(new Date("1451001600000"));
// console.log(new Date("2015-12-25"));
// console.log(new Date("20150-12-25"));
// console.log(new Date("201f2345"));
// console.log(new Date("2015-12-25bd"));

// let typeTest1 = new Date("2015-12-25bd");
// let typeTest2 = new Date("2015-12-25");
// let typeTest3 = new Date(2015 - 12 - 25);
// console.log(typeof typeTest1);
// console.log(typeof typeTest2);
// console.log(typeof typeTest3);
// console.log(typeof typeTest4);

// console.log(new Date("255"));
// console.log(new Date(parseInt("255")));
// console.log(Date.parse("255"));
// console.log(Date.parse(255));

// console.log(isNaN("2000-20"));
console.log(new Date("2015-12-25").toUTCString());
console.log(new Date("2015-12-25").getTime());
console.log(new Date(1451001600000).getTime());
console.log(new Date(1451001600000).toUTCString());
