<script>
import Room from "../components/Room.vue";
import roomsData from "../assets/rooms.json";
export default {
  components: { Room },
  data() {
    return {
      rooms: roomsData,
    };
  },
};
</script>

<template>
<ul class="rooms-list">
    <li>
        <room v-for="room in rooms" :key="room.id" :room="room" />
    </li>
</ul>
</template>

<style lang="scss" scoped></style>
