<script>
import Room from "./Room.vue";
export default {
  components: {
    Room,
  },  
  props: {
    checkedRooms: {
      type: Array,
    },
  },
 
  computed: {
    sortedList() {
      return this.checkedRooms.slice().sort((a, b) => a.id - b.id);
    },
  },
};
</script>

<template>
  <ul class="rooms-list">
    <li>
      <room v-for="room in sortedList" :key="room.id" :room="room" />
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
