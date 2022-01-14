let dropdown6 = document.getElementById('stadium');
dropdown6.length = 0;

let stadiumOption = document.createElement('option');
stadiumOption.text = 'Select stadium';

dropdown6.add(stadiumOption);
dropdown6.selectedIndex = 0;

const url6 = 'http://127.0.0.1:5762/getallstadium';

const request6 = new XMLHttpRequest();
request6.open('GET', url6, true);

request6.onload = function() {
  if (request6.status === 200) {
    const data = JSON.parse(request6.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].stadium_name;
      option.value = data[i].unique_no;
      dropdown6.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

request6.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url6);
};

request6.send();  


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

function sta() { 
    document.getElementById('p5').innerHTML = "";
    selectElement6 = document.querySelector('#Season'); 
    selectElement7 = document.querySelector('#stadium'); 
              
    output6 = selectElement6.value; 
    output7 = selectElement7.value; 
  
    let para6 = document.getElementById('p5');
    para6.length = 0;
    
    const urls6 = 'http://127.0.0.1:5762/getstadiumdetails?unique_no='+output7+'&season='+output6;
    console.log(url6);
    
    const requests5 = new XMLHttpRequest();
    requests5.open('GET', urls6, true);
    while(sta.firstchild){
      sta.removeChild(sta.firstchild)
    }
    
    requests5.onload = function() {
      if (requests5.status === 200) {
        const data = JSON.parse(requests5.responseText);
        let option;
        for (let i = 0; i < data.length; i++) {
          var p =document.createElement("th");
          p.innerHTML = ("Stadium");
          para6.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].stadium_name;
          para6.appendChild(p);
          var p =document.createElement("tr");
          para6.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("City");
          para6.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].city;
          para6.appendChild(p);
          var p =document.createElement("tr");
          para6.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Matches Played");
          para6.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].matches_played;
          para6.appendChild(p);
          var p =document.createElement("tr");
          para6.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Won Batting First");
          para6.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].matches_won_bating_1st;
          para6.appendChild(p);
          var p =document.createElement("tr");
          para6.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Won Batting Second");
          para6.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].matches_won_bating_2nd;
          para6.appendChild(p);
          var p =document.createElement("tr");
          para6.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Win Percentage Batting First");
          para6.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].win_percentage_batting_first;
          para6.appendChild(p);
          var p =document.createElement("tr");
          para6.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Win Percentage Batting Second");
          para6.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].win_percentage_batting_second;
          para6.appendChild(p);
          var p =document.createElement("tr");
          para6.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("1st Innings Average Score");
          para6.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].f_innings_avg_score;
          para6.appendChild(p);
          var p =document.createElement("tr");
          para6.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("2nd Innings Average Score");
          para6.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].s_innings_avg_score;
          para6.appendChild(p);
          var p =document.createElement("tr");
          para6.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Significance of Toss");
          para6.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].significance_of_toss;
          para6.appendChild(p);
         
        }
       } else {
        // Reached the server, but it returned an error
      }  
       
    }
    
    requests5.onerror = function() {
      console.error('An error occurred fetching the JSON from ' + urls6);
    };
    
    requests5.send();  
  }