<template>
  <div>
    <v-card>
      <router-link to="/movie/tt23490" class="card-header">
        <v-img
          src="@/assets/movieposter.jpg"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.7)"
          height="550px"
        >
          <v-card-title class="text-decoration-none fs-7"
            >Movie Poster</v-card-title
          >
          <v-card-subtitle class="pt-2 fs-6"
            >Discover the best movies and playlists on our site.
          </v-card-subtitle>
        </v-img>
      </router-link>
    </v-card>
    <v-form @submit.prevent="searchName" ref="form">
      <v-row no-gutters class="mt-3">
        <v-col cols="12" lg="4">
          <v-text-field
            v-model="firstName"
            label="Enter Your Search"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="3" class="d-flex">
          <v-btn class="submitButton" type="submit">Search</v-btn>
        </v-col>
      </v-row>
    </v-form>

    <v-row >
      <v-col cols="12" lg="4"  v-for="movie in movies" :key="movie.imdbID" >
        <v-card >
        <router-link :to="'/movie/' + movie.imdbID">
          <v-img :src="movie.Poster" :alt="movie.Title"/>
        </router-link>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import env from '@/env.js'
export default {
  /* eslint-disable */
  name: "Home",
  data() {
    return {
      firstName: "",
      movies:[],
    };
  },
  methods: {
    searchName() {
      // if (this.firstName != "") {
      //   console.log(this.firstName);
      //   this.$http
      //     .get(`?apikey=${env.apikey}&s=${this.firstName}`)
      //     .then((response) => {
      //       console.log(response.data);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      // }
      if (this.firstName != "") {
        fetch(`http://www.omdbapi.com/?apiKey=${env.apikey}&s=${this.firstName}`)
        .then(response => response.json())
        .then(data => {
          this.movies = data.Search
          console.log(this.movies);
            this.$refs.form.reset();
          });
      }
    },
  },
};
</script>
<style>
.submitButton {
  padding: 1.7rem 2rem !important;
}

.fs-7 {
  font-size: 2.3rem;
}
.fs-6 {
  font: 1.5rem !important;
}
.card-header {
  text-decoration: none !important;
}
</style>
