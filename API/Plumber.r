library(plumber)
#* @filter cors
cors <- function(res) {
  res$setHeader("Access-Control-Allow-Origin", "*")
  plumber::forward()
}

#* @apiTitle Simple API

#* Echo provided text
#* @param sr_no The number to be echoed in the response
#* @param season The text to be echoed in the response
#* @get /getbatsmandetails
function(sr_no= 16) {
  sqlqueries <- sprintf("select * from batsman where sr_no= %d",as.numeric(sr_no))
    mydb = dbConnect(MySQL(), user='root', password='1234', dbname='ipl', host='localhost')
    qs = dbSendQuery(mydb, sqlqueries)
    data = fetch(qs, n=-1)
}  





#* @apiTitle Simple API

#* Echo provided text
#* @param sr_no The number to be echoed in the response
#* @param season The text to be echoed in the response
#* @get /getallbatsman
function(){
  sqlqueries <- sprintf("select sr_no,batsman from batsman ")
  #mydb = dbConnect(MySQL(), user='root', password='1234', dbname='ipl', host='localhost')
  qs = dbSendQuery(mydb, sqlqueries)
  data = fetch(qs, n=-1)
} 
 


#* @apiTitle Simple API

#* Echo provided text
#* @param sr_no The number to be echoed in the response
#* @param season The text to be echoed in the response
#* @get /getbowlerdetails
function(sr_no= 16) {
  sqlqueries <- sprintf("select * from bowler where sr_no= %d " ,as.numeric(sr_no))
  #mydb = dbConnect(MySQL(), user='root', password='1234', dbname='ipl', host='localhost')
  qs = dbSendQuery(mydb, sqlqueries)
  data = fetch(qs, n=-1)
} 



#* @apiTitle Simple API

#* Echo provided text
#* @param sr_no The number to be echoed in the response
#* @param season The text to be echoed in the response
#* @get /getallbowler
function(){
  sqlqueries <- sprintf("select sr_no,bowler from bowler ")
  #mydb = dbConnect(MySQL(), user='root', password='1234', dbname='ipl', host='localhost')
  qs = dbSendQuery(mydb, sqlqueries)
  data = fetch(qs, n=-1)
} 

#* @apiTitle Simple API

#* Echo provided text
#* @param sr_no The number to be echoed in the response
#* @param season The text to be echoed in the response
#* @get /getstadiumdetails
function(unique_no= 1, season= 2017) {
  sqlqueries <- sprintf("select * from stadium where unique_no = %d && season = %d" ,as.numeric(unique_no),as.numeric(season))
  #mydb = dbConnect(MySQL(), user='root', password='1234', dbname='ipl', host='localhost')
  qs = dbSendQuery(mydb, sqlqueries)
  data = fetch(qs, n=-1)
} 



#* @apiTitle Simple API

#* Echo provided text
#* @param sr_no The number to be echoed in the response
#* @param season The text to be echoed in the response
#* @get /getallstadium
function(){
  sqlqueries <- sprintf("select unique_no,stadium_name,season from stadium group by stadium_name")
  #mydb = dbConnect(MySQL(), user='root', password='1234', dbname='ipl', host='localhost')
  qs = dbSendQuery(mydb, sqlqueries)
  data = fetch(qs, n=-1)
} 




#* @apiTitle Simple API

#* Echo provided text
#* @param sr_no The number to be echoed in the response
#* @param season The text to be echoed in the response
#* @get /getteamdetails
function(unique_no= 1, season= 2019) {
  sqlqueries <- sprintf("select * from pointstable where unique_no = %d && season = %d" ,as.numeric(unique_no),as.numeric(season))
  #mydb = dbConnect(MySQL(), user='root', password='1234', dbname='ipl', host='localhost')
  qs = dbSendQuery(mydb, sqlqueries)
  data = fetch(qs, n=-1)
} 



#* @apiTitle Simple API

#* Echo provided text
#* @param sr_no The number to be echoed in the response
#* @param season The text to be echoed in the response
#* @get /getallteams
function(){
  sqlqueries <- sprintf("select unique_no,team from pointstable group by team")
  #mydb = dbConnect(MySQL(), user='root', password='1234', dbname='ipl', host='localhost')
  qs = dbSendQuery(mydb, sqlqueries)
  data = fetch(qs, n=-1)
} 



#* @apiTitle Simple API

#* Echo provided text
#* @param sr_no The number to be echoed in the response
#* @param season The text to be echoed in the response
#* @get /getallseason
function(){
  sqlqueries <- sprintf("select distinct season from pointstable")
  #mydb = dbConnect(MySQL(), user='root', password='1234', dbname='ipl', host='localhost')
  qs = dbSendQuery(mydb, sqlqueries)
  data = fetch(qs, n=-1)
} 





#* @apiTitle Simple API

#* Echo provided text
#* @param sr_no The number to be echoed in the response
#* @param season The text to be echoed in the response
#* @get /getseasonbating
function(season= 2019) {
  sqlqueries <- sprintf("select * from seasonbating where season = %d" ,as.numeric(season))
  #mydb = dbConnect(MySQL(), user='root', password='1234', dbname='ipl', host='localhost')
  qs = dbSendQuery(mydb, sqlqueries)
  data = fetch(qs, n=-1)
}  




#* @apiTitle Simple API

#* Echo provided text
#* @param sr_no The number to be echoed in the response
#* @param season The text to be echoed in the response
#* @get /getseasonbowling
function(season= 2019) {
  sqlqueries <- sprintf("select * from seasonbowling where season = %d" ,as.numeric(season))
  #mydb = dbConnect(MySQL(), user='root', password='1234', dbname='ipl', host='localhost')
  qs = dbSendQuery(mydb, sqlqueries)
  data = fetch(qs, n=-1)
} 
