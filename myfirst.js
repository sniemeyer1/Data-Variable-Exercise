// var http = require('http');

// http
//   .createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello World!');
//   })
//   .listen(8888);

// Code part A here:
let shuttleName = 'Determination';
let shuttleSpeedMPH = 17500;
let marsDistanceKM = 225000000;
let moonDistanceKM = 384400;
let milesPerKm = 0.621;

// Code part B here:
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMPH);
console.log(typeof marsDistanceKM);
console.log(typeof moonDistanceKM);
console.log(typeof milesPerKm);

// Code parts C & D here:
let milesToMars = marsDistanceKM * milesPerKm;
//console.log(milesToMars);
let hoursToMars = milesToMars / shuttleSpeedMPH;
//console.log(hoursToMars)
let daysToMars = hoursToMars / 24;
//console.log(daysToMars);
console.log(shuttleName + ' will take ' + daysToMars + ' days to reach Mars.');

// Code part E here:
let milesToMoon = moonDistanceKM * milesPerKm;
//console.log(milesToMoon);
let hoursToMoon = milesToMoon / shuttleSpeedMPH;
//console.log(hoursToMoon);
let daysToMoon = hoursToMoon / 24;
//console.log(daysToMoon);

console.log(
  shuttleName + ' will take ' + daysToMoon + ' days to reach the moon.'
);
