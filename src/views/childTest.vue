<template>
  <div>
    <div>This is Child Component</div>
    {{ childParams }}
    <button @click="clickButton">click Button </button>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';

export default {
  name: 'ChildComponent',
  components: {},
  props: ['childParams'],
  data() {
    return {
    };
  },
  computed: {},
  watch: {},
  created() {
    console.log('call Child Created');
  },
  mounted() {
    console.log(moment());
  },
  methods: {
    clickButton() {
      this.$emit('parseParent', { a: 2 });
    },
  },
};
</script>

<style scoped lang="scss">

</style>
