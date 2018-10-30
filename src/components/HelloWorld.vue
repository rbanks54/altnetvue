<template>
  <v-container fluid>
    <v-layout column align-center>
      <header>
        <h1 clas="display2">Wikipedia Viewer</h1>
      </header>

      <v-flex xs12 sm6>
          <v-text-field
            v-model="query"
            label="Search Term"
            @input="getArticles"
            clearable
          ></v-text-field>
        </v-flex>

      <v-list subheader three-line>
        <v-subheader>Results, baby!</v-subheader>
        <v-list-tile v-for="(article, index) in articles" v-bind:key="index">
          <v-list-tile-content>
            <v-list-tile-title>
              <a :href="article.link" target="_blank" rel="noopener noreferrer">{{article.title}}</a>
            </v-list-tile-title>
            <v-list-tile-sub-title>{{article.snippet}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    query: {
      get () {
        return this.$store.state.query
      },
      set (value) {
        this.$store.commit('updateQuery', value)
      }
    },
    articles: {
      get() {
        return this.$store.getters.articles;
      }
    }
  },
  methods: {
    getArticles() {
      if (this.query) {
        this.$store.dispatch('getArticles');
      }
    }
  }
}
</script>

<style>

</style>
