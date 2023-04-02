<template>
  <div>
    <v-card justify="center">
      <v-img
        src="@/assets/movieposter.jpg"
        class="white--text align-end justify-center"
        gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.8)"
        cover
        height="550px"
      >
        <v-card-title
          class="text-decoration-none text-h4 font-weight-bold text-center"
          >Movie Poster</v-card-title
        >
        <v-card-subtitle class="pt-2 text-h6"
          >Discover the best movies and playlists on our site.
        </v-card-subtitle>
        <v-form @submit.prevent="searchMovies" ref="form" class="mt-5 ml-3">
          <v-row no-gutters class="mt-3">
            <v-col cols="12" lg="4">
              <v-text-field
                v-model="searchName"
                label="Enter Your Search"
                color="primary"
                type="search"
                input-text-color="#fff"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="3">
              <v-btn class="submitButton" type="submit" @click="searchMovies"
                >Search</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-img>
    </v-card>
    <div v-if="showResults" class="mt-4">
      <v-row justify="center">
        <v-col cols="12" lg="4" v-for="movie in movies" :key="movie.id" >
          <v-card >
            <v-img :src="movie.image" :alt="movie.title" />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: "Home",
  data() {
    return {
      searchName: "",
      movies: [],
      showResults: false,
      api_key: "your_api_key",
    };
  },
  methods: {
    searchMovies() {
      if (this.firstName != "") {
        this.$http
          .get(
            `https://imdb-api.com/en/API/SearchAll/${this.api_key}/${this.searchName}`
          )
          .then((response) => {
            this.movies = response.data.results;
            console.log(this.movies);
            this.showResults = true;
            this.$refs.form.reset();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    // comingSoonItems() {
    //   fetch(`https://imdb-api.com/en/API/ComingSoon/${this.api_key}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //     });
    // },
  },
};
</script>
<style>
/* .img-poster {
  width: 80vw;
  height: 80vh;
} */
.submitButton {
  padding: 1.7rem 2rem !important;
}

/* .v-text-field::-moz-focus-inner {
  background-color: #e5e5e5 !important;
} */

.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(
    .v-input--has-state
  )
  > .v-input__control
  > .v-input__slot
  fieldset {
  color: #e5e5e5;
  border-color: #e5e5e5;
}

.theme--light.v-label {
  color: #e5e5e5 !important;
}

.theme--light.v-input input {
  color: #fff !important;
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
