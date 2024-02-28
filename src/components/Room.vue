<script>
export default {
  props: {
    room: {
        type: Object        
    },
  },
};
</script>

<template>
  <div>
    <article class="room">
      <h2>{{ room.name }}</h2>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.room{
    border: 3px solid #2c3e50;
	border-radius: 2em;
}
</style>
