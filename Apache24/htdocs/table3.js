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



//seasonbatting table//



function seas() { 
  document.getElementById('p3').innerHTML = "";
  selectElement3 = document.querySelector('#Season'); 
            
  output3 = selectElement3.value; 

  let para3 = document.getElementById('p3');
  para3.length = 0;
  
  const urls3 = 'http://127.0.0.1:5762/getseasonbating?season='+output3;
  
  const requests2 = new XMLHttpRequest();
  requests2.open('GET', urls3, true);
  while(seas.firstchild){
    seas.removeChild(seas.firstchild)
  }
  
  requests2.onload = function() {
    if (requests2.status === 200) {
      const data = JSON.parse(requests2.responseText);
      let option;
       {
        var p =document.createElement("tr");
        para3.appendChild(p);

        var p =document.createElement("th");
        p.innerHTML = ("Position");
        para3.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Player");
        para3.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Matches");
        para3.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Innings");
        para3.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Not Out");
        para3.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Runs");
        para3.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Highest");
        para3.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Average");
        para3.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Balls");
        para3.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Strike Rate");
        para3.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Hundreds");
        para3.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Fifties");
        para3.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Fours");
        para3.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Sixes");
        para3.appendChild(p);
      }
        for (let i = 0; i < data.length; i++) {
          var p =document.createElement("tr");
          para3.appendChild(p);  
        
       
        var p = document.createElement("td");
        p.innerHTML = data[i].pos;
        para3.appendChild(p);
        
        
        var p = document.createElement("td");
        p.innerHTML = data[i].player;
        para3.appendChild(p);
        
        
        var p = document.createElement("td");
        p.innerHTML = data[i].matches;
        para3.appendChild(p);
        
        var p = document.createElement("td");
        p.innerHTML = data[i].innings;
        para3.appendChild(p);
      
        
        var p = document.createElement("td");
        p.innerHTML = data[i].not_out;
        para3.appendChild(p);
        
        
        var p = document.createElement("td");
        p.innerHTML = data[i].runs;
        para3.appendChild(p);
        
        
        var p = document.createElement("td");
        p.innerHTML = data[i].highest;
        para3.appendChild(p);
        
        
        var p = document.createElement("td");
        p.innerHTML = data[i].average;
        para3.appendChild(p);
        
        
        var p = document.createElement("td");
        p.innerHTML = data[i].balls;
        para3.appendChild(p);
        
        
        var p = document.createElement("td");
        p.innerHTML = data[i].strike_rate;
        para3.appendChild(p);
        
        
        var p = document.createElement("td");
        p.innerHTML = data[i].hundreds;
        para3.appendChild(p);

        var p = document.createElement("td");
        p.innerHTML = data[i].fifties;
        para3.appendChild(p); 

        var p = document.createElement("td");
        p.innerHTML = data[i].fours;
        para3.appendChild(p);

        var p = document.createElement("td");
        p.innerHTML = data[i].sixes;
        para3.appendChild(p);
      }
     } else {
      // Reached the server, but it returned an error
    }  
     
  }
  
  requests2.onerror = function() {
    console.error('An error occurred fetching the JSON from ' + urls3);
  };
  
  requests2.send();  


  document.getElementById('p4').innerHTML = "";
  selectElement4 = document.querySelector('#Season'); 
            
  output3 = selectElement4.value; 

  let para4 = document.getElementById('p4');
  para4.length = 0;
  
  const urls4 = 'http://127.0.0.1:5762/getseasonbowling?season='+output3;
  
  const requests3 = new XMLHttpRequest();
  requests3.open('GET', urls4, true);
  while(seas.firstchild){
    seas.removeChild(seas.firstchild)
  }
  
  requests3.onload = function() {
    if (requests3.status === 200) {
      const data = JSON.parse(requests3.responseText);
      let option;
       {
        var p =document.createElement("tr");
        para4.appendChild(p);

        var p =document.createElement("th");
        p.innerHTML = ("Position");
        para4.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Player");
        para4.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Matches");
        para4.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Innings");
        para4.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Overs");
        para4.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Runs");
        para4.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Wickets");
        para4.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Average");
        para4.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Economy");
        para4.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Strike Rate");
        para4.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("4W");
        para4.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("5W");
        para4.appendChild(p);
      }
        for (let i = 0; i < data.length; i++) {
          var p =document.createElement("tr");
          para4.appendChild(p);  
        
       
        var p = document.createElement("td");
        p.innerHTML = data[i].pos;
        para4.appendChild(p);
        
        
        var p = document.createElement("td");
        p.innerHTML = data[i].player;
        para4.appendChild(p);
        
        
        var p = document.createElement("td");
        p.innerHTML = data[i].matches;
        para4.appendChild(p);
        
        var p = document.createElement("td");
        p.innerHTML = data[i].innings;
        para4.appendChild(p);
      
        
        var p = document.createElement("td");
        p.innerHTML = data[i].overs;
        para4.appendChild(p);
        
        
        var p = document.createElement("td");
        p.innerHTML = data[i].runs;
        para4.appendChild(p);
        
        
        var p = document.createElement("td");
        p.innerHTML = data[i].wickets;
        para4.appendChild(p);
        
        
        var p = document.createElement("td");
        p.innerHTML = data[i].average;
        para4.appendChild(p);
        
        
        var p = document.createElement("td");
        p.innerHTML = data[i].economy;
        para4.appendChild(p);
        
        
        var p = document.createElement("td");
        p.innerHTML = data[i].strike_rate;
        para4.appendChild(p);
        

        var p = document.createElement("td");
        p.innerHTML = data[i].fow;
        para4.appendChild(p);

        var p = document.createElement("td");
        p.innerHTML = data[i].fiw;
        para4.appendChild(p);
      }
     } else {
      // Reached the server, but it returned an error
    }  
     
  }
  
  requests3.onerror = function() {
    console.error('An error occurred fetching the JSON from ' + urls4);
  };
  
  requests3.send();  
} 





