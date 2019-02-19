console.log("Hello");

var cors = require('cors');

var app = express();
app.use(cors());

var request = new XMLHttpRequest();
let url = 'https://weather.api.here.com/weather/1.0/report.json?app_id=InBTTDRthjzdM1ZIeSnb&app_code=6vhVE9l3EKNxuyhwO8TDpQ&product=forecast_astronomy&name=Chicago';
request.open('GET', url, true);

request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
}

request.send();