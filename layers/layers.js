var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HighriskareasclippedSouthernBC_1 = new ol.format.GeoJSON();
var features_HighriskareasclippedSouthernBC_1 = format_HighriskareasclippedSouthernBC_1.readFeatures(json_HighriskareasclippedSouthernBC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HighriskareasclippedSouthernBC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HighriskareasclippedSouthernBC_1.addFeatures(features_HighriskareasclippedSouthernBC_1);
var lyr_HighriskareasclippedSouthernBC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HighriskareasclippedSouthernBC_1, 
                style: style_HighriskareasclippedSouthernBC_1,
                popuplayertitle: "High risk areas clipped Southern BC",
                interactive: true,
    title: 'High risk areas clipped Southern BC<br />\
    <img src="styles/legend/HighriskareasclippedSouthernBC_1_0.png" /> Extreme<br />\
    <img src="styles/legend/HighriskareasclippedSouthernBC_1_1.png" /> High<br />\
    <img src="styles/legend/HighriskareasclippedSouthernBC_1_2.png" /> <br />'
        });
var format_ClippedrangepasturesSouthernBC_2 = new ol.format.GeoJSON();
var features_ClippedrangepasturesSouthernBC_2 = format_ClippedrangepasturesSouthernBC_2.readFeatures(json_ClippedrangepasturesSouthernBC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClippedrangepasturesSouthernBC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClippedrangepasturesSouthernBC_2.addFeatures(features_ClippedrangepasturesSouthernBC_2);
var lyr_ClippedrangepasturesSouthernBC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClippedrangepasturesSouthernBC_2, 
                style: style_ClippedrangepasturesSouthernBC_2,
                popuplayertitle: "Clipped range pastures Southern BC",
                interactive: true,
                title: '<img src="styles/legend/ClippedrangepasturesSouthernBC_2.png" /> Clipped range pastures Southern BC'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_HighriskareasclippedSouthernBC_1.setVisible(true);lyr_ClippedrangepasturesSouthernBC_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_HighriskareasclippedSouthernBC_1,lyr_ClippedrangepasturesSouthernBC_2];
lyr_HighriskareasclippedSouthernBC_1.set('fieldAliases', {'FR_CNTRE': 'FR_CNTRE', 'FIRE_ZONE': 'FIRE_ZONE', 'RISK_CLASS': 'RISK_CLASS', 'PSTRE_NAME': 'PSTRE_NAME', 'FR_THRT_CC': 'FR_THRT_CC', 'Final_Area': 'Final_Area', });
lyr_ClippedrangepasturesSouthernBC_2.set('fieldAliases', {'PSTRE_NAME': 'PSTRE_NAME', });
lyr_HighriskareasclippedSouthernBC_1.set('fieldImages', {'FR_CNTRE': 'TextEdit', 'FIRE_ZONE': 'TextEdit', 'RISK_CLASS': 'Range', 'PSTRE_NAME': 'TextEdit', 'FR_THRT_CC': 'TextEdit', 'Final_Area': 'TextEdit', });
lyr_ClippedrangepasturesSouthernBC_2.set('fieldImages', {'PSTRE_NAME': 'TextEdit', });
lyr_HighriskareasclippedSouthernBC_1.set('fieldLabels', {'FR_CNTRE': 'header label - visible with data', 'FIRE_ZONE': 'header label - visible with data', 'RISK_CLASS': 'header label - visible with data', 'PSTRE_NAME': 'header label - visible with data', 'FR_THRT_CC': 'header label - always visible', 'Final_Area': 'header label - visible with data', });
lyr_ClippedrangepasturesSouthernBC_2.set('fieldLabels', {'PSTRE_NAME': 'header label - visible with data', });
lyr_ClippedrangepasturesSouthernBC_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});