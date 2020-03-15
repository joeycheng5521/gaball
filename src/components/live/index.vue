<template>
  <div class="liveIndex">
    <Header/>
    <Live/>
  </div>
</template>

<script>

  import Header from '../common/Header'
  import Live from '../common/Live'


export default {
  components: {
    Header,
    Live
  },

  data() {
    return {
    };
  },

  methods: {
  }
};
</script>

<style lang="less">

  .liveIndex{
    position: relative;
    z-index: 1;
  }

</style>
