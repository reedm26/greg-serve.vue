<template>
  <div class>
    Hello Jobs
    <input type="text" placeholder="company" />
    <input type="text" placeholder="position" />
    <input type="text" placeholder="wages" />
    <input type="text" placeholder="description" />

    <!-- TODO need to add the @ click function -->
    <button>Find</button>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: ["jobData"],
  computed: {
    jobPositionUpperCase() {
      return this.jobData.position.toUpperCase();
    }
  }
};
</script>

<style></style>
