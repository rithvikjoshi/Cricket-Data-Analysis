let dropdown4 = document.getElementById('team');
dropdown4.length = 0;

let teamOption = document.createElement('option');
teamOption.text = 'Select Team';

dropdown4.add(teamOption);
dropdown4.selectedIndex = 0;

const url4 = 'http://127.0.0.1:5762/getallteams';

const request4 = new XMLHttpRequest();
request4.open('GET', url4, true);

request4.onload = function() {
  if (request4.status === 200) {
    const data = JSON.parse(request4.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].team;
      option.value = data[i].unique_no;
      dropdown4.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

request4.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url4);
};

request4.send(); 


//year//



let dropdown3 = document.getElementById('Season');
dropdown3.length = 0;

let seasonOption = document.createElement('option');
seasonOption.text = 'Season';

dropdown3.add(seasonOption);
dropdown3.selectedIndex = 0;

const url3 = 'http://127.0.0.1:5762/getallseason';

const request3 = new XMLHttpRequest();
request3.open('GET', url3, true);

request3.onload = function() {
  if (request3.status === 200) {
    const data = JSON.parse(request3.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].season;
      option.value = data[i].season;
      dropdown3.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

request3.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url3);
};

request3.send(); 




//table//

function teams() { 
    document.getElementById('p4').innerHTML = "";
    selectElement4 = document.querySelector('#Season'); 
    selectElement5 = document.querySelector('#team'); 
              
    output4 = selectElement4.value; 
    output5 = selectElement5.value; 
  
    let para5 = document.getElementById('p4');
    para5.length = 0;
    
    const urls5 = 'http://127.0.0.1:5762/getteamdetails?unique_no='+output5+'&season='+output4;
    
    const requests5 = new XMLHttpRequest();
    requests5.open('GET', urls5, true);
    while(teams.firstchild){
      teams.removeChild(teams.firstchild)
    }
    
    requests5.onload = function() {
      if (requests5.status === 200) {
        const data = JSON.parse(requests5.responseText);
        let option;
        for (let i = 0; i < data.length; i++) {
          var p =document.createElement("th");
          p.innerHTML = ("Team");
          para5.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].team;
          para5.appendChild(p);
          var p =document.createElement("tr");
          para5.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Played");
          para5.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].pld;
          para5.appendChild(p);
          var p =document.createElement("tr");
          para5.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Won");
          para5.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].won;
          para5.appendChild(p);
          var p =document.createElement("tr");
          para5.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Lost");
          para5.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].lost;
          para5.appendChild(p);
          var p =document.createElement("tr");
          para5.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Ties");
          para5.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].ties;
          para5.appendChild(p);
          var p =document.createElement("tr");
          para5.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("No Result");
          para5.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].no_result;
          para5.appendChild(p);
          var p =document.createElement("tr");
          para5.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("NRR");
          para5.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].net_rr;
          para5.appendChild(p);
          var p =document.createElement("tr");
          para5.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Points");
          para5.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].pts;
          para5.appendChild(p);
          var p =document.createElement("tr");
          para5.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Qualified or not?");
          para5.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].qulafied;
          para5.appendChild(p);
         
        }
       } else {
        // Reached the server, but it returned an error
      }  
       
    }
    
    requests5.onerror = function() {
      console.error('An error occurred fetching the JSON from ' + urls5);
    };
    
    requests5.send();  
  }

