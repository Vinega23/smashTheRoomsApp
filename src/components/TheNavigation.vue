<script>
export default {};
</script>

<template>
  <div class="navigation">
    <router-link to="/first">1.floor</router-link>
    <router-link to="/second">2.floor</router-link>
    <router-link to="/short">Short</router-link>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
   border-bottom: solid 2px #888; 

  a {
    color: #2c3e50;
    font-size: 1.1em;
    font-weight: 800;
    text-decoration: none;

    cursor: pointer;
    padding: 0.575em 0.65em;
    display: inline-block;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
