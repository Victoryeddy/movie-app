<template>
  <v-app>
    <header class="text-center">
      <h1><span>TFPDL</span> Movies</h1>
      <router-link to="/" class="links">
      Home
      </router-link>
    </header>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  /* eslint-disable */
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style >
* {
  /* padding: 0; */
  /* margin: 0; */
  font-family: "Fira Sans", sans-serif;
  /* outline:1px solid red; */
}
/* 
body{
  background-color: #35495e;
} */
header {
  background-color: #2c3e4e;
  box-shadow: 0,4px,6px rgb(248, 246, 246)
  
}
.links{
  color:#fff !important;
  text-decoration:none;
  font-size:1.3rem;
}

header h1 {
  color: #fff;
}

header span {
  color: #42b883;
}
</style>
