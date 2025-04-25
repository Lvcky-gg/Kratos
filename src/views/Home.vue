<template>
    <top-header id="top-header"></top-header>
    <!-- <sidebar id="custom-sidebar"/> -->
    <div id="app-content">
    <map id="map-container"></map>

    </div>



</template>
<script setup>
import Map from '../components/Map.vue';
import Sidebar from '../components/Sidebar.vue';
import TopHeader from '../components/TopHeader.vue';

</script>
<style scoped>

body, html, #app {
    height: 100%;
    margin: 0;
    padding: 0;
}

#custom-sidebar {
    width: calc(100vw - 95vw)!important;
    height: calc(100vw - 5vw)!important;
    background-color: #0e0d0d;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 20px;
    box-sizing: border-box;
}

#app-content {
    width: calc(100vw - 5vw)!important;
    display: flex;
    flex-direction: column;
    height: calc(100vw - 5vw)!important;
    box-sizing: border-box;
}

#top-header {
    height: calc(100vw - 95vw)!important;
    width: 100vw;
    background-color: #0e0d0d !important;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

}


</style>
