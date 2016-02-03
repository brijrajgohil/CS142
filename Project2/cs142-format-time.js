console.log(cs142FormatTime(new Date()));

function cs142FormatTime(dateConvert) {
  const dictDays = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    0: "Sunday"
  }
  const dictMonths = {
    0 : "January",
    1 : "February",
    2 : "March",
    3 : "April",
    4 : "May",
    5 : "June",
    6 : "July",
    7 : "August",
    8 : "September",
    9 : "October",
    10  : "November",
    11  : "December"
  }
  return dictDays[dateConvert.getDay()] + ", "
   + dictMonths[dateConvert.getMonth()] + " " + dateConvert.getDay() + ", "
   + dateConvert.getFullYear() + " "
   + (dateConvert.getHours() <= 9 ? "0" + dateConvert.getHours() : dateConvert.getHours()) + ":"
   + (dateConvert.getMinutes() <= 9 ? "0" + dateConvert.getMinutes() : dateConvert.getMinutes())
   + (dateConvert.getHours() >= 12 ? " PM" : " AM");

}
