
function loadDoc(recepto_pavadinimas) {
    var obj, dbParam, xmlhttp, receptai, x, txt = "";
    obj = { table: "results" };
    dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            receptai = JSON.parse(this.responseText);
            receptai = receptai.results;
            txt += "<table class=\"table table-dark \">\n" +
                "        <thead>\n" +
                "        <tr class='row'>\n" +
                "            <th scope=\"col\" >#</th>" +
                "            <th scope=\"col\">Pavadinimas</th>\n" +
                "            <th scope=\"col\">Paveiksliukas</th>\n" +
                "            <th scope=\"col\">Ingridientai</th>\n" +
                "        </tr>\n" +
                "        </thead>\n" +
                "        <tbody>\n";
            for (x in receptai) {
                txt += "<tr scope='row'>" +
                    "<th scope='col'>" + x + "</th>";
                txt += "<td scope=\"col\">" + receptai[x].title + "</td>";
                txt += "<td scope=\"col\">"  +"<img src='" + receptai[x].thumbnail + "'>" +"</td>";
                txt += "<td scope=\"col\">" + receptai[x].ingredients + "</td> </tr>";
            }
            txt += "</tbody></table>";
            document.getElementById("Sarasas").innerHTML = txt;
        }
    };
    xmlhttp.open("GET", "http://www.recipepuppy.com/api/?q="+ recepto_pavadinimas, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
}
