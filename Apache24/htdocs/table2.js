
//Bowler Table//


let dropdown2 = document.getElementById('bowler');
dropdown2.length = 0;

let bowlerOption = document.createElement('option');
bowlerOption.text = 'Bowler Name';

dropdown2.add(bowlerOption);
dropdown2.selectedIndex = 0;

const url2 = 'http://127.0.0.1:5762/getallbowler';

const request2 = new XMLHttpRequest();
request2.open('GET', url2, true);

request2.onload = function() {
  if (request2.status === 200) {
    const data = JSON.parse(request2.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].bowler;
      option.value = data[i].sr_no;
      dropdown2.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

request2.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url2);
};

request2.send(); 




function bowling() { 
  document.getElementById('p2').innerHTML = "";
  selectElement2 = document.querySelector('#bowler'); 
            
  output2 = selectElement2.value; 

  let para2 = document.getElementById('p2');
  para2.length = 0;
  
  const urls2 = 'http://127.0.0.1:5762/getbowlerdetails?sr_no='+output2;
  
  const requests2 = new XMLHttpRequest();
  requests2.open('GET', urls2, true);
  while(bowling.firstchild){
    bowling.removeChild(bowling.firstchild)
  }
  
  requests2.onload = function() {
    if (requests2.status === 200) {
      const data = JSON.parse(requests2.responseText);
      let option;
      for (let i = 0; i < data.length; i++) {
        var p =document.createElement("th");
        p.innerHTML = ("Bowler");
        para2.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].bowler;
        para2.appendChild(p);
        var p =document.createElement("tr");
        para2.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Innings");
        para2.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].innings;
        para2.appendChild(p);
        var p =document.createElement("tr");
        para2.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Balls");
        para2.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].balls;
        para2.appendChild(p);
        var p =document.createElement("tr");
        para2.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Overs");
        para2.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].overs;
        para2.appendChild(p);
        var p =document.createElement("tr");
        para2.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Runs");
        para2.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].runs;
        para2.appendChild(p);
        var p =document.createElement("tr");
        para2.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Wickets");
        para2.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].wickets;
        para2.appendChild(p);
        var p =document.createElement("tr");
        para2.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Maiden");
        para2.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].maiden;
        para2.appendChild(p);
        var p =document.createElement("tr");
        para2.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Average");
        para2.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].average;
        para2.appendChild(p);
        var p =document.createElement("tr");
        para2.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Economy");
        para2.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].economy;
        para2.appendChild(p);
        var p =document.createElement("tr");
        para2.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Strike Rate");
        para2.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].strike_rate;
        para2.appendChild(p);
        var p =document.createElement("tr");
        para2.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("4W Haul");
        para2.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].foW_haul;
        para2.appendChild(p);
        var p =document.createElement("tr");
        para2.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("5W Haul");
        para2.appendChild(p);
        var p = document.createElement("td");
        p.innerHTML = data[i].fiW_haul;
        para2.appendChild(p);
      }
     } else {
      // Reached the server, but it returned an error
    }  
     
  }
  
  requests2.onerror = function() {
    console.error('An error occurred fetching the JSON from ' + urls2);
  };
  
  requests2.send();  
} 