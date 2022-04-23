<template>
  <div>
    <!-- header -->
    <HomePageHeader />
    <!-- title -->

    <!-- filters -->
    <ActivityFilters
      :activityType.sync="activityType"
      :activityParticipants.sync="activityParticipants"
      :activityParticipantsCheckbox.sync="activityParticipantsCheckbox"
      :activityPrice.sync="activityPrice"
      @fetchDataFromApi="fetchDataFromApi"
    />

    <!-- activity content -->
    <ActivityComponent :idea="idea" />
  </div>
</template>

<script>
import HomePageHeader from "../components/HomePageHeader.vue";
import ActivityFilters from "../components/ActivityFilters.vue";
import ActivityComponent from "../components/ActivityComponent.vue";
import axios from "axios";

export default {
  name: "the-home-page",
  components: {
    HomePageHeader,
    ActivityFilters,
    ActivityComponent,
  },
  data() {
    return {
      idea: {},
      activityType: "all",
      activityParticipants: "1",
      activityParticipantsCheckbox: false,
      activityPrice: "all",
      costs: [
        { name: "cheap", values: [0.01, 0.399999] },
        { name: "medium", values: [0.4, 0.699999] },
        { name: "expensive", values: [0.7, 1] },
      ],
    };
  },
  computed: {
    typeFilter() {
      let type = "";
      if (this.activityType !== "all") {
        type = `type=${this.activityType}`;
      }
      return type;
    },
    priceFilter() {
      let price = "";
      if (this.activityPrice !== "all") {
        if (this.activityPrice === "free") {
          price = `price=0.0`;
        } else {
          let priceBounds = this.costs.find((e) => {
            return e.name === this.activityPrice;
          }).values;
          price = `minprice=${priceBounds[0]}&maxprice=${priceBounds[1]}`;
        }
      }
      return price;
    },
    participantsFilter() {
      let participants = "";
      if (this.activityParticipantsCheckbox === false) {
        participants = `participants=${this.activityParticipants}`;
      }
      return participants;
    },
  },
  methods: {
    fetchDataFromApi() {
      let url = `http://www.boredapi.com/api/activity/?`;

      url = url.concat("", this.typeFilter);
      if (this.priceFilter !== "") {
        if (url.endsWith("?")) {
          url = url.concat("", this.priceFilter);
        } else {
          url = url.concat("&", this.priceFilter);
        }
      }
      if (this.participantsFilter !== "") {
        if (url.endsWith("?")) {
          url = url.concat("", this.participantsFilter);
        } else {
          url = url.concat("&", this.participantsFilter);
        }
      }

      axios.get(url).then((res) => {
        this.idea = res.data;
      });
    },
  },
};
</script>

<style></style>
