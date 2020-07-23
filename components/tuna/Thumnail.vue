<template>
  <v-row
    class="py-14"
    no-gutters
  >
    <v-col
      class="text-left"
      cols="12"
      sm="6"
    >
      <v-img
        class="thumnail--image"
        src="/tuna.png"
      ></v-img>
    </v-col>
    <v-col
      class="text-left"
      cols="0"
      sm="1"
    ></v-col>
    <v-col
      class="text-left"
      cols="12"
      sm="4"
    >
      <div class="thumnail--text">
        <h1 class="secondary--text">Tuna</h1>
        <h3>SOLID, CHUCK, FLAKE, SHREDDED</h3>
        <p class="pt-7">Pellentesque semper quis neque dictum hendrerit. Sed nulla ipsum, porttitor pharetra tortor in,consequat imperdiet nisi. Phasellus at quam tristique, cursus tellus vitae, convallis neque.</p>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 30px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: 3px;
}
h3 {
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 2px;
  color: #939393;
}

p {
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: #a8a8a8;
}

.thumnail--image {
  width: 572px;
}

.thumnail--text {
  width: fit-content;
  height: fit-content;
  margin: auto;
  padding-bottom: 3em;
  border-bottom: solid 3px var(--v-secondary-base);
}
</style>
