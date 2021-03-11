<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div          v-if="flag"
    >

    <div v-for="(data, index) in $store.getters.getApiData"
         :key="index"
    >
      <div>
        {{data.postId}}: {{data.body}}
      </div>
      <div>
        {{index}}
      </div>
    </div>
    </div>
    <button @click="flag = !flag">clickToggle</button>
    <div v-show="flag">flag is {{flag }}</div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  data() {
    return {
      data: null,
      flag: false,
    };
  },
  async created() {
    console.log('before', this.$store.state.apiData);
    await this.callApi();
    await this.$store.dispatch('setApiData');

    console.log('after1', this.$store.state.apiData);
    // await this.$store.dispatch('TEST/setApiData');
    //
    // console.log('after2', this.$store.state.TEST.apiData);
  },
  mounted() {
    console.log('mounted', this.$store.state.apiData);
  },
  methods: {
    ...mapActions({
      callApi: 'setApiData',
    }),
    name() {

    },
  },
};
</script>
