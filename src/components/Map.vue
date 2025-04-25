<template>
    <div id="map" class="map"></div>
    <div class="tool-container">
        <div id="map-tools">
            <div id="compass" class="map-tool"></div>
            <div id="zoom" class="map-tool">
                <div id="zoom-in" class="map-tool-btn"></div>
                <div id="zoom-out" class="map-tool-btn"></div>
                </div>
            <div id="nav-toggle" class="map-tool"></div>
            <div id="fs-toggle" class="map-tool"></div>
        </div>
    </div>
</template>
<script setup>
import {onMounted }from 'vue';
import {initMap} from '../lib/map';

import esriConfig from '@arcgis/core/config';

const props = defineProps({
    defaultBasemap: {
        type:String,
        default:'Imagry [esri]'
    },
    defaultGround: {
        type:String,
    },
    assetsPath:String
})
if(props.assetsPath)
    esriConfig.assetsPath = props.assetsPath;

onMounted(() => {
    initMap('map');
});
</script>
<style lang="css" scoped>

#map {
    width: 90%;
    height: 80%;
    position: absolute;
    top: 10em;
    left: 25em;
}
.tool-container {
    position: absolute;
    top: 2em;
    left: 20;
    width: 80%;
    height: 80%;
    pointer-events: none;
}

</style>
