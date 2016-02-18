function Cs142TemplateProcessor(st) {
  Cs142TemplateProcessor.prototype.fillIn = function (dict) {
    if(st.indexOf("month") != -1) {
      st.replace("{{month}}", dict.month);
    }
    if(st.indexOf("day") != -1) {
      st.replace("{{day}}", dict.day);
    }
    if(st.indexOf("year") != -1) {
      st.replace("{{year}}", dict.year);
    }
    return st;
  };
}



var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new Cs142TemplateProcessor(template);

var dictionary = { month: 'July', day: '1', year: '2016'};
var str = dateTemplate.fillIn(dictionary);
//assert(str === 'My favorite month is July but not the day 1 or the year 2016');
console.log(str);
