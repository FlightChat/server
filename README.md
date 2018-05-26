# server


An API which connect to flight stats in order to get flight information 

URL : https://flightchat.herokuapp.com/

## Routes 
/users/:id
/users/ 


/flight/ : 

 - airport/ GET list of all airports (~11 seconds request kinda long ...)

- flightinfo/
GET params : 
-companyCode : (ex : AA) 
 -airportCode : (ex : AA) airplane number [my bad on this one ... ] 
 -status : (ex : dep/arr) departure or arrival
 -date : YYYY/MM/DD
 
-/schedule : all flight from one airport to an airport to a date given
 GET params
  - fromAirport :  (ex : CDG)
  - toAirport :  (ex : JFK)
  -date : YYYY/MM/DD
