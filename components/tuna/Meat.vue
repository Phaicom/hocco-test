<template>
  <div class="meat">
    <h1 class="meat__title">MEAT</h1>
    <v-row class="meat__types mt-7">
      <v-col
        v-for="(type, index) in meatTypes"
        :key="index"
        cols="6"
        md="3"
        class="meat__type"
      >
        <v-row>
          <v-col cols="12">
            {{type.name}}
          </v-col>
          <v-col cols="12">
            <div style="display: flex;align-items: center;justify-content: center;">
              <v-img
                class="meat__image"
                max-width="220px"
                contain
                :src="'/meat-'+type.name+'.png'"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div class="rectangle"></div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      meatTypes: [{
        name: 'solid'
      }, {
        name: 'chuck'
      }, {
        name: 'flake'
      }, {
        name: 'shredded'
      },]
    }
  },
}
</script>

<style lang="scss" scoped>
.meat {
  position: relative;

  .meat__title {
    position: relative;
    z-index: 1 !important;
    font-size: 50px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.6;
    letter-spacing: 5px;
    text-align: left;
    color: #ddc7a9;
  }

  .meat__types {
    position: relative;
    z-index: 1 !important;

    .meat__type {
      text-align: center;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.3;
      letter-spacing: 2px;
      color: #939393;
      text-transform: uppercase;
    }
  }
}

// background rectangle
.rectangle {
  position: absolute;
  width: 100vw;
  height: calc(100% - 12px);
  top: 12px;
  left: 0;
  right: 0;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background-color: white;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
}
</style>
