<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "App",

  created() {
    AOS.init();
  }
};
</script>
