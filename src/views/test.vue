<template>
  <div>
    <div>testRotuer</div>
    <child-component :child-params="parentData"
                     @parseParent="fetchChildComponent"
                     ref="childComponent"
    />

    <router-link to="/nested/test">nestedTest</router-link> |
    <router-link to="/nested/test1">nestedTest</router-link> |
    <router-link to="/nested/test2">nestedTest</router-link>
    <router-view/>
  </div>
</template>

<script>
import ChildComponent from './childTest.vue';

export default {
  components: { ChildComponent },
  data() {
    return {
      test: {
        test: 1,
        aaa: { bbb: 2 },
      },
      parentData: [1, 2, 3, 4, 4],
    };
  },
  computed: {},
  watch: {},
  created() {
    console.log('call Parent Created');
  },
  mounted() {
    console.log('call Parent Mounted');
  },
  methods: {
    testFunction() {
      console.log('test');
    },
    fetchChildComponent(data) {
      console.log(data);
      this.parentData = data;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
