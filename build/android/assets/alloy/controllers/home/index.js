var Alloy=require("/alloy"),
Backbone=Alloy.Backbone,
_=Alloy._;




function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){






















































































function findmon(e,type,latkeep,latdelta,londelta){
if(!0!=latkeep){
if(!1)var
latdelta=.1,
londelta=.1;


if(!0)
var latdelta=14;

}
$.activityIndicator.show();
var args=e;

if("geoloc"==type)
if(Ti.Geolocation.locationServicesEnabled&&(null!=e.coords||void 0)&&(null!=e.coords.latitude||void 0))
lat=args.coords.latitude,
lon=args.coords.longitude,
url="https://cerca.wikilovesmonuments.it/monuments.json?range=30&latitude="+lat+"&longitude="+lon,
$.activityIndicator.show();else



return alert("Qualcosa \xE8 andato storto! Assicurati di aver attivato la localizzazione e riavvia l'applicazione o clicca refresh."),void $.activityIndicator.hide();


"city"==type&&(
url="https://cerca.wikilovesmonuments.it/monuments.json?city="+e);


var xhr=Ti.Network.createHTTPClient({
onload:function(e){
var response=JSON.parse(this.responseText);!1,





$.osm.clearMarker(),


null!=response[1]&&null!=response[1]&&""!=response[1]?(!1,










$.osm.location={
latitude:response[1][0],
longitude:response[1][1],
zoomLevel:latdelta},


"geoloc"==type&&!1):(!1,
















$.osm.location={longitude:41.9109,latitude:12.4818,zoomLevel:14},

alert("Non hai inserito nessuna localit\xE0 o c'\xE8 stato un errore nella geolocalizzazione.")),!1,






















markers=[],

response[0].forEach(function(item){
if(item.with_photos)
var icon="/images/Info blue.png";else

var icon="/images/Info red.png";

markers.push({
latitude:item.latitude,
longitude:item.longitude,
title:item.itemlabel,
icon:icon,
id:item.id});

}),
$.osm.addMarkers(markers),


$.activityIndicator.hide();
},
onerror:function(e){
alert("Errore di connessione: "+e.error),
$.activityIndicator.hide();

},
timeout:15e3});

xhr.open("GET",url),
xhr.send();
}


function locate(latkeep,latdelta,londelta){
if(!0!=latkeep){
if(!1)var
latdelta=.1,
londelta=.1;


if(!0)
var latdelta=14;

}

Ti.Geolocation.hasLocationPermissions(Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE)||Ti.Geolocation.hasLocationPermissions(Ti.Geolocation.AUTHORIZATION_ALWAYS)?
Ti.Geolocation.getCurrentPosition(function(e){

findmon(e,"geoloc",latkeep,latdelta),!1;





}):

Ti.Geolocation.requestLocationPermissions(Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE,function(e){
if(e.success)
Ti.Geolocation.getCurrentPosition(function(e){

findmon(e,"geoloc",latkeep,latdelta),!1;





});else
{!1;















;
alert("Impossibile localizzarti, non hai dato il permesso alla localizzazione. Cerca una citt\xE0 cliccando sulla lente di ingrandimento oppure abilita la localizzazione dalle impostazioni sulla privacy.");
}
});

}if(require("/alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="home/index",this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],"__parentSymbol"),$model=__processArg(arguments[0],"$model"),__itemTemplate=__processArg(arguments[0],"__itemTemplate");var $=this,exports={},__defers={};if($.__views.winmap=Ti.UI.createWindow({backgroundColor:"#fff",layout:"vertical",height:Ti.UI.FILL,windowSoftInputMode:Ti.UI.Android.SOFT_INPUT_ADJUST_PAN,title:"Mappa",id:"winmap"}),$.__views.winmap&&$.addTopLevelView($.__views.winmap),$.__views.__alloyId4=Ti.UI.createView({height:Ti.UI.SIZE,backgroundColor:"#FFFFFF",id:"__alloyId4"}),$.__views.winmap.add($.__views.__alloyId4),!1){var __alloyId5=[];$.__views.mapview=(require("ti.map").createView||Ti.UI.createView)({height:Ti.UI.FILL,backgroundColor:"#FFFFFF",userLocation:!0,annotations:__alloyId5,id:"mapview"}),$.__views.__alloyId4.add($.__views.mapview)}if($.__views.osm=(require("ti.osm").createOSMView||Ti.UI.createOSMView)({mapType:Alloy.Globals.OSM.WIKIMEDIA,userLocation:!0,id:"osm"}),$.__views.__alloyId4.add($.__views.osm),$.__views.activityIndicator=Ti.UI.createActivityIndicator({hiddenBehavior:Titanium.UI.HIDDEN_BEHAVIOR_GONE,style:Ti.UI.ActivityIndicatorStyle.BIG,indicatorColor:"black",id:"activityIndicator"}),$.__views.__alloyId4.add($.__views.activityIndicator),$.__views.searchfield=Ti.UI.createTextField({width:Ti.UI.FILL,height:"10%",backgroundColor:"#FFF",color:"#000",top:"0",hintTextColor:"#A0A0A0",returnKeyType:Ti.UI.RETURNKEY_SEARCH,id:"searchfield",hintText:"Inserisci il nome della citt\xE0 e premi invio..."}),$.__views.__alloyId4.add($.__views.searchfield),$.__views.refresh=Ti.UI.createButton({backgroundColor:"transparent",color:"#000",bottom:"10%",left:"5%",width:25,height:25,id:"refresh",backgroundImage:"/images/refresh.png"}),$.__views.__alloyId4.add($.__views.refresh),$.__views.search=Ti.UI.createButton({backgroundColor:"transparent",color:"#000",bottom:"10%",right:"5%",width:25,height:25,id:"search",backgroundImage:"/images/search.png"}),$.__views.__alloyId4.add($.__views.search),exports.destroy=function(){},_.extend($,$.__views),!1)var Map=require("ti.map");$.searchfield.hide(),$.searchfield.autocorrect=!1,$.activityIndicator.hide();var defaultZoom=14;



































if($.osm.height=Ti.UI.FILL,$.osm.location={longitude:41.9109,latitude:12.4818,zoomLevel:14},!1,$.winmap.addEventListener("open",function(e){if("notset"==Ti.App.Properties.getBool("flurry","notset")){var dialog=Ti.UI.createAlertDialog({buttonNames:["Accetta","Rifiuta"],message:"Vuoi condividere con lo sviluppatore di quest'applicazione alcuni dati di utilizzo e in particolare di crash, in modo da poter contribuire al miglioramento della stessa, tramite la piattaforma Flurry?",title:"Dati di utilizzo e crash"});dialog.addEventListener("click",function(e){0==e.index?Ti.App.Properties.setBool("flurry",!0):Ti.App.Properties.setBool("flurry",!1),locate()}),dialog.show()}else locate()}),!1,!0){
function infoboxClick(e){
Alloy.Globals.utils.openmodal("home/show",e.marker.id);
}

$.osm.addEventListener("infoboxClick",infoboxClick);
}

$.refresh.addEventListener("click",function(){!1,





locate(!0,$.osm.location.zoomLevel);

}),

$.search.addEventListener("click",function(){
$.searchfield.show(),
$.searchfield.focus(),

$.searchfield.height="20%",


$.searchfield.addEventListener("return",function(e){
findmon(e.value,"city"),
$.searchfield.hide(),
$.searchfield.height="10%",

Ti.UI.Android.hideSoftKeyboard();

});
}),

$.search.addEventListener("blur",function(e){
$.searchfield.hide(),

Ti.UI.Android.hideSoftKeyboard();

}),









_.extend($,exports);
}

module.exports=Controller;