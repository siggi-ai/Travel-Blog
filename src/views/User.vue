<template>
  <h1>USER</h1>
  <p>{{ id }}</p>
</template>

<script>
export default {
  props: ["id"],
  mounted: function () {
    alert(this.id);
    /* fetch some data from an api (or whatever really) based on
    the prop */
  }
};
</script>

<style></style>
