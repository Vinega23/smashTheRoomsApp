<script>
import AddButton from "../components/AddButton.vue";
import roomsData from "../assets/rooms.json";
import roomsList from "../components/RoomsList.vue";
import counter from "../components/Counter.vue";

export default {
  components: {
    AddButton,
    roomsList,
    counter,
  },
  data() {
    return {
      rooms: [],
      checkedRooms: [],
    };
  },
  mounted() {
    roomsData.forEach((room) => {
      if (room.floor === 1) {
        this.rooms.push(room);
      }
    });
  },
  methods: {
    updateCheckedRooms(checkedRooms) {
      this.checkedRooms = checkedRooms;
    },
  },
};
</script>

<template>
  <div>
    <counter :checkedRooms="checkedRooms" />

    <rooms-list :checkedRooms="checkedRooms" />

    <add-button
      :rooms="rooms"
      :checkedRooms="checkedRooms"
      @checked-rooms-arrived="updateCheckedRooms"
    />
  </div>
</template>

<style lang="scss" scoped></style>
