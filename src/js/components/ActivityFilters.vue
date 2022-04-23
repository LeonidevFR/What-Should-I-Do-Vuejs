<template>
  <div class="mt-4">
    <div class="columns">
      <div class="column is-2 filter-width">
        <h1 class="mb-2 subtitle is-5 has-text-black has-text-weight-semibold">
          Type
        </h1>
        <div class="select is-primary">
          <select v-model="type">
            <option value="all">All</option>
            <option value="education">Education</option>
            <option value="recreational">Recreational</option>
            <option value="social">Social</option>
            <option value="diy">Diy</option>
            <option value="charity">Charity</option>
            <option value="cooking">Cooking</option>
            <option value="relaxation">Relaxation</option>
            <option value="music">Music</option>
            <option value="busywork">Busywork</option>
          </select>
        </div>
      </div>
      <div class="column is-2">
        <h1 class="mb-2 subtitle is-5 has-text-black has-text-weight-semibold">
          Cost
        </h1>
        <div class="select is-primary">
          <select v-model="price">
            <option value="all">All</option>
            <option value="free">Free</option>
            <option value="cheap">Cheap</option>
            <option value="medium">Medium</option>
            <option value="expensive">Expensive</option>
          </select>
        </div>
      </div>
      <div class="column is-2">
        <h1 class="mb-2 subtitle is-5 has-text-black has-text-weight-semibold">
          Participants
        </h1>
        <input
          v-model="participants"
          class="input is-primary filter-width mb-2"
          type="number"
          placeholder="Participants"
        />
        <b-checkbox
          size="is-small"
          v-model="participantsCheckbox"
          type="is-primary"
          class="has-text-weight-semibold"
        >
          It doesn't matter
        </b-checkbox>
      </div>
      <div class="column is-offset-3 is-3 mt-4">
        <button
          @click="$emit('fetchDataFromApi')"
          class="button is-primary is-large"
        >
          Give me an idea
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "activity-filters",
  props: {
    activityType: {
      type: String,
    },
    activityParticipants: {
      type: String,
    },
    activityParticipantsCheckbox: {
      type: Boolean,
    },
    activityPrice: {
      type: String,
    },
  },
  data() {
    return {
      type: this.activityType,
      participants: this.activityParticipants,
      participantsCheckbox: this.activityParticipantsCheckbox,
      price: this.activityPrice,
    };
  },
  watch: {
    type() {
      this.$emit("update:activity-type", this.type);
    },
    participants() {
      this.$emit("update:activity-participants", this.participants);
    },
    participantsCheckbox() {
      this.$emit(
        "update:activity-participants-checkbox",
        this.participantsCheckbox
      );
    },
    price() {
      this.$emit("update:activity-price", this.price);
    },
  },
};
</script>

<style scoped>
.filter-width {
  width: 143px;
}
</style>
