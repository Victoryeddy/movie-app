<template>
  <div class="home">
    <v-card>
      <router-link to="/movie/tt23490" class="card-header">
        <v-img
          src="@/assets/movieposter.jpg"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.7)"
          height="550px"
        >
          <v-card-title class="text-decoration-none fs-7">Movie Poster</v-card-title>
          <v-card-subtitle class="pt-2 fs-6">Discover the best movies and playlists on our site. </v-card-subtitle>
        </v-img>
      </router-link>
    </v-card>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: "Home",
};
</script>
<style>
.fs-7{
  font-size: 2.3rem;
}
.fs-6{
  font: 1.5rem !important;
}
.card-header{
  text-decoration:none !important;
}
</style>
