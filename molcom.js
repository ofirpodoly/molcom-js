// Goal: calculate the center of mass of a molecule
//
// The center of mass is defined as the average values of each coordinate, and
// can be stored in a 3D array: let com = [0, 0, 0]
//
// For coordinate x, sum values of x for each atom and then divide by the
// number of atoms. Do the same for y and z and you get the center of mass.

// Changes the content of the result element.
function displayOnPage(content) {
    let resultField = document.getElementById("result");
    resultField.innerText = content;
}
// Downloads data from a website.
// Request is asynchronous: browser keeps waiting until all data is fetched
// and then it triggers the callback function
function downloadMolecule(code) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // callback function here
        let result = calculateCenterOfMass(this.responseText);
        displayOnPage(result);
    }
  };
  let url = "https://files.rcsb.org/view/" + code + ".pdb";
  xhttp.open("GET", url, true);
  xhttp.send();
}

// attached to HTML button
function run() {
    let inputbox = document.getElementById("input-text");
    let pdbcode = inputbox.value;

    downloadMolecule(pdbcode);
}

function calculateCenterOfMass(pdbfile) {
  let array = pdbfile.split("\n");
  let x_array = [];
  let y_array = [];
  let z_array = [];

  for (let counter=0; counter <= array.length; counter += 1) {
    if (typeof(array[counter]) != "undefined" &&
    array[counter].startsWith("ATOM")) {
      x_array.push(array[counter].slice(30, 38))
      y_array.push(array[counter].slice(38, 46))
      z_array.push(array[counter].slice(46, 54))
    }
  }
  let final_x = "X:" + xyz_avg(x_array)
  let final_y = "Y:" + xyz_avg(y_array)
  let final_z = "Z:" + xyz_avg(z_array)

  return final_x + ", " + final_y + ", " + final_z
}
function xyz_avg(array) {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    let newnumber = Number(array[i])
    total += newnumber;
  }
  let av = total / array.length
  return av
}