var wms_layers = [];


        var lyr_CartoPositron_0 = new ol.layer.Tile({
            'title': 'Carto Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Hogaresconjefaturafemenina_2 = new ol.format.GeoJSON();
var features_Hogaresconjefaturafemenina_2 = format_Hogaresconjefaturafemenina_2.readFeatures(json_Hogaresconjefaturafemenina_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hogaresconjefaturafemenina_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hogaresconjefaturafemenina_2.addFeatures(features_Hogaresconjefaturafemenina_2);
var lyr_Hogaresconjefaturafemenina_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hogaresconjefaturafemenina_2, 
                style: style_Hogaresconjefaturafemenina_2,
                popuplayertitle: "Hogares con jefatura femenina",
                interactive: true,
    title: 'Hogares con jefatura femenina<br />\
    <img src="styles/legend/Hogaresconjefaturafemenina_2_0.png" /> 0 - 5<br />\
    <img src="styles/legend/Hogaresconjefaturafemenina_2_1.png" /> 5 - 17<br />\
    <img src="styles/legend/Hogaresconjefaturafemenina_2_2.png" /> 17 - 43<br />\
    <img src="styles/legend/Hogaresconjefaturafemenina_2_3.png" /> 43 - 136<br />\
    <img src="styles/legend/Hogaresconjefaturafemenina_2_4.png" /> 136 - 321<br />'
        });
var format_InstanciasparalasMujeres_3 = new ol.format.GeoJSON();
var features_InstanciasparalasMujeres_3 = format_InstanciasparalasMujeres_3.readFeatures(json_InstanciasparalasMujeres_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InstanciasparalasMujeres_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstanciasparalasMujeres_3.addFeatures(features_InstanciasparalasMujeres_3);
var lyr_InstanciasparalasMujeres_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InstanciasparalasMujeres_3, 
                style: style_InstanciasparalasMujeres_3,
                popuplayertitle: "Instancias para las Mujeres",
                interactive: true,
                title: '<img src="styles/legend/InstanciasparalasMujeres_3.png" /> Instancias para las Mujeres'
            });
var format_Viviendashabitadasconhacinamiento_4 = new ol.format.GeoJSON();
var features_Viviendashabitadasconhacinamiento_4 = format_Viviendashabitadasconhacinamiento_4.readFeatures(json_Viviendashabitadasconhacinamiento_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viviendashabitadasconhacinamiento_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viviendashabitadasconhacinamiento_4.addFeatures(features_Viviendashabitadasconhacinamiento_4);
var lyr_Viviendashabitadasconhacinamiento_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Viviendashabitadasconhacinamiento_4, 
                style: style_Viviendashabitadasconhacinamiento_4,
                popuplayertitle: "Viviendas habitadas con hacinamiento",
                interactive: true,
    title: 'Viviendas habitadas con hacinamiento<br />\
    <img src="styles/legend/Viviendashabitadasconhacinamiento_4_0.png" /> 0.9 - 9<br />\
    <img src="styles/legend/Viviendashabitadasconhacinamiento_4_1.png" /> 9 - 18<br />\
    <img src="styles/legend/Viviendashabitadasconhacinamiento_4_2.png" /> 18 - 27<br />\
    <img src="styles/legend/Viviendashabitadasconhacinamiento_4_3.png" /> 27 - 37<br />\
    <img src="styles/legend/Viviendashabitadasconhacinamiento_4_4.png" /> 37 - 52<br />'
        });
var format_Poblacinde15aosomssineducacinbsica_5 = new ol.format.GeoJSON();
var features_Poblacinde15aosomssineducacinbsica_5 = format_Poblacinde15aosomssineducacinbsica_5.readFeatures(json_Poblacinde15aosomssineducacinbsica_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacinde15aosomssineducacinbsica_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacinde15aosomssineducacinbsica_5.addFeatures(features_Poblacinde15aosomssineducacinbsica_5);
var lyr_Poblacinde15aosomssineducacinbsica_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poblacinde15aosomssineducacinbsica_5, 
                style: style_Poblacinde15aosomssineducacinbsica_5,
                popuplayertitle: "Población de 15 años o más sin educación básica",
                interactive: true,
    title: 'Población de 15 años o más sin educación básica<br />\
    <img src="styles/legend/Poblacinde15aosomssineducacinbsica_5_0.png" /> 2 - 10<br />\
    <img src="styles/legend/Poblacinde15aosomssineducacinbsica_5_1.png" /> 10 - 18<br />\
    <img src="styles/legend/Poblacinde15aosomssineducacinbsica_5_2.png" /> 18 - 27<br />\
    <img src="styles/legend/Poblacinde15aosomssineducacinbsica_5_3.png" /> 27 - 40<br />\
    <img src="styles/legend/Poblacinde15aosomssineducacinbsica_5_4.png" /> 40 - 62<br />'
        });
var format_GradodeMarginacion2020porColonia_6 = new ol.format.GeoJSON();
var features_GradodeMarginacion2020porColonia_6 = format_GradodeMarginacion2020porColonia_6.readFeatures(json_GradodeMarginacion2020porColonia_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GradodeMarginacion2020porColonia_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GradodeMarginacion2020porColonia_6.addFeatures(features_GradodeMarginacion2020porColonia_6);
var lyr_GradodeMarginacion2020porColonia_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GradodeMarginacion2020porColonia_6, 
                style: style_GradodeMarginacion2020porColonia_6,
                popuplayertitle: "Grado de Marginacion 2020 por Colonia",
                interactive: true,
    title: 'Grado de Marginacion 2020 por Colonia<br />\
    <img src="styles/legend/GradodeMarginacion2020porColonia_6_0.png" /> Muy bajo<br />\
    <img src="styles/legend/GradodeMarginacion2020porColonia_6_1.png" /> Bajo<br />\
    <img src="styles/legend/GradodeMarginacion2020porColonia_6_2.png" /> Medio<br />\
    <img src="styles/legend/GradodeMarginacion2020porColonia_6_3.png" /> Alto<br />\
    <img src="styles/legend/GradodeMarginacion2020porColonia_6_4.png" /> Muy alto<br />'
        });
var format_PoblacinquehablaalgunalenguaIndgena_7 = new ol.format.GeoJSON();
var features_PoblacinquehablaalgunalenguaIndgena_7 = format_PoblacinquehablaalgunalenguaIndgena_7.readFeatures(json_PoblacinquehablaalgunalenguaIndgena_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinquehablaalgunalenguaIndgena_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinquehablaalgunalenguaIndgena_7.addFeatures(features_PoblacinquehablaalgunalenguaIndgena_7);
var lyr_PoblacinquehablaalgunalenguaIndgena_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinquehablaalgunalenguaIndgena_7, 
                style: style_PoblacinquehablaalgunalenguaIndgena_7,
                popuplayertitle: "Población que habla alguna lengua Indígena",
                interactive: true,
    title: 'Población que habla alguna lengua Indígena<br />\
    <img src="styles/legend/PoblacinquehablaalgunalenguaIndgena_7_0.png" /> 0 - 9<br />\
    <img src="styles/legend/PoblacinquehablaalgunalenguaIndgena_7_1.png" /> 9 - 33<br />\
    <img src="styles/legend/PoblacinquehablaalgunalenguaIndgena_7_2.png" /> 33 - 69<br />\
    <img src="styles/legend/PoblacinquehablaalgunalenguaIndgena_7_3.png" /> 69 - 142<br />\
    <img src="styles/legend/PoblacinquehablaalgunalenguaIndgena_7_4.png" /> 142 - 204<br />'
        });
var format_AreasNaturalesProtegidas_8 = new ol.format.GeoJSON();
var features_AreasNaturalesProtegidas_8 = format_AreasNaturalesProtegidas_8.readFeatures(json_AreasNaturalesProtegidas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreasNaturalesProtegidas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasNaturalesProtegidas_8.addFeatures(features_AreasNaturalesProtegidas_8);
var lyr_AreasNaturalesProtegidas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreasNaturalesProtegidas_8, 
                style: style_AreasNaturalesProtegidas_8,
                popuplayertitle: "Areas Naturales Protegidas",
                interactive: true,
    title: 'Areas Naturales Protegidas<br />\
    <img src="styles/legend/AreasNaturalesProtegidas_8_0.png" /> Ciénegas del Lerma<br />\
    <img src="styles/legend/AreasNaturalesProtegidas_8_1.png" /> Corredor Biológico Chichinautzin<br />\
    <img src="styles/legend/AreasNaturalesProtegidas_8_2.png" /> Desierto de los Leones<br />\
    <img src="styles/legend/AreasNaturalesProtegidas_8_3.png" /> Insurgente Miguel Hidalgo y Costilla<br />\
    <img src="styles/legend/AreasNaturalesProtegidas_8_4.png" /> Lagunas de Zempoala<br />\
    <img src="styles/legend/AreasNaturalesProtegidas_8_5.png" /> Nevado de Toluca<br />\
    <img src="styles/legend/AreasNaturalesProtegidas_8_6.png" /> Z.P.F.T.C.C.<br />'
        });
var format_ZonificacinreasNaturalesProtegidas_9 = new ol.format.GeoJSON();
var features_ZonificacinreasNaturalesProtegidas_9 = format_ZonificacinreasNaturalesProtegidas_9.readFeatures(json_ZonificacinreasNaturalesProtegidas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonificacinreasNaturalesProtegidas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonificacinreasNaturalesProtegidas_9.addFeatures(features_ZonificacinreasNaturalesProtegidas_9);
var lyr_ZonificacinreasNaturalesProtegidas_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonificacinreasNaturalesProtegidas_9, 
                style: style_ZonificacinreasNaturalesProtegidas_9,
                popuplayertitle: "Zonificación Áreas Naturales Protegidas",
                interactive: true,
    title: 'Zonificación Áreas Naturales Protegidas<br />\
    <img src="styles/legend/ZonificacinreasNaturalesProtegidas_9_0.png" /> CORREDOR BIOLOGICO CHICHINAUTZIN<br />\
    <img src="styles/legend/ZonificacinreasNaturalesProtegidas_9_1.png" /> NEVADO DE TOLUCA<br />'
        });
var format_CuerposdeAgua_10 = new ol.format.GeoJSON();
var features_CuerposdeAgua_10 = format_CuerposdeAgua_10.readFeatures(json_CuerposdeAgua_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuerposdeAgua_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuerposdeAgua_10.addFeatures(features_CuerposdeAgua_10);
var lyr_CuerposdeAgua_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CuerposdeAgua_10, 
                style: style_CuerposdeAgua_10,
                popuplayertitle: "Cuerpos de Agua",
                interactive: true,
                title: '<img src="styles/legend/CuerposdeAgua_10.png" /> Cuerpos de Agua'
            });
var format_SolidosSuspendidosTotales_11 = new ol.format.GeoJSON();
var features_SolidosSuspendidosTotales_11 = format_SolidosSuspendidosTotales_11.readFeatures(json_SolidosSuspendidosTotales_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolidosSuspendidosTotales_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolidosSuspendidosTotales_11.addFeatures(features_SolidosSuspendidosTotales_11);
var lyr_SolidosSuspendidosTotales_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SolidosSuspendidosTotales_11, 
                style: style_SolidosSuspendidosTotales_11,
                popuplayertitle: "Solidos Suspendidos Totales",
                interactive: true,
                title: '<img src="styles/legend/SolidosSuspendidosTotales_11.png" /> Solidos Suspendidos Totales'
            });
var format_CalidaddelAguaSuperficial2022_12 = new ol.format.GeoJSON();
var features_CalidaddelAguaSuperficial2022_12 = format_CalidaddelAguaSuperficial2022_12.readFeatures(json_CalidaddelAguaSuperficial2022_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CalidaddelAguaSuperficial2022_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CalidaddelAguaSuperficial2022_12.addFeatures(features_CalidaddelAguaSuperficial2022_12);
var lyr_CalidaddelAguaSuperficial2022_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CalidaddelAguaSuperficial2022_12, 
                style: style_CalidaddelAguaSuperficial2022_12,
                popuplayertitle: "Calidad del Agua Superficial (2022)",
                interactive: true,
                title: '<img src="styles/legend/CalidaddelAguaSuperficial2022_12.png" /> Calidad del Agua Superficial (2022)'
            });
var format_ColiformesFecales_13 = new ol.format.GeoJSON();
var features_ColiformesFecales_13 = format_ColiformesFecales_13.readFeatures(json_ColiformesFecales_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ColiformesFecales_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ColiformesFecales_13.addFeatures(features_ColiformesFecales_13);
var lyr_ColiformesFecales_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ColiformesFecales_13, 
                style: style_ColiformesFecales_13,
                popuplayertitle: "Coliformes Fecales",
                interactive: true,
                title: '<img src="styles/legend/ColiformesFecales_13.png" /> Coliformes Fecales'
            });
var format_ToxicidaddelAgua_14 = new ol.format.GeoJSON();
var features_ToxicidaddelAgua_14 = format_ToxicidaddelAgua_14.readFeatures(json_ToxicidaddelAgua_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ToxicidaddelAgua_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ToxicidaddelAgua_14.addFeatures(features_ToxicidaddelAgua_14);
var lyr_ToxicidaddelAgua_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ToxicidaddelAgua_14, 
                style: style_ToxicidaddelAgua_14,
                popuplayertitle: "Toxicidad del Agua",
                interactive: true,
                title: '<img src="styles/legend/ToxicidaddelAgua_14.png" /> Toxicidad del Agua'
            });
var format_PozosdeAguaPotable_15 = new ol.format.GeoJSON();
var features_PozosdeAguaPotable_15 = format_PozosdeAguaPotable_15.readFeatures(json_PozosdeAguaPotable_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PozosdeAguaPotable_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PozosdeAguaPotable_15.addFeatures(features_PozosdeAguaPotable_15);
var lyr_PozosdeAguaPotable_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PozosdeAguaPotable_15, 
                style: style_PozosdeAguaPotable_15,
                popuplayertitle: "Pozos de Agua Potable",
                interactive: true,
                title: '<img src="styles/legend/PozosdeAguaPotable_15.png" /> Pozos de Agua Potable'
            });
var format_PuntosdeextraccindeAguaPotables_16 = new ol.format.GeoJSON();
var features_PuntosdeextraccindeAguaPotables_16 = format_PuntosdeextraccindeAguaPotables_16.readFeatures(json_PuntosdeextraccindeAguaPotables_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosdeextraccindeAguaPotables_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosdeextraccindeAguaPotables_16.addFeatures(features_PuntosdeextraccindeAguaPotables_16);
var lyr_PuntosdeextraccindeAguaPotables_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuntosdeextraccindeAguaPotables_16, 
                style: style_PuntosdeextraccindeAguaPotables_16,
                popuplayertitle: "Puntos de extracción de Agua Potables",
                interactive: true,
                title: '<img src="styles/legend/PuntosdeextraccindeAguaPotables_16.png" /> Puntos de extracción de Agua Potables'
            });
var format_PlantasdeTratamientodeAguasResiduales_17 = new ol.format.GeoJSON();
var features_PlantasdeTratamientodeAguasResiduales_17 = format_PlantasdeTratamientodeAguasResiduales_17.readFeatures(json_PlantasdeTratamientodeAguasResiduales_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantasdeTratamientodeAguasResiduales_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantasdeTratamientodeAguasResiduales_17.addFeatures(features_PlantasdeTratamientodeAguasResiduales_17);
var lyr_PlantasdeTratamientodeAguasResiduales_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PlantasdeTratamientodeAguasResiduales_17, 
                style: style_PlantasdeTratamientodeAguasResiduales_17,
                popuplayertitle: "Plantas de Tratamiento de Aguas Residuales",
                interactive: true,
                title: '<img src="styles/legend/PlantasdeTratamientodeAguasResiduales_17.png" /> Plantas de Tratamiento de Aguas Residuales'
            });
var format_ContaminacinporResiduosSolidosUrbanos_18 = new ol.format.GeoJSON();
var features_ContaminacinporResiduosSolidosUrbanos_18 = format_ContaminacinporResiduosSolidosUrbanos_18.readFeatures(json_ContaminacinporResiduosSolidosUrbanos_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContaminacinporResiduosSolidosUrbanos_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContaminacinporResiduosSolidosUrbanos_18.addFeatures(features_ContaminacinporResiduosSolidosUrbanos_18);
var lyr_ContaminacinporResiduosSolidosUrbanos_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContaminacinporResiduosSolidosUrbanos_18, 
                style: style_ContaminacinporResiduosSolidosUrbanos_18,
                popuplayertitle: "Contaminación por Residuos Solidos Urbanos",
                interactive: true,
                title: '<img src="styles/legend/ContaminacinporResiduosSolidosUrbanos_18.png" /> Contaminación por Residuos Solidos Urbanos'
            });
var format_SitiosContaminados_19 = new ol.format.GeoJSON();
var features_SitiosContaminados_19 = format_SitiosContaminados_19.readFeatures(json_SitiosContaminados_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiosContaminados_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiosContaminados_19.addFeatures(features_SitiosContaminados_19);
var lyr_SitiosContaminados_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SitiosContaminados_19, 
                style: style_SitiosContaminados_19,
                popuplayertitle: "Sitios Contaminados",
                interactive: true,
                title: '<img src="styles/legend/SitiosContaminados_19.png" /> Sitios Contaminados'
            });
var format_MunicipiosconAtlasdeRiesgoActualizados_20 = new ol.format.GeoJSON();
var features_MunicipiosconAtlasdeRiesgoActualizados_20 = format_MunicipiosconAtlasdeRiesgoActualizados_20.readFeatures(json_MunicipiosconAtlasdeRiesgoActualizados_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosconAtlasdeRiesgoActualizados_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosconAtlasdeRiesgoActualizados_20.addFeatures(features_MunicipiosconAtlasdeRiesgoActualizados_20);
var lyr_MunicipiosconAtlasdeRiesgoActualizados_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosconAtlasdeRiesgoActualizados_20, 
                style: style_MunicipiosconAtlasdeRiesgoActualizados_20,
                popuplayertitle: "Municipios con Atlas de Riesgo Actualizados",
                interactive: true,
    title: 'Municipios con Atlas de Riesgo Actualizados<br />\
    <img src="styles/legend/MunicipiosconAtlasdeRiesgoActualizados_20_0.png" /> Vigente<br />\
    <img src="styles/legend/MunicipiosconAtlasdeRiesgoActualizados_20_1.png" /> 2016<br />\
    <img src="styles/legend/MunicipiosconAtlasdeRiesgoActualizados_20_2.png" /> 2013<br />'
        });
var format_GaserasyGasolinerias_21 = new ol.format.GeoJSON();
var features_GaserasyGasolinerias_21 = format_GaserasyGasolinerias_21.readFeatures(json_GaserasyGasolinerias_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GaserasyGasolinerias_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GaserasyGasolinerias_21.addFeatures(features_GaserasyGasolinerias_21);
var lyr_GaserasyGasolinerias_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GaserasyGasolinerias_21, 
                style: style_GaserasyGasolinerias_21,
                popuplayertitle: "Gaseras y Gasolinerias",
                interactive: true,
    title: 'Gaseras y Gasolinerias<br />\
    <img src="styles/legend/GaserasyGasolinerias_21_0.png" /> Gasera<br />\
    <img src="styles/legend/GaserasyGasolinerias_21_1.png" /> Gasolinera<br />'
        });
var format_IndustriasconManejodeSustanciasQumicas_22 = new ol.format.GeoJSON();
var features_IndustriasconManejodeSustanciasQumicas_22 = format_IndustriasconManejodeSustanciasQumicas_22.readFeatures(json_IndustriasconManejodeSustanciasQumicas_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndustriasconManejodeSustanciasQumicas_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndustriasconManejodeSustanciasQumicas_22.addFeatures(features_IndustriasconManejodeSustanciasQumicas_22);
var lyr_IndustriasconManejodeSustanciasQumicas_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndustriasconManejodeSustanciasQumicas_22, 
                style: style_IndustriasconManejodeSustanciasQumicas_22,
                popuplayertitle: "Industrias con Manejo de Sustancias Químicas",
                interactive: true,
                title: '<img src="styles/legend/IndustriasconManejodeSustanciasQumicas_22.png" /> Industrias con Manejo de Sustancias Químicas'
            });
var format_IncendiosForestales_23 = new ol.format.GeoJSON();
var features_IncendiosForestales_23 = format_IncendiosForestales_23.readFeatures(json_IncendiosForestales_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IncendiosForestales_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IncendiosForestales_23.addFeatures(features_IncendiosForestales_23);
var lyr_IncendiosForestales_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IncendiosForestales_23, 
                style: style_IncendiosForestales_23,
                popuplayertitle: "Incendios Forestales",
                interactive: true,
                title: '<img src="styles/legend/IncendiosForestales_23.png" /> Incendios Forestales'
            });
var format_Polvorines_24 = new ol.format.GeoJSON();
var features_Polvorines_24 = format_Polvorines_24.readFeatures(json_Polvorines_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polvorines_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polvorines_24.addFeatures(features_Polvorines_24);
var lyr_Polvorines_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Polvorines_24, 
                style: style_Polvorines_24,
                popuplayertitle: "Polvorines",
                interactive: true,
                title: '<img src="styles/legend/Polvorines_24.png" /> Polvorines'
            });
var format_Puntoscriticosdeinundacin_25 = new ol.format.GeoJSON();
var features_Puntoscriticosdeinundacin_25 = format_Puntoscriticosdeinundacin_25.readFeatures(json_Puntoscriticosdeinundacin_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntoscriticosdeinundacin_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntoscriticosdeinundacin_25.addFeatures(features_Puntoscriticosdeinundacin_25);
var lyr_Puntoscriticosdeinundacin_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntoscriticosdeinundacin_25, 
                style: style_Puntoscriticosdeinundacin_25,
                popuplayertitle: "Puntos criticos de inundación",
                interactive: true,
                title: '<img src="styles/legend/Puntoscriticosdeinundacin_25.png" /> Puntos criticos de inundación'
            });
var format_PuntoscriticosdeRiesgos_26 = new ol.format.GeoJSON();
var features_PuntoscriticosdeRiesgos_26 = format_PuntoscriticosdeRiesgos_26.readFeatures(json_PuntoscriticosdeRiesgos_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntoscriticosdeRiesgos_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntoscriticosdeRiesgos_26.addFeatures(features_PuntoscriticosdeRiesgos_26);
var lyr_PuntoscriticosdeRiesgos_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuntoscriticosdeRiesgos_26, 
                style: style_PuntoscriticosdeRiesgos_26,
                popuplayertitle: "Puntos criticos de Riesgos",
                interactive: true,
                title: '<img src="styles/legend/PuntoscriticosdeRiesgos_26.png" /> Puntos criticos de Riesgos'
            });
var format_NcleosAgrariosCertificados_27 = new ol.format.GeoJSON();
var features_NcleosAgrariosCertificados_27 = format_NcleosAgrariosCertificados_27.readFeatures(json_NcleosAgrariosCertificados_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NcleosAgrariosCertificados_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NcleosAgrariosCertificados_27.addFeatures(features_NcleosAgrariosCertificados_27);
var lyr_NcleosAgrariosCertificados_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NcleosAgrariosCertificados_27, 
                style: style_NcleosAgrariosCertificados_27,
                popuplayertitle: "Núcleos Agrarios Certificados",
                interactive: true,
                title: '<img src="styles/legend/NcleosAgrariosCertificados_27.png" /> Núcleos Agrarios Certificados'
            });
var format_Tierradeusocomn_28 = new ol.format.GeoJSON();
var features_Tierradeusocomn_28 = format_Tierradeusocomn_28.readFeatures(json_Tierradeusocomn_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tierradeusocomn_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tierradeusocomn_28.addFeatures(features_Tierradeusocomn_28);
var lyr_Tierradeusocomn_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tierradeusocomn_28, 
                style: style_Tierradeusocomn_28,
                popuplayertitle: "Tierra de uso común",
                interactive: true,
                title: '<img src="styles/legend/Tierradeusocomn_28.png" /> Tierra de uso común'
            });
var format_ZonasdeTierrasParceladas_29 = new ol.format.GeoJSON();
var features_ZonasdeTierrasParceladas_29 = format_ZonasdeTierrasParceladas_29.readFeatures(json_ZonasdeTierrasParceladas_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasdeTierrasParceladas_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasdeTierrasParceladas_29.addFeatures(features_ZonasdeTierrasParceladas_29);
var lyr_ZonasdeTierrasParceladas_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonasdeTierrasParceladas_29, 
                style: style_ZonasdeTierrasParceladas_29,
                popuplayertitle: "Zonas de Tierras Parceladas",
                interactive: true,
                title: '<img src="styles/legend/ZonasdeTierrasParceladas_29.png" /> Zonas de Tierras Parceladas'
            });
var format_ZonadeAsentamientoHumano_30 = new ol.format.GeoJSON();
var features_ZonadeAsentamientoHumano_30 = format_ZonadeAsentamientoHumano_30.readFeatures(json_ZonadeAsentamientoHumano_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonadeAsentamientoHumano_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonadeAsentamientoHumano_30.addFeatures(features_ZonadeAsentamientoHumano_30);
var lyr_ZonadeAsentamientoHumano_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonadeAsentamientoHumano_30, 
                style: style_ZonadeAsentamientoHumano_30,
                popuplayertitle: "Zona de Asentamiento Humano",
                interactive: true,
                title: '<img src="styles/legend/ZonadeAsentamientoHumano_30.png" /> Zona de Asentamiento Humano'
            });
var format_PlanesdeDesarrolloUrbano_31 = new ol.format.GeoJSON();
var features_PlanesdeDesarrolloUrbano_31 = format_PlanesdeDesarrolloUrbano_31.readFeatures(json_PlanesdeDesarrolloUrbano_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanesdeDesarrolloUrbano_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanesdeDesarrolloUrbano_31.addFeatures(features_PlanesdeDesarrolloUrbano_31);
var lyr_PlanesdeDesarrolloUrbano_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PlanesdeDesarrolloUrbano_31, 
                style: style_PlanesdeDesarrolloUrbano_31,
                popuplayertitle: "Planes de Desarrollo Urbano",
                interactive: true,
    title: 'Planes de Desarrollo Urbano<br />\
    <img src="styles/legend/PlanesdeDesarrolloUrbano_31_0.png" /> 2004<br />\
    <img src="styles/legend/PlanesdeDesarrolloUrbano_31_1.png" /> 2005<br />\
    <img src="styles/legend/PlanesdeDesarrolloUrbano_31_2.png" /> 2011<br />\
    <img src="styles/legend/PlanesdeDesarrolloUrbano_31_3.png" /> 2015<br />\
    <img src="styles/legend/PlanesdeDesarrolloUrbano_31_4.png" /> 2018<br />\
    <img src="styles/legend/PlanesdeDesarrolloUrbano_31_5.png" /> 2020<br />\
    <img src="styles/legend/PlanesdeDesarrolloUrbano_31_6.png" /> 2022<br />'
        });
var format_PermetrosdeContencinUrbana2018_32 = new ol.format.GeoJSON();
var features_PermetrosdeContencinUrbana2018_32 = format_PermetrosdeContencinUrbana2018_32.readFeatures(json_PermetrosdeContencinUrbana2018_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermetrosdeContencinUrbana2018_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermetrosdeContencinUrbana2018_32.addFeatures(features_PermetrosdeContencinUrbana2018_32);
var lyr_PermetrosdeContencinUrbana2018_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PermetrosdeContencinUrbana2018_32, 
                style: style_PermetrosdeContencinUrbana2018_32,
                popuplayertitle: "Perímetros de Contención Urbana 2018",
                interactive: true,
    title: 'Perímetros de Contención Urbana 2018<br />\
    <img src="styles/legend/PermetrosdeContencinUrbana2018_32_0.png" /> U1 - Zona Urbana Consolidada<br />\
    <img src="styles/legend/PermetrosdeContencinUrbana2018_32_1.png" /> U2 - Servicios e Infraestructura<br />\
    <img src="styles/legend/PermetrosdeContencinUrbana2018_32_2.png" /> U3 -Zonas de Crecimiento Contiguas<br />'
        });
var format_PerimetrosdeContencinUrbana2016_33 = new ol.format.GeoJSON();
var features_PerimetrosdeContencinUrbana2016_33 = format_PerimetrosdeContencinUrbana2016_33.readFeatures(json_PerimetrosdeContencinUrbana2016_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetrosdeContencinUrbana2016_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetrosdeContencinUrbana2016_33.addFeatures(features_PerimetrosdeContencinUrbana2016_33);
var lyr_PerimetrosdeContencinUrbana2016_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PerimetrosdeContencinUrbana2016_33, 
                style: style_PerimetrosdeContencinUrbana2016_33,
                popuplayertitle: "Perimetros de Contención Urbana 2016",
                interactive: true,
    title: 'Perimetros de Contención Urbana 2016<br />\
    <img src="styles/legend/PerimetrosdeContencinUrbana2016_33_0.png" /> U1 - Zona Urbana Consolidada<br />\
    <img src="styles/legend/PerimetrosdeContencinUrbana2016_33_1.png" /> U2 - Servicios e Infraestructura<br />\
    <img src="styles/legend/PerimetrosdeContencinUrbana2016_33_2.png" /> U3 -Zonas de Crecimiento Contiguas<br />'
        });
var format_AreaNoUrbanizable2022_34 = new ol.format.GeoJSON();
var features_AreaNoUrbanizable2022_34 = format_AreaNoUrbanizable2022_34.readFeatures(json_AreaNoUrbanizable2022_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaNoUrbanizable2022_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaNoUrbanizable2022_34.addFeatures(features_AreaNoUrbanizable2022_34);
var lyr_AreaNoUrbanizable2022_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaNoUrbanizable2022_34, 
                style: style_AreaNoUrbanizable2022_34,
                popuplayertitle: "Area No Urbanizable 2022",
                interactive: true,
    title: 'Area No Urbanizable 2022<br />\
    <img src="styles/legend/AreaNoUrbanizable2022_34_0.png" /> Area No Urbanizable<br />\
    <img src="styles/legend/AreaNoUrbanizable2022_34_1.png" /> Area Natural Protegida<br />'
        });
var format_AreaUrbanizable2022_35 = new ol.format.GeoJSON();
var features_AreaUrbanizable2022_35 = format_AreaUrbanizable2022_35.readFeatures(json_AreaUrbanizable2022_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaUrbanizable2022_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaUrbanizable2022_35.addFeatures(features_AreaUrbanizable2022_35);
var lyr_AreaUrbanizable2022_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaUrbanizable2022_35, 
                style: style_AreaUrbanizable2022_35,
                popuplayertitle: "Area Urbanizable 2022",
                interactive: true,
                title: '<img src="styles/legend/AreaUrbanizable2022_35.png" /> Area Urbanizable 2022'
            });
var format_AreaUrbana2022_36 = new ol.format.GeoJSON();
var features_AreaUrbana2022_36 = format_AreaUrbana2022_36.readFeatures(json_AreaUrbana2022_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaUrbana2022_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaUrbana2022_36.addFeatures(features_AreaUrbana2022_36);
var lyr_AreaUrbana2022_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaUrbana2022_36, 
                style: style_AreaUrbana2022_36,
                popuplayertitle: "Area Urbana 2022",
                interactive: true,
                title: '<img src="styles/legend/AreaUrbana2022_36.png" /> Area Urbana 2022'
            });
var format_ZonasIndustriales2022_37 = new ol.format.GeoJSON();
var features_ZonasIndustriales2022_37 = format_ZonasIndustriales2022_37.readFeatures(json_ZonasIndustriales2022_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasIndustriales2022_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasIndustriales2022_37.addFeatures(features_ZonasIndustriales2022_37);
var lyr_ZonasIndustriales2022_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonasIndustriales2022_37, 
                style: style_ZonasIndustriales2022_37,
                popuplayertitle: "Zonas Industriales 2022",
                interactive: true,
                title: '<img src="styles/legend/ZonasIndustriales2022_37.png" /> Zonas Industriales 2022'
            });
var format_PorcentajedeVivendasConUnSoloCuarto_38 = new ol.format.GeoJSON();
var features_PorcentajedeVivendasConUnSoloCuarto_38 = format_PorcentajedeVivendasConUnSoloCuarto_38.readFeatures(json_PorcentajedeVivendasConUnSoloCuarto_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PorcentajedeVivendasConUnSoloCuarto_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PorcentajedeVivendasConUnSoloCuarto_38.addFeatures(features_PorcentajedeVivendasConUnSoloCuarto_38);
var lyr_PorcentajedeVivendasConUnSoloCuarto_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PorcentajedeVivendasConUnSoloCuarto_38, 
                style: style_PorcentajedeVivendasConUnSoloCuarto_38,
                popuplayertitle: "Porcentaje de Vivendas Con Un Solo Cuarto",
                interactive: true,
    title: 'Porcentaje de Vivendas Con Un Solo Cuarto<br />\
    <img src="styles/legend/PorcentajedeVivendasConUnSoloCuarto_38_0.png" /> 0 - 3.2<br />\
    <img src="styles/legend/PorcentajedeVivendasConUnSoloCuarto_38_1.png" /> 3.2 - 10<br />\
    <img src="styles/legend/PorcentajedeVivendasConUnSoloCuarto_38_2.png" /> 10 - 17.9<br />\
    <img src="styles/legend/PorcentajedeVivendasConUnSoloCuarto_38_3.png" /> 17.9 - 34.5<br />\
    <img src="styles/legend/PorcentajedeVivendasConUnSoloCuarto_38_4.png" /> 34.5 - 60<br />'
        });
var format_PorcentajedeVivendasConPisodeTierra_39 = new ol.format.GeoJSON();
var features_PorcentajedeVivendasConPisodeTierra_39 = format_PorcentajedeVivendasConPisodeTierra_39.readFeatures(json_PorcentajedeVivendasConPisodeTierra_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PorcentajedeVivendasConPisodeTierra_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PorcentajedeVivendasConPisodeTierra_39.addFeatures(features_PorcentajedeVivendasConPisodeTierra_39);
var lyr_PorcentajedeVivendasConPisodeTierra_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PorcentajedeVivendasConPisodeTierra_39, 
                style: style_PorcentajedeVivendasConPisodeTierra_39,
                popuplayertitle: "Porcentaje de Vivendas Con Piso de Tierra",
                interactive: true,
    title: 'Porcentaje de Vivendas Con Piso de Tierra<br />\
    <img src="styles/legend/PorcentajedeVivendasConPisodeTierra_39_0.png" /> 0 - 4.8<br />\
    <img src="styles/legend/PorcentajedeVivendasConPisodeTierra_39_1.png" /> 4.8 - 15.4<br />\
    <img src="styles/legend/PorcentajedeVivendasConPisodeTierra_39_2.png" /> 15.4 - 29.6<br />\
    <img src="styles/legend/PorcentajedeVivendasConPisodeTierra_39_3.png" /> 29.6 - 53.3<br />\
    <img src="styles/legend/PorcentajedeVivendasConPisodeTierra_39_4.png" /> 53.3 - 100<br />'
        });
var format_Viviendashabitadassinaguaentubada_40 = new ol.format.GeoJSON();
var features_Viviendashabitadassinaguaentubada_40 = format_Viviendashabitadassinaguaentubada_40.readFeatures(json_Viviendashabitadassinaguaentubada_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viviendashabitadassinaguaentubada_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viviendashabitadassinaguaentubada_40.addFeatures(features_Viviendashabitadassinaguaentubada_40);
var lyr_Viviendashabitadassinaguaentubada_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Viviendashabitadassinaguaentubada_40, 
                style: style_Viviendashabitadassinaguaentubada_40,
                popuplayertitle: "Viviendas  habitadas sin agua entubada",
                interactive: true,
    title: 'Viviendas  habitadas sin agua entubada<br />\
    <img src="styles/legend/Viviendashabitadassinaguaentubada_40_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Viviendashabitadassinaguaentubada_40_1.png" /> 0 - 6<br />\
    <img src="styles/legend/Viviendashabitadassinaguaentubada_40_2.png" /> 6 - 13<br />\
    <img src="styles/legend/Viviendashabitadassinaguaentubada_40_3.png" /> 13 - 26<br />\
    <img src="styles/legend/Viviendashabitadassinaguaentubada_40_4.png" /> 26 - 59<br />'
        });
var format_Viviendashabitadassindrenaje_41 = new ol.format.GeoJSON();
var features_Viviendashabitadassindrenaje_41 = format_Viviendashabitadassindrenaje_41.readFeatures(json_Viviendashabitadassindrenaje_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viviendashabitadassindrenaje_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viviendashabitadassindrenaje_41.addFeatures(features_Viviendashabitadassindrenaje_41);
var lyr_Viviendashabitadassindrenaje_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Viviendashabitadassindrenaje_41, 
                style: style_Viviendashabitadassindrenaje_41,
                popuplayertitle: "Viviendas  habitadas sin drenaje",
                interactive: true,
    title: 'Viviendas  habitadas sin drenaje<br />\
    <img src="styles/legend/Viviendashabitadassindrenaje_41_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Viviendashabitadassindrenaje_41_1.png" /> 0 - 5<br />\
    <img src="styles/legend/Viviendashabitadassindrenaje_41_2.png" /> 5 - 12<br />\
    <img src="styles/legend/Viviendashabitadassindrenaje_41_3.png" /> 12 - 22<br />\
    <img src="styles/legend/Viviendashabitadassindrenaje_41_4.png" /> 22 - 58<br />'
        });
var format_Viviendasdeshabitadas_42 = new ol.format.GeoJSON();
var features_Viviendasdeshabitadas_42 = format_Viviendasdeshabitadas_42.readFeatures(json_Viviendasdeshabitadas_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viviendasdeshabitadas_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viviendasdeshabitadas_42.addFeatures(features_Viviendasdeshabitadas_42);
var lyr_Viviendasdeshabitadas_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Viviendasdeshabitadas_42, 
                style: style_Viviendasdeshabitadas_42,
                popuplayertitle: "Viviendas  deshabitadas",
                interactive: true,
    title: 'Viviendas  deshabitadas<br />\
    <img src="styles/legend/Viviendasdeshabitadas_42_0.png" /> 0 - 5<br />\
    <img src="styles/legend/Viviendasdeshabitadas_42_1.png" /> 5 - 23<br />\
    <img src="styles/legend/Viviendasdeshabitadas_42_2.png" /> 23 - 68<br />\
    <img src="styles/legend/Viviendasdeshabitadas_42_3.png" /> 68 - 186<br />\
    <img src="styles/legend/Viviendasdeshabitadas_42_4.png" /> 186 - 592<br />'
        });
var format_MunicipiosColindantes_43 = new ol.format.GeoJSON();
var features_MunicipiosColindantes_43 = format_MunicipiosColindantes_43.readFeatures(json_MunicipiosColindantes_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosColindantes_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosColindantes_43.addFeatures(features_MunicipiosColindantes_43);
var lyr_MunicipiosColindantes_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosColindantes_43, 
                style: style_MunicipiosColindantes_43,
                popuplayertitle: "Municipios Colindantes",
                interactive: true,
                title: '<img src="styles/legend/MunicipiosColindantes_43.png" /> Municipios Colindantes'
            });
var format_Colonias2020_44 = new ol.format.GeoJSON();
var features_Colonias2020_44 = format_Colonias2020_44.readFeatures(json_Colonias2020_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonias2020_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonias2020_44.addFeatures(features_Colonias2020_44);
var lyr_Colonias2020_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colonias2020_44, 
                style: style_Colonias2020_44,
                popuplayertitle: "Colonias 2020",
                interactive: true,
                title: '<img src="styles/legend/Colonias2020_44.png" /> Colonias 2020'
            });
var format_LocalidadesRurales_45 = new ol.format.GeoJSON();
var features_LocalidadesRurales_45 = format_LocalidadesRurales_45.readFeatures(json_LocalidadesRurales_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesRurales_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesRurales_45.addFeatures(features_LocalidadesRurales_45);
var lyr_LocalidadesRurales_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesRurales_45, 
                style: style_LocalidadesRurales_45,
                popuplayertitle: "Localidades Rurales",
                interactive: true,
                title: '<img src="styles/legend/LocalidadesRurales_45.png" /> Localidades Rurales'
            });
var format_MunicipiosMetropolitanos_46 = new ol.format.GeoJSON();
var features_MunicipiosMetropolitanos_46 = format_MunicipiosMetropolitanos_46.readFeatures(json_MunicipiosMetropolitanos_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosMetropolitanos_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosMetropolitanos_46.addFeatures(features_MunicipiosMetropolitanos_46);
var lyr_MunicipiosMetropolitanos_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosMetropolitanos_46, 
                style: style_MunicipiosMetropolitanos_46,
                popuplayertitle: "Municipios Metropolitanos",
                interactive: true,
                title: '<img src="styles/legend/MunicipiosMetropolitanos_46.png" /> Municipios Metropolitanos'
            });
var format_EstadodeMexico_47 = new ol.format.GeoJSON();
var features_EstadodeMexico_47 = format_EstadodeMexico_47.readFeatures(json_EstadodeMexico_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstadodeMexico_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstadodeMexico_47.addFeatures(features_EstadodeMexico_47);
var lyr_EstadodeMexico_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstadodeMexico_47, 
                style: style_EstadodeMexico_47,
                popuplayertitle: "Estado de Mexico",
                interactive: true,
                title: '<img src="styles/legend/EstadodeMexico_47.png" /> Estado de Mexico'
            });
var group_CapasBase = new ol.layer.Group({
                                layers: [lyr_MunicipiosColindantes_43,lyr_Colonias2020_44,lyr_LocalidadesRurales_45,lyr_MunicipiosMetropolitanos_46,lyr_EstadodeMexico_47,],
                                title: "Capas Base"});
var group_Vivienda = new ol.layer.Group({
                                layers: [lyr_PorcentajedeVivendasConUnSoloCuarto_38,lyr_PorcentajedeVivendasConPisodeTierra_39,lyr_Viviendashabitadassinaguaentubada_40,lyr_Viviendashabitadassindrenaje_41,lyr_Viviendasdeshabitadas_42,],
                                title: "Vivienda"});
var group_DesarrolloUrbano = new ol.layer.Group({
                                layers: [lyr_PlanesdeDesarrolloUrbano_31,lyr_PermetrosdeContencinUrbana2018_32,lyr_PerimetrosdeContencinUrbana2016_33,lyr_AreaNoUrbanizable2022_34,lyr_AreaUrbanizable2022_35,lyr_AreaUrbana2022_36,lyr_ZonasIndustriales2022_37,],
                                title: "Desarrollo Urbano"});
var group_TenenciadelaTierra = new ol.layer.Group({
                                layers: [lyr_NcleosAgrariosCertificados_27,lyr_Tierradeusocomn_28,lyr_ZonasdeTierrasParceladas_29,lyr_ZonadeAsentamientoHumano_30,],
                                title: "Tenencia de la Tierra"});
var group_Riesgos = new ol.layer.Group({
                                layers: [lyr_MunicipiosconAtlasdeRiesgoActualizados_20,lyr_GaserasyGasolinerias_21,lyr_IndustriasconManejodeSustanciasQumicas_22,lyr_IncendiosForestales_23,lyr_Polvorines_24,lyr_Puntoscriticosdeinundacin_25,lyr_PuntoscriticosdeRiesgos_26,],
                                title: "Riesgos"});
var group_ProblemticaAmbiental = new ol.layer.Group({
                                layers: [lyr_ContaminacinporResiduosSolidosUrbanos_18,lyr_SitiosContaminados_19,],
                                title: "Problemática Ambiental"});
var group_CalidaddelAgua = new ol.layer.Group({
                                layers: [lyr_CuerposdeAgua_10,lyr_SolidosSuspendidosTotales_11,lyr_CalidaddelAguaSuperficial2022_12,lyr_ColiformesFecales_13,lyr_ToxicidaddelAgua_14,lyr_PozosdeAguaPotable_15,lyr_PuntosdeextraccindeAguaPotables_16,lyr_PlantasdeTratamientodeAguasResiduales_17,],
                                title: "Calidad del Agua"});
var group_SitiosdeValorNaturalyPatrimonial = new ol.layer.Group({
                                layers: [lyr_AreasNaturalesProtegidas_8,lyr_ZonificacinreasNaturalesProtegidas_9,],
                                title: "Sitios de Valor Natural y Patrimonial"});
var group_GruposVulnerables = new ol.layer.Group({
                                layers: [lyr_Viviendashabitadasconhacinamiento_4,lyr_Poblacinde15aosomssineducacinbsica_5,lyr_GradodeMarginacion2020porColonia_6,lyr_PoblacinquehablaalgunalenguaIndgena_7,],
                                title: "Grupos Vulnerables"});
var group_Genero = new ol.layer.Group({
                                layers: [lyr_Hogaresconjefaturafemenina_2,lyr_InstanciasparalasMujeres_3,],
                                title: "Genero"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_CartoPositron_0,lyr_GoogleSatellite_1,],
                                title: "Mapas Base"});

lyr_CartoPositron_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Hogaresconjefaturafemenina_2.setVisible(true);lyr_InstanciasparalasMujeres_3.setVisible(true);lyr_Viviendashabitadasconhacinamiento_4.setVisible(true);lyr_Poblacinde15aosomssineducacinbsica_5.setVisible(true);lyr_GradodeMarginacion2020porColonia_6.setVisible(true);lyr_PoblacinquehablaalgunalenguaIndgena_7.setVisible(true);lyr_AreasNaturalesProtegidas_8.setVisible(true);lyr_ZonificacinreasNaturalesProtegidas_9.setVisible(true);lyr_CuerposdeAgua_10.setVisible(true);lyr_SolidosSuspendidosTotales_11.setVisible(true);lyr_CalidaddelAguaSuperficial2022_12.setVisible(true);lyr_ColiformesFecales_13.setVisible(true);lyr_ToxicidaddelAgua_14.setVisible(true);lyr_PozosdeAguaPotable_15.setVisible(true);lyr_PuntosdeextraccindeAguaPotables_16.setVisible(true);lyr_PlantasdeTratamientodeAguasResiduales_17.setVisible(true);lyr_ContaminacinporResiduosSolidosUrbanos_18.setVisible(true);lyr_SitiosContaminados_19.setVisible(true);lyr_MunicipiosconAtlasdeRiesgoActualizados_20.setVisible(true);lyr_GaserasyGasolinerias_21.setVisible(true);lyr_IndustriasconManejodeSustanciasQumicas_22.setVisible(true);lyr_IncendiosForestales_23.setVisible(true);lyr_Polvorines_24.setVisible(true);lyr_Puntoscriticosdeinundacin_25.setVisible(true);lyr_PuntoscriticosdeRiesgos_26.setVisible(true);lyr_NcleosAgrariosCertificados_27.setVisible(true);lyr_Tierradeusocomn_28.setVisible(true);lyr_ZonasdeTierrasParceladas_29.setVisible(true);lyr_ZonadeAsentamientoHumano_30.setVisible(true);lyr_PlanesdeDesarrolloUrbano_31.setVisible(true);lyr_PermetrosdeContencinUrbana2018_32.setVisible(true);lyr_PerimetrosdeContencinUrbana2016_33.setVisible(true);lyr_AreaNoUrbanizable2022_34.setVisible(true);lyr_AreaUrbanizable2022_35.setVisible(true);lyr_AreaUrbana2022_36.setVisible(true);lyr_ZonasIndustriales2022_37.setVisible(true);lyr_PorcentajedeVivendasConUnSoloCuarto_38.setVisible(true);lyr_PorcentajedeVivendasConPisodeTierra_39.setVisible(true);lyr_Viviendashabitadassinaguaentubada_40.setVisible(true);lyr_Viviendashabitadassindrenaje_41.setVisible(true);lyr_Viviendasdeshabitadas_42.setVisible(true);lyr_MunicipiosColindantes_43.setVisible(true);lyr_Colonias2020_44.setVisible(true);lyr_LocalidadesRurales_45.setVisible(true);lyr_MunicipiosMetropolitanos_46.setVisible(true);lyr_EstadodeMexico_47.setVisible(true);
var layersList = [group_MapasBase,group_Genero,group_GruposVulnerables,group_SitiosdeValorNaturalyPatrimonial,group_CalidaddelAgua,group_ProblemticaAmbiental,group_Riesgos,group_TenenciadelaTierra,group_DesarrolloUrbano,group_Vivienda,group_CapasBase];
lyr_Hogaresconjefaturafemenina_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'AMBITO': 'AMBITO', 'NOM_MUN': 'NOM_MUN', 'NOM_LOC': 'NOM_LOC', 'POBTOT': 'POBTOT', 'POBFEM': 'POBFEM', 'POBMAS': 'POBMAS', 'HOGJEF_F': 'HOGJEF_F', });
lyr_InstanciasparalasMujeres_3.set('fieldAliases', {'Instancia': 'Instancia', 'Observacio': 'Observacio', });
lyr_Viviendashabitadasconhacinamiento_4.set('fieldAliases', {'COLONIA': 'COLONIA', 'CP': 'CP', 'NOM_ENT': 'NOM_ENT', 'NOM_LOC': 'NOM_LOC', 'POBTOT': 'POBTOT', 'OVHAC': 'OVHAC', });
lyr_Poblacinde15aosomssineducacinbsica_5.set('fieldAliases', {'COLONIA': 'COLONIA', 'CP': 'CP', 'NOM_ENT': 'NOM_ENT', 'NOM_MUN': 'NOM_MUN', 'NOM_LOC': 'NOM_LOC', 'POBTOT': 'POBTOT', 'SBASC': 'SBASC', });
lyr_GradodeMarginacion2020porColonia_6.set('fieldAliases', {'COLONIA': 'COLONIA', 'NOM_ENT': 'NOM_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_MUN': 'NOM_MUN', 'CVE_LOC': 'CVE_LOC', 'NOM_LOC': 'NOM_LOC', 'SUN_2018': 'SUN_2018', 'NOM_SUN': 'NOM_SUN', 'POBTOT': 'POBTOT', 'IM_2020': 'IM_2020', 'GM_2020': 'GM_2020', 'IMN_2020': 'IMN_2020', });
lyr_PoblacinquehablaalgunalenguaIndgena_7.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'AMBITO': 'AMBITO', 'NOM_MUN': 'NOM_MUN', 'NOM_LOC': 'NOM_LOC', 'POBTOT': 'POBTOT', 'P3YM_HLI': 'P3YM_HLI', });
lyr_AreasNaturalesProtegidas_8.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CAT_MANEJO': 'CAT_MANEJO', 'SUPERFICIE': 'SUPERFICIE', 'PRIM_DEC': 'PRIM_DEC', 'SINAP': 'SINAP', });
lyr_ZonificacinreasNaturalesProtegidas_9.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'NOMBRE_ZN': 'NOMBRE_ZN', 'ULT_DECRET': 'ULT_DECRET', 'Hectares': 'Hectares', });
lyr_CuerposdeAgua_10.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'geografico': 'geografico', 'nombre': 'nombre', 'condicion': 'condicion', 'Shape_Area': 'Shape_Area', });
lyr_SolidosSuspendidosTotales_11.set('fieldAliases', {'Sitio': 'Sitio', 'Ubicación': 'Ubicación', 'Cuenca': 'Cuenca', 'Cuenca_hid': 'Cuenca_hid', 'Subtipo': 'Subtipo', 'Solidos_su': 'Solidos_su', 'Nivel_de_s': 'Nivel_de_s', });
lyr_CalidaddelAguaSuperficial2022_12.set('fieldAliases', {'SITIO': 'SITIO', 'MUNICIPIO': 'MUNICIPIO', 'CALIDAD_SS': 'CALIDAD_SS', 'SEMAFORO': 'SEMAFORO', });
lyr_ColiformesFecales_13.set('fieldAliases', {'Sitio': 'Sitio', 'Subtipo': 'Subtipo', 'Nivel_de_c': 'Nivel_de_c', });
lyr_ToxicidaddelAgua_14.set('fieldAliases', {'Sitio': 'Sitio', 'Ubicación': 'Ubicación', 'Cuenca': 'Cuenca', 'Cuenca_hid': 'Cuenca_hid', 'Subtipo': 'Subtipo', 'Toxicidad': 'Toxicidad', 'Nivel_de_t': 'Nivel_de_t', 'Nivel_de_p': 'Nivel_de_p', });
lyr_PozosdeAguaPotable_15.set('fieldAliases', {'ACUIFERO': 'ACUIFERO', 'BRIGADA': 'BRIGADA', 'TITULAR': 'TITULAR', 'TIPOAPROV': 'TIPOAPROV', 'MUPIO': 'MUPIO', 'ELAPROVES': 'ELAPROVES', 'OPERANDO': 'OPERANDO', 'PROFUNDIDA': 'PROFUNDIDA', 'DIAMETRODE': 'DIAMETRODE', 'TIPOBOMBA': 'TIPOBOMBA', 'POTENCIA': 'POTENCIA', });
lyr_PuntosdeextraccindeAguaPotables_16.set('fieldAliases', {'Obra': 'Obra', 'Fecha_de_v': 'Fecha_de_v', 'Calcio_int': 'Calcio_int', 'Magnesio_i': 'Magnesio_i', 'Sodio_inte': 'Sodio_inte', 'Potasio_in': 'Potasio_in', 'Carbonato_': 'Carbonato_', 'RAS': 'RAS', 'Potencial_': 'Potencial_', 'Conductivi': 'Conductivi', 'Sulfato_in': 'Sulfato_in', 'Bicarbonat': 'Bicarbonat', 'Nitrato_in': 'Nitrato_in', 'Trióxido_': 'Trióxido_', 'Cloro_inte': 'Cloro_inte', 'Solidos': 'Solidos', 'Calidad': 'Calidad', 'Agresiva': 'Agresiva', 'Observacie': 'Observacie', 'Temperatur': 'Temperatur', 'Uso': 'Uso', });
lyr_PlantasdeTratamientodeAguasResiduales_17.set('fieldAliases', {'PTARNOMBRE': 'PTARNOMBRE', 'PTARCAPACI': 'PTARCAPACI', 'PTARCAUDAL': 'PTARCAUDAL', 'STATUSID': 'STATUSID', 'STATUSTIPO': 'STATUSTIPO', 'PROCESOPTA': 'PROCESOPTA', 'PROCESOP_1': 'PROCESOP_1', 'PTARCUERPO': 'PTARCUERPO', });
lyr_ContaminacinporResiduosSolidosUrbanos_18.set('fieldAliases', {'NAME': 'NAME', 'Nombre_del': 'Nombre_del', 'Localidad': 'Localidad', 'Riesgo': 'Riesgo', 'Vida_útil': 'Vida_útil', });
lyr_SitiosContaminados_19.set('fieldAliases', {'NAME': 'NAME', 'POB1': 'POB1', 'CLASIFICAC': 'CLASIFICAC', 'DELEGACION': 'DELEGACION', 'AREA_TOTA2': 'AREA_TOTA2', 'SITIO_CONT': 'SITIO_CONT', });
lyr_MunicipiosconAtlasdeRiesgoActualizados_20.set('fieldAliases', {'NOM_MUN': 'NOM_MUN', 'POBTOT_': 'POBTOT_', 'PROGRAMA': 'PROGRAMA', 'AÑO': 'AÑO', });
lyr_GaserasyGasolinerias_21.set('fieldAliases', {'Tipo': 'Tipo', });
lyr_IndustriasconManejodeSustanciasQumicas_22.set('fieldAliases', {'GIRO_INDUS': 'GIRO_INDUS', 'ESTADO': 'ESTADO', 'MUNICIPIO': 'MUNICIPIO', 'SQ_1': 'SQ_1', 'SQ_2': 'SQ_2', });
lyr_IncendiosForestales_23.set('fieldAliases', {'Estado': 'Estado', 'Municipio': 'Municipio', 'Predio': 'Predio', 'Inicio': 'Inicio', 'ANP': 'ANP', 'Total_Sup': 'Total_Sup', });
lyr_Polvorines_24.set('fieldAliases', {'NO_PERMISO': 'NO_PERMISO', 'PROPIETARI': 'PROPIETARI', 'MUNICIPIO': 'MUNICIPIO', 'UBICACIÓN': 'UBICACIÓN', 'A_TERRENO': 'A_TERRENO', });
lyr_Puntoscriticosdeinundacin_25.set('fieldAliases', {'NAME': 'NAME', 'CUERPO_AGU': 'CUERPO_AGU', 'ESTADO': 'ESTADO', 'MUNICIPIO': 'MUNICIPIO', 'LOCALIDAD': 'LOCALIDAD', });
lyr_PuntoscriticosdeRiesgos_26.set('fieldAliases', {'NAME': 'NAME', 'PTO_RIESGO': 'PTO_RIESGO', });
lyr_NcleosAgrariosCertificados_27.set('fieldAliases', {'NOM_NUC': 'NOM_NUC', 'MUNICIPIO': 'MUNICIPIO', 'Clv_Unica': 'Clv_Unica', 'Fol_Matriz': 'Fol_Matriz', 'tipo': 'tipo', 'CLAVE': 'CLAVE', 'EDO_CLV': 'EDO_CLV', 'MUN_CLV': 'MUN_CLV', 'NUC_CLV': 'NUC_CLV', 'PROGRAMA': 'PROGRAMA', 'HA': 'HA', });
lyr_Tierradeusocomn_28.set('fieldAliases', {'TUC_ZONA': 'TUC_ZONA', 'EDO_CLV': 'EDO_CLV', 'MUN_CLV': 'MUN_CLV', 'NUC_CLV': 'NUC_CLV', 'PROGRAMA': 'PROGRAMA', 'HA': 'HA', 'CLASE': 'CLASE', 'USO SUELO': 'USO SUELO', });
lyr_ZonasdeTierrasParceladas_29.set('fieldAliases', {'NUC_POLIGO': 'NUC_POLIGO', 'ZPAR_ZONA': 'ZPAR_ZONA', 'MUN_CLV': 'MUN_CLV', 'NUC_CLV': 'NUC_CLV', 'PROGRAMA': 'PROGRAMA', 'HA': 'HA', });
lyr_ZonadeAsentamientoHumano_30.set('fieldAliases', {'NUC_POLIGO': 'NUC_POLIGO', 'ZAH_ZONA': 'ZAH_ZONA', 'EDO_CLV': 'EDO_CLV', 'MUN_CLV': 'MUN_CLV', 'NUC_CLV': 'NUC_CLV', 'LOC_CLV': 'LOC_CLV', 'PROGRAMA': 'PROGRAMA', 'HA': 'HA', });
lyr_PlanesdeDesarrolloUrbano_31.set('fieldAliases', {'nom_mun': 'nom_mun', 'cveigecem': 'cveigecem', 'cveinegi': 'cveinegi', 'Año': 'Año', });
lyr_PermetrosdeContencinUrbana2018_32.set('fieldAliases', {'CALIF': 'CALIF', 'CALIF_CLAS': 'CALIF_CLAS', 'AÑO': 'AÑO', 'DESCRIP': 'DESCRIP', });
lyr_PerimetrosdeContencinUrbana2016_33.set('fieldAliases', {'Clasificac': 'Clasificac', 'Año_de_ac': 'Año_de_ac', 'Descrip': 'Descrip', });
lyr_AreaNoUrbanizable2022_34.set('fieldAliases', {'descrip': 'descrip', 'areanour22': 'areanour22', 'aro_plan': 'aro_plan', });
lyr_AreaUrbanizable2022_35.set('fieldAliases', {'descrip': 'descrip', 'areaurb22': 'areaurb22', 'aro_plan': 'aro_plan', });
lyr_AreaUrbana2022_36.set('fieldAliases', {'descrip': 'descrip', 'areaur22': 'areaur22', 'aro_plan': 'aro_plan', });
lyr_ZonasIndustriales2022_37.set('fieldAliases', {'NomZona': 'NomZona', 'Uso': 'Uso', 'NomZona_2': 'NomZona_2', 'Uso_2': 'Uso_2', });
lyr_PorcentajedeVivendasConUnSoloCuarto_38.set('fieldAliases', {'cvegeo': 'cvegeo', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'VPH_1CUART': 'VPH_1CUART', });
lyr_PorcentajedeVivendasConPisodeTierra_39.set('fieldAliases', {'cvegeo': 'cvegeo', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'PVPH_PISOD': 'PVPH_PISOD', });
lyr_Viviendashabitadassinaguaentubada_40.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'AMBITO': 'AMBITO', 'NOM_MUN': 'NOM_MUN', 'NOM_LOC': 'NOM_LOC', 'POBTOT': 'POBTOT', 'TVIVPARHAB': 'TVIVPARHAB', 'VPH_AGUAFV': 'VPH_AGUAFV', });
lyr_Viviendashabitadassindrenaje_41.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'AMBITO': 'AMBITO', 'NOM_MUN': 'NOM_MUN', 'NOM_LOC': 'NOM_LOC', 'POBTOT': 'POBTOT', 'TVIVPARHAB': 'TVIVPARHAB', 'VPH_NODREN': 'VPH_NODREN', });
lyr_Viviendasdeshabitadas_42.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'AMBITO': 'AMBITO', 'NOM_MUN': 'NOM_MUN', 'NOM_LOC': 'NOM_LOC', 'POBTOT': 'POBTOT', 'VIVTOT': 'VIVTOT', 'VIVPAR_DES': 'VIVPAR_DES', });
lyr_MunicipiosColindantes_43.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'ENTIDAD': 'ENTIDAD', 'MUNICIPIO': 'MUNICIPIO', });
lyr_Colonias2020_44.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CP': 'CP', });
lyr_LocalidadesRurales_45.set('fieldAliases', {'NOMGEO': 'NOMGEO', 'PLANO': 'PLANO', });
lyr_MunicipiosMetropolitanos_46.set('fieldAliases', {'MUNICIPIO': 'MUNICIPIO', });
lyr_EstadodeMexico_47.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'Entidad': 'Entidad', });
lyr_Hogaresconjefaturafemenina_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'AMBITO': 'TextEdit', 'NOM_MUN': 'TextEdit', 'NOM_LOC': 'TextEdit', 'POBTOT': 'TextEdit', 'POBFEM': 'TextEdit', 'POBMAS': 'TextEdit', 'HOGJEF_F': 'TextEdit', });
lyr_InstanciasparalasMujeres_3.set('fieldImages', {'Instancia': 'TextEdit', 'Observacio': 'TextEdit', });
lyr_Viviendashabitadasconhacinamiento_4.set('fieldImages', {'COLONIA': 'TextEdit', 'CP': 'TextEdit', 'NOM_ENT': 'TextEdit', 'NOM_LOC': 'TextEdit', 'POBTOT': 'TextEdit', 'OVHAC': 'TextEdit', });
lyr_Poblacinde15aosomssineducacinbsica_5.set('fieldImages', {'COLONIA': 'TextEdit', 'CP': 'TextEdit', 'NOM_ENT': 'TextEdit', 'NOM_MUN': 'TextEdit', 'NOM_LOC': 'TextEdit', 'POBTOT': 'TextEdit', 'SBASC': 'TextEdit', });
lyr_GradodeMarginacion2020porColonia_6.set('fieldImages', {'COLONIA': 'TextEdit', 'NOM_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'CVE_LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'SUN_2018': 'TextEdit', 'NOM_SUN': 'TextEdit', 'POBTOT': 'TextEdit', 'IM_2020': 'TextEdit', 'GM_2020': 'TextEdit', 'IMN_2020': 'TextEdit', });
lyr_PoblacinquehablaalgunalenguaIndgena_7.set('fieldImages', {'CVEGEO': 'TextEdit', 'AMBITO': 'TextEdit', 'NOM_MUN': 'TextEdit', 'NOM_LOC': 'TextEdit', 'POBTOT': 'TextEdit', 'P3YM_HLI': 'TextEdit', });
lyr_AreasNaturalesProtegidas_8.set('fieldImages', {'NOMBRE': 'TextEdit', 'CAT_MANEJO': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'PRIM_DEC': 'DateTime', 'SINAP': 'TextEdit', });
lyr_ZonificacinreasNaturalesProtegidas_9.set('fieldImages', {'NOMBRE': 'TextEdit', 'NOMBRE_ZN': 'TextEdit', 'ULT_DECRET': 'DateTime', 'Hectares': 'TextEdit', });
lyr_CuerposdeAgua_10.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'geografico': 'TextEdit', 'nombre': 'TextEdit', 'condicion': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SolidosSuspendidosTotales_11.set('fieldImages', {'Sitio': 'TextEdit', 'Ubicación': 'TextEdit', 'Cuenca': 'TextEdit', 'Cuenca_hid': 'TextEdit', 'Subtipo': 'TextEdit', 'Solidos_su': 'TextEdit', 'Nivel_de_s': 'TextEdit', });
lyr_CalidaddelAguaSuperficial2022_12.set('fieldImages', {'SITIO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CALIDAD_SS': 'TextEdit', 'SEMAFORO': 'TextEdit', });
lyr_ColiformesFecales_13.set('fieldImages', {'Sitio': 'TextEdit', 'Subtipo': 'TextEdit', 'Nivel_de_c': 'TextEdit', });
lyr_ToxicidaddelAgua_14.set('fieldImages', {'Sitio': 'TextEdit', 'Ubicación': 'TextEdit', 'Cuenca': 'TextEdit', 'Cuenca_hid': 'TextEdit', 'Subtipo': 'TextEdit', 'Toxicidad': 'TextEdit', 'Nivel_de_t': 'TextEdit', 'Nivel_de_p': 'TextEdit', });
lyr_PozosdeAguaPotable_15.set('fieldImages', {'ACUIFERO': 'TextEdit', 'BRIGADA': 'TextEdit', 'TITULAR': 'TextEdit', 'TIPOAPROV': 'TextEdit', 'MUPIO': 'TextEdit', 'ELAPROVES': 'TextEdit', 'OPERANDO': 'TextEdit', 'PROFUNDIDA': 'TextEdit', 'DIAMETRODE': 'TextEdit', 'TIPOBOMBA': 'TextEdit', 'POTENCIA': 'TextEdit', });
lyr_PuntosdeextraccindeAguaPotables_16.set('fieldImages', {'Obra': 'TextEdit', 'Fecha_de_v': 'TextEdit', 'Calcio_int': 'Range', 'Magnesio_i': 'TextEdit', 'Sodio_inte': 'TextEdit', 'Potasio_in': 'TextEdit', 'Carbonato_': 'TextEdit', 'RAS': 'TextEdit', 'Potencial_': 'TextEdit', 'Conductivi': 'TextEdit', 'Sulfato_in': 'TextEdit', 'Bicarbonat': 'TextEdit', 'Nitrato_in': 'TextEdit', 'Trióxido_': 'TextEdit', 'Cloro_inte': 'TextEdit', 'Solidos': 'Range', 'Calidad': 'TextEdit', 'Agresiva': 'TextEdit', 'Observacie': 'TextEdit', 'Temperatur': 'Range', 'Uso': 'TextEdit', });
lyr_PlantasdeTratamientodeAguasResiduales_17.set('fieldImages', {'PTARNOMBRE': 'TextEdit', 'PTARCAPACI': 'TextEdit', 'PTARCAUDAL': 'TextEdit', 'STATUSID': 'Range', 'STATUSTIPO': 'TextEdit', 'PROCESOPTA': 'Range', 'PROCESOP_1': 'TextEdit', 'PTARCUERPO': 'TextEdit', });
lyr_ContaminacinporResiduosSolidosUrbanos_18.set('fieldImages', {'NAME': 'TextEdit', 'Nombre_del': 'TextEdit', 'Localidad': 'TextEdit', 'Riesgo': 'TextEdit', 'Vida_útil': 'TextEdit', });
lyr_SitiosContaminados_19.set('fieldImages', {'NAME': 'TextEdit', 'POB1': 'TextEdit', 'CLASIFICAC': 'TextEdit', 'DELEGACION': 'TextEdit', 'AREA_TOTA2': 'TextEdit', 'SITIO_CONT': 'TextEdit', });
lyr_MunicipiosconAtlasdeRiesgoActualizados_20.set('fieldImages', {'NOM_MUN': 'TextEdit', 'POBTOT_': 'TextEdit', 'PROGRAMA': 'TextEdit', 'AÑO': 'Range', });
lyr_GaserasyGasolinerias_21.set('fieldImages', {'Tipo': 'TextEdit', });
lyr_IndustriasconManejodeSustanciasQumicas_22.set('fieldImages', {'GIRO_INDUS': 'TextEdit', 'ESTADO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'SQ_1': 'TextEdit', 'SQ_2': 'TextEdit', });
lyr_IncendiosForestales_23.set('fieldImages', {'Estado': 'TextEdit', 'Municipio': 'TextEdit', 'Predio': 'TextEdit', 'Inicio': 'TextEdit', 'ANP': 'TextEdit', 'Total_Sup': 'TextEdit', });
lyr_Polvorines_24.set('fieldImages', {'NO_PERMISO': 'TextEdit', 'PROPIETARI': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UBICACIÓN': 'TextEdit', 'A_TERRENO': 'TextEdit', });
lyr_Puntoscriticosdeinundacin_25.set('fieldImages', {'NAME': 'TextEdit', 'CUERPO_AGU': 'TextEdit', 'ESTADO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'LOCALIDAD': 'TextEdit', });
lyr_PuntoscriticosdeRiesgos_26.set('fieldImages', {'NAME': 'TextEdit', 'PTO_RIESGO': 'TextEdit', });
lyr_NcleosAgrariosCertificados_27.set('fieldImages', {'NOM_NUC': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'Clv_Unica': 'TextEdit', 'Fol_Matriz': 'TextEdit', 'tipo': 'TextEdit', 'CLAVE': 'TextEdit', 'EDO_CLV': 'Range', 'MUN_CLV': 'Range', 'NUC_CLV': 'Range', 'PROGRAMA': 'TextEdit', 'HA': 'TextEdit', });
lyr_Tierradeusocomn_28.set('fieldImages', {'TUC_ZONA': 'TextEdit', 'EDO_CLV': 'Range', 'MUN_CLV': 'Range', 'NUC_CLV': 'Range', 'PROGRAMA': 'TextEdit', 'HA': 'TextEdit', 'CLASE': 'TextEdit', 'USO SUELO': 'TextEdit', });
lyr_ZonasdeTierrasParceladas_29.set('fieldImages', {'NUC_POLIGO': 'Range', 'ZPAR_ZONA': 'TextEdit', 'MUN_CLV': 'Range', 'NUC_CLV': 'Range', 'PROGRAMA': 'TextEdit', 'HA': 'TextEdit', });
lyr_ZonadeAsentamientoHumano_30.set('fieldImages', {'NUC_POLIGO': 'Range', 'ZAH_ZONA': 'TextEdit', 'EDO_CLV': 'Range', 'MUN_CLV': 'Range', 'NUC_CLV': 'Range', 'LOC_CLV': 'Range', 'PROGRAMA': 'TextEdit', 'HA': 'TextEdit', });
lyr_PlanesdeDesarrolloUrbano_31.set('fieldImages', {'nom_mun': 'TextEdit', 'cveigecem': 'TextEdit', 'cveinegi': 'TextEdit', 'Año': 'Range', });
lyr_PermetrosdeContencinUrbana2018_32.set('fieldImages', {'CALIF': 'TextEdit', 'CALIF_CLAS': 'TextEdit', 'AÑO': 'TextEdit', 'DESCRIP': 'TextEdit', });
lyr_PerimetrosdeContencinUrbana2016_33.set('fieldImages', {'Clasificac': 'TextEdit', 'Año_de_ac': 'Range', 'Descrip': 'TextEdit', });
lyr_AreaNoUrbanizable2022_34.set('fieldImages', {'descrip': 'TextEdit', 'areanour22': 'TextEdit', 'aro_plan': 'TextEdit', });
lyr_AreaUrbanizable2022_35.set('fieldImages', {'descrip': 'TextEdit', 'areaurb22': 'TextEdit', 'aro_plan': 'TextEdit', });
lyr_AreaUrbana2022_36.set('fieldImages', {'descrip': 'TextEdit', 'areaur22': 'TextEdit', 'aro_plan': 'TextEdit', });
lyr_ZonasIndustriales2022_37.set('fieldImages', {'NomZona': 'TextEdit', 'Uso': 'TextEdit', 'NomZona_2': 'TextEdit', 'Uso_2': 'TextEdit', });
lyr_PorcentajedeVivendasConUnSoloCuarto_38.set('fieldImages', {'cvegeo': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'VPH_1CUART': 'TextEdit', });
lyr_PorcentajedeVivendasConPisodeTierra_39.set('fieldImages', {'cvegeo': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'PVPH_PISOD': 'TextEdit', });
lyr_Viviendashabitadassinaguaentubada_40.set('fieldImages', {'CVEGEO': 'TextEdit', 'AMBITO': 'TextEdit', 'NOM_MUN': 'TextEdit', 'NOM_LOC': 'TextEdit', 'POBTOT': 'TextEdit', 'TVIVPARHAB': 'TextEdit', 'VPH_AGUAFV': 'TextEdit', });
lyr_Viviendashabitadassindrenaje_41.set('fieldImages', {'CVEGEO': 'TextEdit', 'AMBITO': 'TextEdit', 'NOM_MUN': 'TextEdit', 'NOM_LOC': 'TextEdit', 'POBTOT': 'TextEdit', 'TVIVPARHAB': 'TextEdit', 'VPH_NODREN': 'TextEdit', });
lyr_Viviendasdeshabitadas_42.set('fieldImages', {'CVEGEO': 'TextEdit', 'AMBITO': 'TextEdit', 'NOM_MUN': 'TextEdit', 'NOM_LOC': 'TextEdit', 'POBTOT': 'TextEdit', 'VIVTOT': 'TextEdit', 'VIVPAR_DES': 'TextEdit', });
lyr_MunicipiosColindantes_43.set('fieldImages', {'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'ENTIDAD': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_Colonias2020_44.set('fieldImages', {'NOMBRE': 'TextEdit', 'CP': 'TextEdit', });
lyr_LocalidadesRurales_45.set('fieldImages', {'NOMGEO': 'TextEdit', 'PLANO': 'TextEdit', });
lyr_MunicipiosMetropolitanos_46.set('fieldImages', {'MUNICIPIO': 'TextEdit', });
lyr_EstadodeMexico_47.set('fieldImages', {'CVE_ENT': 'JsonEdit', 'Entidad': 'JsonEdit', });
lyr_Hogaresconjefaturafemenina_2.set('fieldLabels', {});
lyr_InstanciasparalasMujeres_3.set('fieldLabels', {});
lyr_Viviendashabitadasconhacinamiento_4.set('fieldLabels', {});
lyr_Poblacinde15aosomssineducacinbsica_5.set('fieldLabels', {});
lyr_GradodeMarginacion2020porColonia_6.set('fieldLabels', {});
lyr_PoblacinquehablaalgunalenguaIndgena_7.set('fieldLabels', {});
lyr_AreasNaturalesProtegidas_8.set('fieldLabels', {});
lyr_ZonificacinreasNaturalesProtegidas_9.set('fieldLabels', {});
lyr_CuerposdeAgua_10.set('fieldLabels', {});
lyr_SolidosSuspendidosTotales_11.set('fieldLabels', {});
lyr_CalidaddelAguaSuperficial2022_12.set('fieldLabels', {});
lyr_ColiformesFecales_13.set('fieldLabels', {});
lyr_ToxicidaddelAgua_14.set('fieldLabels', {});
lyr_PozosdeAguaPotable_15.set('fieldLabels', {});
lyr_PuntosdeextraccindeAguaPotables_16.set('fieldLabels', {});
lyr_PlantasdeTratamientodeAguasResiduales_17.set('fieldLabels', {});
lyr_ContaminacinporResiduosSolidosUrbanos_18.set('fieldLabels', {});
lyr_SitiosContaminados_19.set('fieldLabels', {});
lyr_MunicipiosconAtlasdeRiesgoActualizados_20.set('fieldLabels', {});
lyr_GaserasyGasolinerias_21.set('fieldLabels', {});
lyr_IndustriasconManejodeSustanciasQumicas_22.set('fieldLabels', {});
lyr_IncendiosForestales_23.set('fieldLabels', {});
lyr_Polvorines_24.set('fieldLabels', {});
lyr_Puntoscriticosdeinundacin_25.set('fieldLabels', {});
lyr_PuntoscriticosdeRiesgos_26.set('fieldLabels', {});
lyr_NcleosAgrariosCertificados_27.set('fieldLabels', {});
lyr_Tierradeusocomn_28.set('fieldLabels', {});
lyr_ZonasdeTierrasParceladas_29.set('fieldLabels', {});
lyr_ZonadeAsentamientoHumano_30.set('fieldLabels', {});
lyr_PlanesdeDesarrolloUrbano_31.set('fieldLabels', {});
lyr_PermetrosdeContencinUrbana2018_32.set('fieldLabels', {});
lyr_PerimetrosdeContencinUrbana2016_33.set('fieldLabels', {});
lyr_AreaNoUrbanizable2022_34.set('fieldLabels', {});
lyr_AreaUrbanizable2022_35.set('fieldLabels', {});
lyr_AreaUrbana2022_36.set('fieldLabels', {});
lyr_ZonasIndustriales2022_37.set('fieldLabels', {});
lyr_PorcentajedeVivendasConUnSoloCuarto_38.set('fieldLabels', {});
lyr_PorcentajedeVivendasConPisodeTierra_39.set('fieldLabels', {});
lyr_Viviendashabitadassinaguaentubada_40.set('fieldLabels', {});
lyr_Viviendashabitadassindrenaje_41.set('fieldLabels', {});
lyr_Viviendasdeshabitadas_42.set('fieldLabels', {});
lyr_MunicipiosColindantes_43.set('fieldLabels', {});
lyr_Colonias2020_44.set('fieldLabels', {});
lyr_LocalidadesRurales_45.set('fieldLabels', {});
lyr_MunicipiosMetropolitanos_46.set('fieldLabels', {});
lyr_EstadodeMexico_47.set('fieldLabels', {});
lyr_EstadodeMexico_47.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});