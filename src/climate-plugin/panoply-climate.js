window.addEventListener("load", function(){

  var cssId = 'myCss';  // you could encode the css path itself to generate id..
  if (!document.getElementById(cssId)) {
      var head  = document.getElementsByTagName('head')[0];
      var link  = document.createElement('link');
      link.id   = cssId;
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://rawcdn.githack.com/wearefuturegov/climate-microsite/d78c427fab2e205af47b68aab0e4701e691ca1b7/src/climate-plugin/climate-styles.css';
      link.media = 'all';
      head.appendChild(link);
  }



  // localStorage.setItem('climateClicked', 'false')
  var clicked = localStorage.getItem('climateClicked');

  var climateElement = '<div id="climate-action">'+
  '  <div class="climate-action__triangle"></div>'+
  ''+
  '  <div class="climate-action__box">'+
  '    <button id="climate-action__close" onClick="removeBox()"></button>'+
  '    <div class="climate-action__box__text">'+
  '      <p class="climate-action__box__text__fact">'+
  '        <span class="start_text">Did you know that</span>'+
  '        <span id="climate-action__box__text__fact_change"></span>'+
  '      </p>'+
  '      <p class="climate-action__box__text__tagline">Nope? Neither did we.</p>'+
  '    </div>'+
  '    <button class="climate-action__button" onclick="clicked()">'+
  '      Our climate action plan'+
  '      <span class="climate-action__chevron-right"></span>'+
  '    </button>'+
  '  </div>'+
  '</div>';


  if (clicked != 'true') {
    document.body.innerHTML += climateElement;
    var fact = document.getElementById("climate-action__box__text__fact_change")
    var factArray = [
      "data centres will soon have a bigger carbon footprint than the entire aviation industry?",
      "the internet uses 10% of the world's electricity?",
      "data traffic is responsible for more than half of digital technology’s global impact",
      "online video generates 306 million tons of CO2 each year",
      "if the global IT industry were a country, only China and the United States would contribute more to climate change",
      "last year, Bitcoin mining was responsible for as much carbon as 1M transatlantic flights"
    ]
    fact.innerHTML = factArray[Math.floor(Math.random() * factArray.length)];
  }
});

function clicked() {
  localStorage.setItem('climateClicked', 'true');
  window.open(
    'https://climate.thepanoply.com/',
    '_blank'
  );
}

function removeBox() {
  localStorage.setItem('climateClicked', 'true');
  document.getElementById("climate-action").remove();
}
