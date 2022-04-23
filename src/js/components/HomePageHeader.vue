<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-BODY">
        <div class="columns is-vcentered">
          <div class="column is-4">
            <figure class="image is-96x96">
              <a href="/">
                <img src="../../assets/images/bored-svgrepo-com.svg" />
              </a>
            </figure>
          </div>
          <div class="column is-4">
            <h1 class="title is-1">I'm so Bored</h1>
            <h2 class="subtitle is-4">What should I do ?</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home-page-header",
};
</script>

<style scoped>
.hero {
  padding: 20px;
}
figure {
  filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg);
}
</style>
