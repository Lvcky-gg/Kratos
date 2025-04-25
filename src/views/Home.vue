<template>
    <sidebar id="custom-sidebar"/>
    <div id="app-content">
    <header id="top-header"></header>
    <map id="map-container"></map>
    <footer id="home-footer"></footer>
    </div>


</template>
<script setup>
import Map from '../components/Map.vue';
import Sidebar from '../components/Sidebar.vue';
import Footer from '../components/Footer.vue';
</script>
<style scoped>
#custom-sidebar {
    width: 150px;
    height: 100%;
    background-color: #0e0d0d;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 20px;
}
#app-content {
    margin-left: 250px;
    padding: 20px;
}
#top-header {
    height: 60px;
    background-color: #333;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
}
#map-container {
    width: calc(100% - 250px); /* Adjust this to match the width of your sidebar */
    height: calc(100vh - 60px); /* Adjust this to account for the header height */
    position: absolute;
    top: 60px; /* Adjust this to account for the header height */
    left: 250px; /* Adjust this to match the width of your sidebar */
}
#home-footer {
    height: 60px;
    background-color: #333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 20;
}
</style>
