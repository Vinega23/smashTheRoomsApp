<script>
export default {
  props: {
    room: {
      type: Object,
    },
  },
  data() {
    return {
      picked: null,
      toggle: null,
      message: null,
      DndChecked: false,
    };
  },
};
</script>

<template>
  <div>
    <article
      class="room"
      :class="{
        'border-one': picked === 'One',
        'border-two': picked === 'Two',
      }"
    >
      <h2>{{ room.name }}</h2>
      <div class="dndCheckbox" v-show="picked === 'Two'">
        <input type="checkbox" id="checkbox" v-model="DndChecked" />
        <label
          :class="{
            dndLabel: DndChecked === true,
          }"
          >DND</label
        >
      </div>
      <div class="radioButtons">
        <input type="radio" id="one" value="One" v-model="picked" />
        <label>c/o</label>

        <input type="radio" id="two" value="Two" v-model="picked" />
        <label>s/o</label>
      </div>

      <div class="noteCheckBox">
        <input
          type="checkbox"
          id="checkbox"
          v-model="toggle"
          true-value="yes"
          false-value="no"
        />
        <label
          :class="{
            noteLabel: message != null,
          }"
          >note</label
        >
      </div>

      <div class="noteInput">
        <textarea
          v-show="toggle === 'yes'"
          v-model="message"
          placeholder="write something..."
        ></textarea>
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.room {
  text-align: center;

  max-width: 24em;
  margin: 0 auto 2em;

  box-sizing: border-box;
  background-color: #cecece;
  border-radius: 0.75em;

  border: 0.5rem solid #8c8c88;

  position: relative;
  transition: 0.1s;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .noteInput {
    textarea {
      margin: 0.5rem 0rem 0.5rem 0;
    }
  }
  .noteLabel {
    color: #419fd9;
    text-shadow: -1px 1px 10px #419fd9;
  }
  .dndLabel {
    color: #f2b705;
    text-shadow: -1px 1px 10px #f2b705;
  }

  h2 {
    font-size: large;
    line-height: 1.5em;
    margin: 0;
  }
}
.border-one {
  border: 0.5rem solid #f24141;
}
.border-two {
  border: 0.5rem solid #f2b705;
}
</style>
