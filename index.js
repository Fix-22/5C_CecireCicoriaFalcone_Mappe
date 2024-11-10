import {generateForm} from "./formComponent/formComponent.js"
import {generateGeoencoder} from "./geoencoderComponent/geoencoderComponent.js"
import {generateMap} from "./mapComponent/mapComponent.js"

const formContainer = document.getElementById("formContainer");
const mapContainer = document.getElementById("map");

const componenteForm = generateForm(formContainer) ;
const map = generateMap(mapContainer);
const componentGeoencoder = generateGeoencoder();

componenteForm.build() ;
componenteForm.onsubmit((address) => {
    componentGeoencoder.encode(address)
    .then((data) => {
        map.addPlace(data);
        map.render();
        console.log(data);
    })
});
componenteForm.render() ;

fetch("./config.json")
.then(r => r.json())
.then(data => {
    let API_TOKEN = data["API_TOKEN"];
    componentGeoencoder.build(API_TOKEN);
    map.build([45.4639102, 9.1906426]); // default viene usato il Duomo di Milano
    map.render();
});