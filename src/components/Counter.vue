<template>
  <article class="counter">
    <label class="rooms">{{ roomsCounter }}</label>
  </article>
</template>

<script>
export default {
  data() {
    return {
      roomsCounter: 0,
    };
  },
  props: {
    checkedRooms: {
      type: Array,
    },
  },
  updated() {
    this.roomsCounter = this.checkedRooms.length;
  },
};
</script>

<style lang="scss" scoped>
.counter {
  .rooms {
    color: #213547;
    font-size: x-large;
    font-weight: bold;
  }
}
</style>
