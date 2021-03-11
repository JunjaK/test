<template>
  <div>
    NestedTest Router2
    {{ test }}
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      test: {
        test: 1,
        aaa: { bbb: 2 },
      },
      test2: [1, 2, 3, 4],
    };
  },
  computed: {},
  watch: {},
  created() {
    const a = JSON.parse(JSON.stringify({ ...this.test }));

    // const b = { ...this.test2 };
    a.aaa.bbb = 4;
    console.log(this.test, a);
    this.testFunction();
  },
  methods: {
    testFunction() {
      console.log('test');
    },
  },
};
</script>

<style scoped lang="scss">

</style>
