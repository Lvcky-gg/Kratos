<template>
    <div class="header-container">
<Avatar class="p-overlay-badge" :image="elessarImg" size="small" />

    </div>

</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar';
import elessarImg from '../assets/imgs/Elessar.png';
</script>
<style scoped>
.p-overlay-badge {
    height:100%;

}
.header-container{
    display:flex;
    justify-content:space-between;
}
</style>
