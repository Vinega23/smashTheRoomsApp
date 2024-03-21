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
  border-radius: 0.5rem;
  background-color: #eee;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;

  a {
    cursor: pointer;
    border-radius: 0.5rem;
    border: none;
    color: rgba(51, 65, 85, 1);
    padding: 0.575em 0.65em;
    display: inline-block;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
      background-color: #fff;
      font-weight: 600;
    }
  }
}
</style>
