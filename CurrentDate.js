var date = new Date();
undefined

date;
Wed Apr 12 2017 11:10:28 GMT+0200 (CEST)

date.toString();    //same thing!
Wed Apr 12 2017 11:10:28 GMT+0200 (CEST)

new Date('2017 04 28');
Fri Apr 28 2017 00:00:00 GMT+0200 (CEST)

new Date('2017 1 2');
Mon Jan 02 2017 00:00:00 GMT+0100 (CET)

new Date('2017 1 2 8:30');
Mon Jan 02 2017 08:30:00 GMT+0100 (CET)

new Date(2017, 3 , 16, 14, 43, 10, 120);
Sun Apr 16 2017 14:43:10 GMT+0200 (CEST)

new Date(2017, 0 , 10, 14);
Tue Jan 10 2017 14:00:00 GMT+0100 (CET)

new Date(2017 , 1, 28) // 1 is February! Month indexes start at 0!
Tue Feb 28 2017 00:00:00 GMT+0100 (CET)

new Date(2017, 1 , 29); // No February 29th in 2017! Gives 1st of March
Web Mar 01 2017 00:00:00 GMT+0100 (CET)

new Date(2017, 11, 31); // Happy new year!
Sun Dec 31 2017 00:00:00 GMT+0100 (CET)

new Date(2017 , 11, 32) // 32 Dec -> 1st of January!
Mon Jan 01 2018 00:00:00 GMT+0100 (CET)

// Let's play with my birthday
var d = new Date(2000,10,16); //Himanshu singh's birthday
undefined

d.getDay(); // Sunday is 0
4

d; //let's verify
Thu Nov 16 2000 00:00:00 GMT+0530 (India Standard Time)

// a small program which guess on which days of the week himanshu singh's birthday will occur between 2020 and 2050
var dayOfTheWeek = [0,0,0,0,0,0,0];
undefined
for(var year = 2020; year <=2050; year++){dayOfTheWeek[new Date(year,10,16).getDay()]++;}
4
dayOfTheWeek
(7) [4, 5, 5, 5, 4, 4, 4]
//  4 times on a Sunday , Thursday , Friday , Saturday
// 5 times on Monday, Tuesday , Wednesday