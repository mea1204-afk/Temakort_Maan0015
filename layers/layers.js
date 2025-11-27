var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Voyagernolabelsretina_2 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_HvidovreStrandbeskyttelse_3 = new ol.format.GeoJSON();
var features_HvidovreStrandbeskyttelse_3 = format_HvidovreStrandbeskyttelse_3.readFeatures(json_HvidovreStrandbeskyttelse_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovreStrandbeskyttelse_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovreStrandbeskyttelse_3.addFeatures(features_HvidovreStrandbeskyttelse_3);
var lyr_HvidovreStrandbeskyttelse_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovreStrandbeskyttelse_3, 
                style: style_HvidovreStrandbeskyttelse_3,
                popuplayertitle: 'Hvidovre Strandbeskyttelse',
                interactive: true,
    title: 'Hvidovre Strandbeskyttelse<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_0.png" /> 1<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_1.png" /> 2<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_2.png" /> 3<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_3.png" /> 4<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_4.png" /> 5<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_5.png" /> 6<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_6.png" /> 7<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_7.png" /> 8<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_8.png" /> 9<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_9.png" /> 10<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_10.png" /> 11<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_11.png" /> 12<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_12.png" /> 13<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_13.png" /> 14<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_14.png" /> 15<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_15.png" /> 16<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_16.png" /> 17<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_17.png" /> 18<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_18.png" /> 19<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_19.png" /> 20<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_20.png" /> 21<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_21.png" /> 22<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_22.png" /> 23<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_23.png" /> 24<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_24.png" /> 25<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_25.png" /> 26<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_26.png" /> 27<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_27.png" /> 28<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_28.png" /> 29<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_29.png" /> 30<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_30.png" /> 31<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_31.png" /> 32<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_32.png" /> 33<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_33.png" /> 34<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_34.png" /> 35<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_35.png" /> 36<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_36.png" /> 37<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_37.png" /> 38<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_38.png" /> 39<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_39.png" /> 40<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_40.png" /> 41<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_41.png" /> 42<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_42.png" /> 43<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_43.png" /> 44<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_44.png" /> 45<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_45.png" /> 46<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_46.png" /> 47<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_47.png" /> 48<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_48.png" /> 49<br />\
    <img src="styles/legend/HvidovreStrandbeskyttelse_3_49.png" /> <br />' });
var format_lokalplaner_4 = new ol.format.GeoJSON();
var features_lokalplaner_4 = format_lokalplaner_4.readFeatures(json_lokalplaner_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokalplaner_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lokalplaner_4.addFeatures(features_lokalplaner_4);
var lyr_lokalplaner_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lokalplaner_4, 
                style: style_lokalplaner_4,
                popuplayertitle: 'lokalplaner',
                interactive: true,
    title: 'lokalplaner<br />\
    <img src="styles/legend/lokalplaner_4_0.png" /> 001<br />\
    <img src="styles/legend/lokalplaner_4_1.png" /> 101-1<br />\
    <img src="styles/legend/lokalplaner_4_2.png" /> 102<br />\
    <img src="styles/legend/lokalplaner_4_3.png" /> 103<br />\
    <img src="styles/legend/lokalplaner_4_4.png" /> 104<br />\
    <img src="styles/legend/lokalplaner_4_5.png" /> 105<br />\
    <img src="styles/legend/lokalplaner_4_6.png" /> 106<br />\
    <img src="styles/legend/lokalplaner_4_7.png" /> 108<br />\
    <img src="styles/legend/lokalplaner_4_8.png" /> 109-1<br />\
    <img src="styles/legend/lokalplaner_4_9.png" /> 112<br />\
    <img src="styles/legend/lokalplaner_4_10.png" /> 115<br />\
    <img src="styles/legend/lokalplaner_4_11.png" /> 116<br />\
    <img src="styles/legend/lokalplaner_4_12.png" /> 118<br />\
    <img src="styles/legend/lokalplaner_4_13.png" /> 119<br />\
    <img src="styles/legend/lokalplaner_4_14.png" /> 120<br />\
    <img src="styles/legend/lokalplaner_4_15.png" /> 121<br />\
    <img src="styles/legend/lokalplaner_4_16.png" /> 122<br />\
    <img src="styles/legend/lokalplaner_4_17.png" /> 124<br />\
    <img src="styles/legend/lokalplaner_4_18.png" /> 126<br />\
    <img src="styles/legend/lokalplaner_4_19.png" /> 127<br />\
    <img src="styles/legend/lokalplaner_4_20.png" /> 128<br />\
    <img src="styles/legend/lokalplaner_4_21.png" /> 131<br />\
    <img src="styles/legend/lokalplaner_4_22.png" /> 132<br />\
    <img src="styles/legend/lokalplaner_4_23.png" /> 133<br />\
    <img src="styles/legend/lokalplaner_4_24.png" /> 134<br />\
    <img src="styles/legend/lokalplaner_4_25.png" /> 135<br />\
    <img src="styles/legend/lokalplaner_4_26.png" /> 137<br />\
    <img src="styles/legend/lokalplaner_4_27.png" /> 139<br />\
    <img src="styles/legend/lokalplaner_4_28.png" /> 140<br />\
    <img src="styles/legend/lokalplaner_4_29.png" /> 141<br />\
    <img src="styles/legend/lokalplaner_4_30.png" /> 142<br />\
    <img src="styles/legend/lokalplaner_4_31.png" /> 143<br />\
    <img src="styles/legend/lokalplaner_4_32.png" /> 144<br />\
    <img src="styles/legend/lokalplaner_4_33.png" /> 147<br />\
    <img src="styles/legend/lokalplaner_4_34.png" /> 148<br />\
    <img src="styles/legend/lokalplaner_4_35.png" /> 149<br />\
    <img src="styles/legend/lokalplaner_4_36.png" /> 150<br />\
    <img src="styles/legend/lokalplaner_4_37.png" /> 151<br />\
    <img src="styles/legend/lokalplaner_4_38.png" /> 152<br />\
    <img src="styles/legend/lokalplaner_4_39.png" /> 154<br />\
    <img src="styles/legend/lokalplaner_4_40.png" /> 202<br />\
    <img src="styles/legend/lokalplaner_4_41.png" /> 203<br />\
    <img src="styles/legend/lokalplaner_4_42.png" /> 206<br />\
    <img src="styles/legend/lokalplaner_4_43.png" /> 207<br />\
    <img src="styles/legend/lokalplaner_4_44.png" /> 208<br />\
    <img src="styles/legend/lokalplaner_4_45.png" /> 209<br />\
    <img src="styles/legend/lokalplaner_4_46.png" /> 210<br />\
    <img src="styles/legend/lokalplaner_4_47.png" /> 211<br />\
    <img src="styles/legend/lokalplaner_4_48.png" /> 216<br />\
    <img src="styles/legend/lokalplaner_4_49.png" /> 220<br />\
    <img src="styles/legend/lokalplaner_4_50.png" /> 221<br />\
    <img src="styles/legend/lokalplaner_4_51.png" /> 225<br />\
    <img src="styles/legend/lokalplaner_4_52.png" /> 226<br />\
    <img src="styles/legend/lokalplaner_4_53.png" /> 228<br />\
    <img src="styles/legend/lokalplaner_4_54.png" /> 229<br />\
    <img src="styles/legend/lokalplaner_4_55.png" /> 230<br />\
    <img src="styles/legend/lokalplaner_4_56.png" /> 231<br />\
    <img src="styles/legend/lokalplaner_4_57.png" /> 232<br />\
    <img src="styles/legend/lokalplaner_4_58.png" /> 233<br />\
    <img src="styles/legend/lokalplaner_4_59.png" /> 234<br />\
    <img src="styles/legend/lokalplaner_4_60.png" /> 236<br />\
    <img src="styles/legend/lokalplaner_4_61.png" /> 237<br />\
    <img src="styles/legend/lokalplaner_4_62.png" /> 238<br />\
    <img src="styles/legend/lokalplaner_4_63.png" /> 239<br />\
    <img src="styles/legend/lokalplaner_4_64.png" /> 240<br />\
    <img src="styles/legend/lokalplaner_4_65.png" /> 241<br />\
    <img src="styles/legend/lokalplaner_4_66.png" /> 301-1<br />\
    <img src="styles/legend/lokalplaner_4_67.png" /> 303<br />\
    <img src="styles/legend/lokalplaner_4_68.png" /> 304<br />\
    <img src="styles/legend/lokalplaner_4_69.png" /> 305<br />\
    <img src="styles/legend/lokalplaner_4_70.png" /> 306<br />\
    <img src="styles/legend/lokalplaner_4_71.png" /> 313<br />\
    <img src="styles/legend/lokalplaner_4_72.png" /> 314<br />\
    <img src="styles/legend/lokalplaner_4_73.png" /> 316<br />\
    <img src="styles/legend/lokalplaner_4_74.png" /> 322<br />\
    <img src="styles/legend/lokalplaner_4_75.png" /> 323<br />\
    <img src="styles/legend/lokalplaner_4_76.png" /> 324<br />\
    <img src="styles/legend/lokalplaner_4_77.png" /> 325<br />\
    <img src="styles/legend/lokalplaner_4_78.png" /> 326<br />\
    <img src="styles/legend/lokalplaner_4_79.png" /> 327<br />\
    <img src="styles/legend/lokalplaner_4_80.png" /> 328<br />\
    <img src="styles/legend/lokalplaner_4_81.png" /> 329<br />\
    <img src="styles/legend/lokalplaner_4_82.png" /> 330<br />\
    <img src="styles/legend/lokalplaner_4_83.png" /> 331<br />\
    <img src="styles/legend/lokalplaner_4_84.png" /> 332<br />\
    <img src="styles/legend/lokalplaner_4_85.png" /> 335<br />\
    <img src="styles/legend/lokalplaner_4_86.png" /> 338<br />\
    <img src="styles/legend/lokalplaner_4_87.png" /> 339<br />\
    <img src="styles/legend/lokalplaner_4_88.png" /> 340<br />\
    <img src="styles/legend/lokalplaner_4_89.png" /> 341<br />\
    <img src="styles/legend/lokalplaner_4_90.png" /> 342<br />\
    <img src="styles/legend/lokalplaner_4_91.png" /> 343<br />\
    <img src="styles/legend/lokalplaner_4_92.png" /> 345<br />\
    <img src="styles/legend/lokalplaner_4_93.png" /> 403-1<br />\
    <img src="styles/legend/lokalplaner_4_94.png" /> 404<br />\
    <img src="styles/legend/lokalplaner_4_95.png" /> 405<br />\
    <img src="styles/legend/lokalplaner_4_96.png" /> 407<br />\
    <img src="styles/legend/lokalplaner_4_97.png" /> 408<br />\
    <img src="styles/legend/lokalplaner_4_98.png" /> 409<br />\
    <img src="styles/legend/lokalplaner_4_99.png" /> 411<br />\
    <img src="styles/legend/lokalplaner_4_100.png" /> 412<br />\
    <img src="styles/legend/lokalplaner_4_101.png" /> 418<br />\
    <img src="styles/legend/lokalplaner_4_102.png" /> 423<br />\
    <img src="styles/legend/lokalplaner_4_103.png" /> 429<br />\
    <img src="styles/legend/lokalplaner_4_104.png" /> 432<br />\
    <img src="styles/legend/lokalplaner_4_105.png" /> 433<br />\
    <img src="styles/legend/lokalplaner_4_106.png" /> 440<br />\
    <img src="styles/legend/lokalplaner_4_107.png" /> 441<br />\
    <img src="styles/legend/lokalplaner_4_108.png" /> 447<br />\
    <img src="styles/legend/lokalplaner_4_109.png" /> 448<br />\
    <img src="styles/legend/lokalplaner_4_110.png" /> 452<br />\
    <img src="styles/legend/lokalplaner_4_111.png" /> 454<br />\
    <img src="styles/legend/lokalplaner_4_112.png" /> 455<br />\
    <img src="styles/legend/lokalplaner_4_113.png" /> 456<br />\
    <img src="styles/legend/lokalplaner_4_114.png" /> 457<br />\
    <img src="styles/legend/lokalplaner_4_115.png" /> 458<br />\
    <img src="styles/legend/lokalplaner_4_116.png" /> 459<br />\
    <img src="styles/legend/lokalplaner_4_117.png" /> 462<br />\
    <img src="styles/legend/lokalplaner_4_118.png" /> 463<br />\
    <img src="styles/legend/lokalplaner_4_119.png" /> 464<br />\
    <img src="styles/legend/lokalplaner_4_120.png" /> 466<br />\
    <img src="styles/legend/lokalplaner_4_121.png" /> 467<br />\
    <img src="styles/legend/lokalplaner_4_122.png" /> 468<br />\
    <img src="styles/legend/lokalplaner_4_123.png" /> 469<br />\
    <img src="styles/legend/lokalplaner_4_124.png" /> 470<br />\
    <img src="styles/legend/lokalplaner_4_125.png" /> 471<br />\
    <img src="styles/legend/lokalplaner_4_126.png" /> 472<br />\
    <img src="styles/legend/lokalplaner_4_127.png" /> 473<br />\
    <img src="styles/legend/lokalplaner_4_128.png" /> 475<br />\
    <img src="styles/legend/lokalplaner_4_129.png" /> 476<br />\
    <img src="styles/legend/lokalplaner_4_130.png" /> 504<br />\
    <img src="styles/legend/lokalplaner_4_131.png" /> 507<br />\
    <img src="styles/legend/lokalplaner_4_132.png" /> 508<br />\
    <img src="styles/legend/lokalplaner_4_133.png" /> 510<br />\
    <img src="styles/legend/lokalplaner_4_134.png" /> 511<br />\
    <img src="styles/legend/lokalplaner_4_135.png" /> 516<br />\
    <img src="styles/legend/lokalplaner_4_136.png" /> 518<br />\
    <img src="styles/legend/lokalplaner_4_137.png" /> 519<br />\
    <img src="styles/legend/lokalplaner_4_138.png" /> A1<br />\
    <img src="styles/legend/lokalplaner_4_139.png" /> A10<br />\
    <img src="styles/legend/lokalplaner_4_140.png" /> A11<br />\
    <img src="styles/legend/lokalplaner_4_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/lokalplaner_4_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/lokalplaner_4_143.png" /> A13<br />\
    <img src="styles/legend/lokalplaner_4_144.png" /> A14<br />\
    <img src="styles/legend/lokalplaner_4_145.png" /> A15<br />\
    <img src="styles/legend/lokalplaner_4_146.png" /> A3<br />\
    <img src="styles/legend/lokalplaner_4_147.png" /> A5<br />\
    <img src="styles/legend/lokalplaner_4_148.png" /> A7<br />\
    <img src="styles/legend/lokalplaner_4_149.png" /> A8<br />\
    <img src="styles/legend/lokalplaner_4_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/lokalplaner_4_151.png" /> B17<br />\
    <img src="styles/legend/lokalplaner_4_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/lokalplaner_4_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/lokalplaner_4_154.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/lokalplaner_4_155.png" /> H10<br />\
    <img src="styles/legend/lokalplaner_4_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/lokalplaner_4_157.png" /> H11<br />\
    <img src="styles/legend/lokalplaner_4_158.png" /> H12<br />\
    <img src="styles/legend/lokalplaner_4_159.png" /> H13<br />\
    <img src="styles/legend/lokalplaner_4_160.png" /> H14<br />\
    <img src="styles/legend/lokalplaner_4_161.png" /> H15<br />\
    <img src="styles/legend/lokalplaner_4_162.png" /> H16<br />\
    <img src="styles/legend/lokalplaner_4_163.png" /> H17<br />\
    <img src="styles/legend/lokalplaner_4_164.png" /> H18<br />\
    <img src="styles/legend/lokalplaner_4_165.png" /> H20<br />\
    <img src="styles/legend/lokalplaner_4_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/lokalplaner_4_167.png" /> H3<br />\
    <img src="styles/legend/lokalplaner_4_168.png" /> H4<br />\
    <img src="styles/legend/lokalplaner_4_169.png" /> H5<br />\
    <img src="styles/legend/lokalplaner_4_170.png" /> H9<br />\
    <img src="styles/legend/lokalplaner_4_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/lokalplaner_4_172.png" /> <br />' });
var format_frededeomrder_5 = new ol.format.GeoJSON();
var features_frededeomrder_5 = format_frededeomrder_5.readFeatures(json_frededeomrder_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrder_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrder_5.addFeatures(features_frededeomrder_5);
var lyr_frededeomrder_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrder_5, 
                style: style_frededeomrder_5,
                popuplayertitle: 'frededeområder',
                interactive: false,
    title: 'frededeområder<br />\
    <img src="styles/legend/frededeomrder_5_0.png" /> Damhuså<br />\
    <img src="styles/legend/frededeomrder_5_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/frededeomrder_5_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/frededeomrder_5_3.png" /> Vestvolden<br />\
    <img src="styles/legend/frededeomrder_5_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/frededeomrder_5_5.png" /> <br />' });
var format_kommuneplan_6 = new ol.format.GeoJSON();
var features_kommuneplan_6 = format_kommuneplan_6.readFeatures(json_kommuneplan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_6.addFeatures(features_kommuneplan_6);
var lyr_kommuneplan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_6, 
                style: style_kommuneplan_6,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_6.png" /> kommuneplan'
            });
var format_Togstationer_7 = new ol.format.GeoJSON();
var features_Togstationer_7 = format_Togstationer_7.readFeatures(json_Togstationer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_7.addFeatures(features_Togstationer_7);
var lyr_Togstationer_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_7, 
                style: style_Togstationer_7,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_7.png" /> Togstationer'
            });
var format_Dagligvarebutikker_8 = new ol.format.GeoJSON();
var features_Dagligvarebutikker_8 = format_Dagligvarebutikker_8.readFeatures(json_Dagligvarebutikker_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dagligvarebutikker_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dagligvarebutikker_8.addFeatures(features_Dagligvarebutikker_8);
var lyr_Dagligvarebutikker_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dagligvarebutikker_8, 
                style: style_Dagligvarebutikker_8,
                popuplayertitle: 'Dagligvarebutikker',
                interactive: true,
                title: '<img src="styles/legend/Dagligvarebutikker_8.png" /> Dagligvarebutikker'
            });
var format_Lge_9 = new ol.format.GeoJSON();
var features_Lge_9 = format_Lge_9.readFeatures(json_Lge_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lge_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lge_9.addFeatures(features_Lge_9);
var lyr_Lge_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lge_9, 
                style: style_Lge_9,
                popuplayertitle: 'Læge',
                interactive: true,
                title: '<img src="styles/legend/Lge_9.png" /> Læge'
            });
var format_Hospital_10 = new ol.format.GeoJSON();
var features_Hospital_10 = format_Hospital_10.readFeatures(json_Hospital_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_10.addFeatures(features_Hospital_10);
var lyr_Hospital_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospital_10, 
                style: style_Hospital_10,
                popuplayertitle: 'Hospital',
                interactive: true,
                title: '<img src="styles/legend/Hospital_10.png" /> Hospital'
            });
var format_Kirker_11 = new ol.format.GeoJSON();
var features_Kirker_11 = format_Kirker_11.readFeatures(json_Kirker_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirker_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirker_11.addFeatures(features_Kirker_11);
var lyr_Kirker_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirker_11, 
                style: style_Kirker_11,
                popuplayertitle: 'Kirker',
                interactive: true,
                title: '<img src="styles/legend/Kirker_11.png" /> Kirker'
            });
var format_BrnehaveVuggestue_12 = new ol.format.GeoJSON();
var features_BrnehaveVuggestue_12 = format_BrnehaveVuggestue_12.readFeatures(json_BrnehaveVuggestue_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BrnehaveVuggestue_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BrnehaveVuggestue_12.addFeatures(features_BrnehaveVuggestue_12);
var lyr_BrnehaveVuggestue_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BrnehaveVuggestue_12, 
                style: style_BrnehaveVuggestue_12,
                popuplayertitle: 'Børnehave/Vuggestue',
                interactive: true,
                title: '<img src="styles/legend/BrnehaveVuggestue_12.png" /> Børnehave/Vuggestue'
            });
var format_Folkeskoler_13 = new ol.format.GeoJSON();
var features_Folkeskoler_13 = format_Folkeskoler_13.readFeatures(json_Folkeskoler_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_13.addFeatures(features_Folkeskoler_13);
var lyr_Folkeskoler_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_13, 
                style: style_Folkeskoler_13,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_13.png" /> Folkeskoler'
            });
var format_SkoleiHvidovre_14 = new ol.format.GeoJSON();
var features_SkoleiHvidovre_14 = format_SkoleiHvidovre_14.readFeatures(json_SkoleiHvidovre_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SkoleiHvidovre_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SkoleiHvidovre_14.addFeatures(features_SkoleiHvidovre_14);
var lyr_SkoleiHvidovre_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SkoleiHvidovre_14, 
                style: style_SkoleiHvidovre_14,
                popuplayertitle: 'Skole i Hvidovre',
                interactive: true,
                title: '<img src="styles/legend/SkoleiHvidovre_14.png" /> Skole i Hvidovre'
            });
var format_Bibliotek_15 = new ol.format.GeoJSON();
var features_Bibliotek_15 = format_Bibliotek_15.readFeatures(json_Bibliotek_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bibliotek_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bibliotek_15.addFeatures(features_Bibliotek_15);
var lyr_Bibliotek_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bibliotek_15, 
                style: style_Bibliotek_15,
                popuplayertitle: 'Bibliotek',
                interactive: true,
                title: '<img src="styles/legend/Bibliotek_15.png" /> Bibliotek'
            });
var format_Pizzarier_16 = new ol.format.GeoJSON();
var features_Pizzarier_16 = format_Pizzarier_16.readFeatures(json_Pizzarier_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pizzarier_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pizzarier_16.addFeatures(features_Pizzarier_16);
var lyr_Pizzarier_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pizzarier_16, 
                style: style_Pizzarier_16,
                popuplayertitle: 'Pizzarier',
                interactive: true,
                title: '<img src="styles/legend/Pizzarier_16.png" /> Pizzarier'
            });
var format_Bibliotek_17 = new ol.format.GeoJSON();
var features_Bibliotek_17 = format_Bibliotek_17.readFeatures(json_Bibliotek_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bibliotek_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bibliotek_17.addFeatures(features_Bibliotek_17);
var lyr_Bibliotek_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bibliotek_17, 
                style: style_Bibliotek_17,
                popuplayertitle: 'Bibliotek',
                interactive: true,
                title: '<img src="styles/legend/Bibliotek_17.png" /> Bibliotek'
            });

lyr_OSMStandard_0.setVisible(false);lyr_OSMStandard_1.setVisible(false);lyr_Voyagernolabelsretina_2.setVisible(true);lyr_HvidovreStrandbeskyttelse_3.setVisible(true);lyr_lokalplaner_4.setVisible(true);lyr_frededeomrder_5.setVisible(true);lyr_kommuneplan_6.setVisible(true);lyr_Togstationer_7.setVisible(true);lyr_Dagligvarebutikker_8.setVisible(true);lyr_Lge_9.setVisible(true);lyr_Hospital_10.setVisible(true);lyr_Kirker_11.setVisible(true);lyr_BrnehaveVuggestue_12.setVisible(true);lyr_Folkeskoler_13.setVisible(true);lyr_SkoleiHvidovre_14.setVisible(true);lyr_Bibliotek_15.setVisible(true);lyr_Pizzarier_16.setVisible(true);lyr_Bibliotek_17.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OSMStandard_1,lyr_Voyagernolabelsretina_2,lyr_HvidovreStrandbeskyttelse_3,lyr_lokalplaner_4,lyr_frededeomrder_5,lyr_kommuneplan_6,lyr_Togstationer_7,lyr_Dagligvarebutikker_8,lyr_Lge_9,lyr_Hospital_10,lyr_Kirker_11,lyr_BrnehaveVuggestue_12,lyr_Folkeskoler_13,lyr_SkoleiHvidovre_14,lyr_Bibliotek_15,lyr_Pizzarier_16,lyr_Bibliotek_17];
lyr_HvidovreStrandbeskyttelse_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_lokalplaner_4.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_frededeomrder_5.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_kommuneplan_6.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Togstationer_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Dagligvarebutikker_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lge_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Hjemmeside': 'Hjemmeside', 'Telefonnummer': 'Telefonnummer', });
lyr_Hospital_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Hjemmeside': 'Hjemmeside', 'Telefonnummer': 'Telefonnummer', 'beskrivelse': 'beskrivelse', });
lyr_Kirker_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Hjemmeside': 'Hjemmeside', 'Telefonnummer': 'Telefonnummer', 'beskrivelse': 'beskrivelse', });
lyr_BrnehaveVuggestue_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Hjemmeside': 'Hjemmeside', 'Telefonnummer': 'Telefonnummer', });
lyr_Folkeskoler_13.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'adresse': 'adresse', 'by': 'by', 'hjemmeside': 'hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SkoleiHvidovre_14.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Bibliotek_15.set('fieldAliases', {'fid': 'fid', 'navn': 'navn', 'adresse': 'adresse', 'by': 'by', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Pizzarier_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bibliotek_17.set('fieldAliases', {'Biblioteks': 'Biblioteks', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_HvidovreStrandbeskyttelse_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_lokalplaner_4.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_frededeomrder_5.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_kommuneplan_6.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Hidden', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'Hidden', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'Hidden', 'datoopdt': 'Hidden', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_Togstationer_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Dagligvarebutikker_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'DateTime', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'TextEdit', });
lyr_Lge_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'TextEdit', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnummer': 'TextEdit', });
lyr_Hospital_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnummer': 'TextEdit', 'beskrivelse': 'TextEdit', });
lyr_Kirker_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'Hjemmeside': 'TextEdit', 'Telefonnummer': 'TextEdit', 'beskrivelse': 'TextEdit', });
lyr_BrnehaveVuggestue_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'Hjemmeside': 'TextEdit', 'Telefonnummer': 'TextEdit', });
lyr_Folkeskoler_13.set('fieldImages', {'fid': '', 'Skolenavn': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SkoleiHvidovre_14.set('fieldImages', {'fid': '', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Bibliotek_15.set('fieldImages', {'fid': '', 'navn': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Pizzarier_16.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'JsonEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Bibliotek_17.set('fieldImages', {'Biblioteks': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_HvidovreStrandbeskyttelse_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_lokalplaner_4.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_frededeomrder_5.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_kommuneplan_6.set('fieldLabels', {'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_Togstationer_7.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Dagligvarebutikker_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'timestamp': 'no label', 'icon': 'no label', });
lyr_Lge_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'altitudeMode': 'no label', 'icon': 'no label', 'Hjemmeside': 'no label', 'Telefonnummer': 'no label', });
lyr_Hospital_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'icon': 'no label', 'Hjemmeside': 'no label', 'Telefonnummer': 'no label', 'beskrivelse': 'no label', });
lyr_Kirker_11.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Hjemmeside': 'no label', 'Telefonnummer': 'no label', 'beskrivelse': 'no label', });
lyr_BrnehaveVuggestue_12.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Hjemmeside': 'no label', 'Telefonnummer': 'no label', });
lyr_Folkeskoler_13.set('fieldLabels', {'fid': 'no label', 'Skolenavn': 'inline label - always visible', 'adresse': 'inline label - always visible', 'by': 'inline label - always visible', 'hjemmeside': 'inline label - always visible', });
lyr_SkoleiHvidovre_14.set('fieldLabels', {'fid': 'no label', 'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Bibliotek_15.set('fieldLabels', {'fid': 'hidden field', 'navn': 'inline label - always visible', 'adresse': 'inline label - always visible', 'by': 'inline label - always visible', 'Hjemmeside': 'hidden field', 'result_num': 'inline label - always visible', 'osm_id': 'hidden field', 'display_na': 'hidden field', 'category': 'hidden field', 'type': 'hidden field', 'latlong': 'hidden field', });
lyr_Pizzarier_16.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Bibliotek_17.set('fieldLabels', {'Biblioteks': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Bibliotek_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});