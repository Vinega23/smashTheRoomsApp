<template>
  <button @click="open = true">Add</button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <CheckboxesList
        :receivedRooms="receivedRooms"
        :checkedRooms="checkedRooms"
        @checked-rooms-arrived="updateCheckedRooms"
      />
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
</template>

<script>
import CheckboxesList from "../components/CheckboxesList.vue";

export default {
  components: {
    CheckboxesList,
  },
  props: {
    rooms: {
      type: Array,
    },
    checkedRooms: {
      type: Array,
    },
  },
  data() {
    return {
      open: false,
      receivedRooms: this.rooms,
    };
  },
  methods: {
    updateCheckedRooms(checkedRoomsUpdated) {
      this.$emit("checked-rooms-arrived", checkedRoomsUpdated);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 999;
  width: 100vh;
  height: 100vh;
  background: #213547;
  opacity: 1;
  color: #cecece;
  // display: flex;
  // align-items: center;

  button {
    margin-left: 20vh;
  }
}
button {
  border: solid 0.2rem #213547;
  color: #213547;
  background-color: #cecece;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}
</style>
