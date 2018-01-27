# Welcome to FXEMPIRE interview!

  In this exercise you'll create a application that calls our server api, 
  gets a json response that represents an EUR/USD market chart.
  You are requested to display this data on a chart,
  And tab control that toggle between chart timestamps.
  
### Task
Your task is to:
- create a component that represents chart.
- create a component that represents tabs with chart timestamps (1 minute, 5 minutes, 1 hour, 1 week)
- Deploy the app so it's publically available for browsing  

### Guidelines:
 Api Url:
 
 ```json
 get https://www.fxempire.com/api/v1/en/markets/eur-usd/chart
 ```

 Api Url With time:
 
 ```json
 get https://www.fxempire.com/api/v1/en/markets/eur-usd/chart?time=MIN_1
 ```

 list of timestamps:
 [MIN_1, MIN_5, HOUR_1, WEEK_1]

### Instructions
- You are welcome to use any text editor or IDE.
- You are welcome to use any 3rd party compoment (under a public lisence)
- You are welcome to use any 3rd party chart library (recharts, highcharts)
- We recommend using facebook's `create-react-app` starter kit - available here: https://github.com/facebookincubator/create-react-app
- clone this repository, create your own branch with the following pattern: `firstname_lastname` and push when you're done
- We recommend deploying your final app to Heroku but any other PaaS provider / static website host can work as well
- Recommended estimate for this exercise 3 hours
 
 #### We thank you for your the time and effort taking this interview and we are here for every question or request.  
 ## Good Luck!
