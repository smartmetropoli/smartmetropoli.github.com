var size = 0;
var placement = 'point';

var style_Colonias2020_44 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "7.800000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#0032ff";
    var bufferColor = "#ffffff";
    var bufferWidth = 0.6;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NOMBRE") !== null && resolution > 0 && resolution < 5) {
        labelText = String(feature.get("NOMBRE"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(3,138,246,0.8941176470588236)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
