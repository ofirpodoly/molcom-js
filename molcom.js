// Goal: calculate the center of mass of a molecule
//
// The center of mass is defined as the average values of each coordinate, and
// can be stored in a 3D array: let com = [0, 0, 0]
//
// For coordinate x, sum values of x for each atom and then divide by the
// number of atoms. Do the same for y and z and you get the center of mass.

// Changes the content of the result element.
function displayOnPage(content) {
    let resultField = document.getElementById('result');
    resultField.innerText = content;
}

// Downloads data from a website.
// Request is asynchronous: browser keeps waiting until all data is fetched
// and then it triggers the callback function
function downloadMolecule(code) {
  
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // callback function here
        displayOnPage(this.responseText);
    }
  };

  let url = "https://files.rcsb.org/view/" + code + ".pdb";
  xhttp.open("GET", url, true);
  xhttp.send();
}

// attached to HTML button
function run() {
    let inputbox = document.getElementById('input-text');
    let pdbcode = inputbox.value;

    downloadMolecule(pdbcode);
}