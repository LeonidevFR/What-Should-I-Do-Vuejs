<template>
  <div v-if="Object.entries(idea).length !== 0" class="mt-6 activity-container">
    <div v-if="!idea.error" class="hero activity-body is-primary">
      <div class="hero-body">
        <p class="subtitle is-4 has-text-weight-semibold mb-6">You could :</p>
        <h2 class="title is-2 mt-4">{{ idea.activity }}</h2>
        <div class="columns mt-6">
          <div
            v-if="idea.price || idea.price === 0"
            class="column is-4 subtitle is-4 has-text-weight-semibold"
          >
            Price : {{ calculatedPrice }}/10
          </div>
          <div
            v-if="idea.type"
            class="column is-4 subtitle is-4 has-text-weight-semibold"
          >
            Category : {{ idea.type }}
          </div>
          <div
            v-if="idea.participants"
            class="column is-4 subtitle is-4 has-text-weight-semibold"
          >
            Participants : {{ idea.participants }}
          </div>
        </div>
        <a
          v-if="idea.link"
          :href="idea.link"
          class="subtitle is-4 has-text-link"
          >{{ idea.link }}
        </a>
      </div>
    </div>
    <div v-else>
      <h1 class="title is-4 has-text-danger">Whoops, {{ idea.error }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "activity-component",
  props: {
    idea: {
      type: Object,
    },
  },
  computed: {
    calculatedPrice() {
      if (this.idea.price !== 0) {
        return this.idea.price * 10;
      } else {
        return 0;
      }
    },
  },
};
</script>

<style scoped>
.activity-container {
  display: flex;
  justify-content: center;
  border-radius: 8px;
}

.activity-body {
  width: 90%;
  border-radius: 8px;
}
</style>
