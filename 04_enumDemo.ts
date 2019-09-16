enum temperature {
  hot,
  cold
};
function enumDemo(temp: temperature){
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