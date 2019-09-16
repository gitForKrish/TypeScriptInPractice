var temperature;
(function (temperature) {
    temperature[temperature["hot"] = 0] = "hot";
    temperature[temperature["cold"] = 1] = "cold";
})(temperature || (temperature = {}));
;
function enumDemo(temp) {
    switch (temp) {
        case temperature.cold:
            console.log('its freezing...');
            break;
        case temperature.hot:
            console.log('oooh noooo');
            break;
    }
}
enumDemo(temperature.cold);
