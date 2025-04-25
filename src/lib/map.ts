import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';

import {when, watch} from '@arcgis/core/core/reactiveUtils.js';
import { ref, markRaw } from 'vue';
import ElevationLayer from '@arcgis/core/layers/ElevationLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

export let map, view, losGraphLayer;
export const mapLayers = ref<Record<string, { title: string; id: string; layer: any }>>({});
export const mapReady = ref(false);

export const initMap = (container) => {

    const defaultBasemap = 'satellite';
        const elevationLayer = new ElevationLayer({
        url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
    });
    map = new Map({
        basemap: defaultBasemap,
        ground: {
            layers: [elevationLayer]
        },
    });

    view = new SceneView({
        container,
        map
    });

    when(
        () => view.ready,
        () => {
            mapReady.value = true;
        }
    )
    const validTypes = ['csv', 'graphic', 'geojson', 'kml', 'layer', 'mapImageLayer', 'ogcFeatureLayer', 'sceneLayer', 'tile', 'vectorTile'];
    watch(
        ()=> view.map.allLayers.filter((layer) => validTypes.includes(layer.type)),
        (layers) => {
            if(layers.length){
                for(const layer of layers){
                    if(layer.title === 'SVM Internal') continue;
                    mapLayers.value[layer.id] = {
                        title: layer.title,
                        id: layer.id,
                        layer: markRaw(layer),
                    }
                }
            }
        }
    )
}
export const removeLayer = async (layer) => {
    map.remove(layer);
}
export const makeLayer = async (url, options) => {
    const layer = new FeatureLayer({url, ...options});
    return layer;
}
export const addLayer = async (layer) => {
    map.add(layer);
}
