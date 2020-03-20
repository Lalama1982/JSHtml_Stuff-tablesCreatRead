let mountains = [
  { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
  { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
  { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
  { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
  { name: "Monte Amiata", height: 1738, place: "Siena" }
];

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
generateTableHead(table, data);
generateTable(table, mountains);

// creating an object
var genResultRefined = {
  resp:
    '<font color="red">Error while CRN creation, check logs [Log No: 6292]. Error in detail [E82: Error at "lv_error_flag - 03" / E009: Start Date does not match part of term start and end dates / ]</font>',
  pseq: "6292"
};
//'<font$color="green">CRN Created: 21440</font>';
var val1 = genResultRefined.resp.replace(/[^0-9a-zA-Z\-":<>]/, " ");
console.log(val1);

//var genResultRefined =  {"resp":"<font color=\"green\">CRN Created: 21396</font>","pseq":"4604"
