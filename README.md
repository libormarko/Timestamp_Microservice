# API Project: Timestamp Microservice

A full-stack JavaScript web development project. I wrote a blog post about the project, where you can read about programming concepts I used and about app's features and functionality. You can find it on my [medium profile](https://medium.com/@marko.libor/api-project-timestamp-microservice-ef860a504738).

## Technologies used
* Node.JS
* Express framework
* API
* JSON
* React.JS
* JavaScript 
* HTML5
* CSS3

## User stories :

1. The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
2. A date string is valid if can be successfully parsed by `new Date(date_string)`. Note that the unix timestamp needs to be an **integer** (not a string) specifying **milliseconds**. In our test we will use date strings compliant with ISO-8601 (e.g. `"2019-11-20"`) because this will ensure an UTC timestamp.
3. If the date string is **empty** it should be equivalent to trigger `new Date()`, i.e. the service uses the current timestamp.
4. If the date string is **valid** the api returns a JSON having the structure 
`{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2019 17:31:29 GMT"}`.
5. If the date string is **invalid** the api returns a JSON having the structure `{"unix": null, "utc" : "Invalid Date" }`. It is what you get from the date manipulation functions used above.

## Example usage:
* https://timestamp-microservice-lm.glitch.me/api/timestamp/2019-12-11
* https://timestamp-microservice-lm.glitch.me/api/timestamp/1576022400000
* https://timestamp-microservice-lm.glitch.me/api/timestamp/dog

## Example output:
* {"unix":1576022400000, "utc":Wed, 11 Dec 2019 00:00:00 GMT"}
