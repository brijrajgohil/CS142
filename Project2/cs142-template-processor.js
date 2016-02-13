function Cs142TemplateProcessor(str) {
  return str
}

Cs142TemplateProcessor.prototype.fillIn = function (dict) {
  var that = this;
  if(that.indexOf("month") != -1) {
    that.replace("{{month}}", dict.month);
  }
  if(that.indexOf("day") != -1) {
    that.replace("{{day}}", dict.day);
  }
  if(that.indexOf("year") != -1) {
    that.replace("{{year}}", dict.year);
  }
  return that;
};

var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new Cs142TemplateProcessor(template);

var dictionary = { month: 'July', day: '1', year: '2016'};
var str = dateTemplate.fillIn(dictionary);

assert(str === 'My favorite month is July but not the day 1 or the year 2016');
