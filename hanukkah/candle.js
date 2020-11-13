var getCandleHTML = (topColor, mainColor, bottomColor) => `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="420">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">

    <style>
    .candle {
      width: 34px;
      position: relative;
      height: 400px;
      align-self: flex-end;
      animation: blink 0.1s infinite;
    }

    .wax {
      position: relative;
      top: 15px;
      width: 100%;
      height: 100%;
      background: ${topColor};
      background: -moz-linear-gradient(top, ${topColor} 0px, ${topColor} 20px, ${mainColor} 50px);
      /* FF3.6-15 */
      background: -webkit-linear-gradient(top, ${topColor} 0px, ${topColor} 20px, ${mainColor} 50px);
      /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, ${topColor} 0px, ${topColor} 20px, ${mainColor} 50px);
      /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="${topColor}", endColorstr="${mainColor}",GradientType=0 );
      /* IE6-9 */
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      box-shadow: inset 0 7px 12px -2px #fbf348, inset 0 9px 57px -3px rgba(255, 0, 0, 0.4), inset 0 -5px 8px 2px black, 0 0 3px 0px ${bottomColor};
    }
  </style>
    <div class="candle">
        <div class="wax"></div>
    </div>
  </div>
  </foreignObject>
</svg>`;

const RED_CANDLE_HTML = getCandleHTML("#ff7373", "#ff3e3e", "#fc0000");
const BLUE_CANDLE_HTML = getCandleHTML("#24d7ff", "#2499ff", "#55b0ff");
const GREEN_CANDLE_HTML = getCandleHTML("#36ff24", "#01dc26", "#00ff00");
const YELLOW_CANDLE_HTML = getCandleHTML("#eaebab", "#f3f71c", "#b7ba07");
const PINK_CANDLE_HTML = getCandleHTML("#ffffff", "#ededed", "#bdbdbd");
// const PINK_CANDLE_HTML = getCandleHTML("#ddabeb", "#df6aff", "#cf24ff");

let RED_CANDLE;
let BLUE_CANDLE;
let YELLOW_CANDLE;
let PINK_CANDLE;
let GREEN_CANDLE;

window.renderCandles = (onLoaded) => {
  const onLoadedWrapper = () => {
    if (
      RED_CANDLE &&
      BLUE_CANDLE &&
      YELLOW_CANDLE &&
      PINK_CANDLE &&
      GREEN_CANDLE
    ) {
      onLoaded([
        RED_CANDLE,
        BLUE_CANDLE,
        YELLOW_CANDLE,
        PINK_CANDLE,
        GREEN_CANDLE,
      ]);
    }
  };
  renderCandle(RED_CANDLE_HTML, (img) => {
    RED_CANDLE = img;
    onLoadedWrapper();
  });

  renderCandle(BLUE_CANDLE_HTML, (img) => {
    BLUE_CANDLE = img;
    onLoadedWrapper();
  });
  renderCandle(GREEN_CANDLE_HTML, (img) => {
    GREEN_CANDLE = img;
    onLoadedWrapper();
  });
  renderCandle(YELLOW_CANDLE_HTML, (img) => {
    YELLOW_CANDLE = img;
    onLoadedWrapper();
  });
  renderCandle(PINK_CANDLE_HTML, (img) => {
    PINK_CANDLE = img;
    onLoadedWrapper();
  });
};

function renderCandle(html, callback) {
  var DOMURL = window.URL || window.webkitURL || window;

  var img = new Image();
  var svg = new Blob([html], {
    type: "image/svg+xml;charset=utf-8",
  });
  var url = DOMURL.createObjectURL(svg);

  img.onload = function () {
    callback(img);
    DOMURL.revokeObjectURL(url);
  };

  img.src = url;
}
