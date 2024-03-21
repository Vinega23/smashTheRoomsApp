<template>
  <div v-for="room in rooms" :key="room.id">
    <input
      type="checkbox"
      :id="room.id"
      v-model="checkedRoomsCurrent"
      :value="room"
      @change="updateCheckedRooms"
    />
    <label for="room.name">{{ room.name }}</label>
  </div>
</template>

<script>
export default {
  props: {
    receivedRooms: {
      type: Array,
    },
    checkedRooms: {
      type: Array,
    },
  },
  data() {
    return {
      rooms: this.receivedRooms,
      checkedRoomsCurrent: this.checkedRooms,
    };
  },
  methods: {
    updateCheckedRooms() {
      this.$emit("checked-rooms-arrived", this.checkedRoomsCurrent);
    },
  },
};
</script>

<style lang="scss" scoped></style>
