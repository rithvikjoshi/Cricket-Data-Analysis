
//Batsman Table//


let dropdown = document.getElementById('batsman');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Batsman Name';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'http://127.0.0.1:5762/getallbatsman';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].batsman;
      option.value = data[i].sr_no;
      dropdown.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send(); 




function batting() { 
  document.getElementById('p1').innerHTML = "";
  selectElement =  
          document.querySelector('#batsman'); 
            
  output = selectElement.value; 

  let para = document.getElementById('p1');
  para.length = 0;
  
  const urls = 'http://127.0.0.1:5762/getbatsmandetails?sr_no='+output;
  
  const requests = new XMLHttpRequest();
  requests.open('GET', urls, true);
  while(batting.firstchild){
    batting.removeChild(batting.firstchild)
  }
  
  requests.onload = function() {
    if (requests.status === 200) {
      const data = JSON.parse(requests.responseText);
      let option;
      for (let i = 0; i < data.length; i++) {
        var p =document.createElement("th");
        p.innerHTML = ("Batsman");
        para.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].batsman;
        para.appendChild(p);
        var p =document.createElement("tr");
        para.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Innings");
        para.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].innings;
        para.appendChild(p);
        var p =document.createElement("tr");
        para.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Runs");
        para.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].runs;
        para.appendChild(p);
        var p =document.createElement("tr");
        para.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Balls");
        para.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].balls;
        para.appendChild(p);
        var p =document.createElement("tr");
        para.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Highest");
        para.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].highest;
        para.appendChild(p);
        var p =document.createElement("tr");
        para.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Average");
        para.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].average;
        para.appendChild(p);
        var p =document.createElement("tr");
        para.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Strike Rate");
        para.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].strike_rate;
        para.appendChild(p);
        var p =document.createElement("tr");
        para.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Fours");
        para.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].fours;
        para.appendChild(p);
        var p =document.createElement("tr");
        para.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Sixes");
        para.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].sixes;
        para.appendChild(p);
        var p =document.createElement("tr");
        para.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Fifties");
        para.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].fifties;
        para.appendChild(p);
        var p =document.createElement("tr");
        para.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Hundreds");
        para.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].hundrends;
        para.appendChild(p);
      }
     } else {
      // Reached the server, but it returned an error
    }  
     
  }
  
  requests.onerror = function() {
    console.error('An error occurred fetching the JSON from ' + urls);
  };
  
  requests.send();  
} 
// function batting() { 
//   document.getElementById('p1').innerHTML = "";
//   selectElement20 =  document.querySelector('#batsman'); 
            
//   output20 = selectElement20.value; 

//   let para = document.getElementById('p1');
//   para.length = 0;
  
//   const urls20 = 'http://127.0.0.1:5762/getbatsmandetails2?sr_no='+output20;
  
//   const requests20 = new XMLHttpRequest();
//   requests20.open('GET', urls20, true);
//   while(batting.firstchild){
//     batting.removeChild(batting.firstchild)
//   }
//   requests20.onerror = function() {
//     console.error('An error occurred fetching the JSON from ' + urls20);
//   };
  
//   requests20.send();  
// } 

