var size = 0;
var placement = 'point';

var style_LocalidadesRurales_45 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "9.1px \'Open Sans\', sans-serif";
    var labelFill = "#ff3232";
    var bufferColor = "#fafafa";
    var bufferWidth = 0.7;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NOMGEO") !== null && resolution > 0 && resolution < 3) {
        labelText = String(feature.get("NOMGEO"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 3.9999999999999996 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(199,199,199,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(222,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
