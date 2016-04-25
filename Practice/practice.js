var obj = { ps: 'str', pn: 1, pa: [1,'two',3,4], po: { sop: 1}};
var s = JSON.stringify(obj);
console.log(JSON.parse(s));
