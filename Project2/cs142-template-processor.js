function Cs142TemplateProcessor(st) {
  return st
}

Cs142TemplateProcessor.prototype.fillIn = function (dict) {
  var a = this.toString();
  console.log(a);
  if(a.indexOf("month") != -1) {
    a.replace("{{month}}", dict.month);
  }
  if(a.indexOf("day") != -1) {
    a.replace("{{day}}", dict.day);
  }
  if(a.indexOf("year") != -1) {
    a.replace("{{year}}", dict.year);
  }
  return a;
};

var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new Cs142TemplateProcessor(template);

var dictionary = { month: 'July', day: '1', year: '2016'};
var str = dateTemplate.fillIn(dictionary);

console.log(str);