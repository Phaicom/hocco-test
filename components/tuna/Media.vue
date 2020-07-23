<template>
  <div class="media">
    <h1 class="media__title">MEDIA</h1>
    <v-row class="media__types">
      <v-col
        v-for="(type, index) in mediaTypes"
        :key="index"
        cols="6"
        md="3"
      >
        <v-row class="media__type">
          <v-col
            cols="12"
            class="media__name"
          >
            {{type.name}}
          </v-col>
          <v-col cols="12">
            <div style="display: flex;align-items: center;justify-content: center;">
              <v-img
                class="media__image"
                max-width="220px"
                contain
                :src="'/media-'+convertToKebabCase(type.name)+'.png'"
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
      mediaTypes: [{
        name: 'brine'
      }, {
        name: 'soybean oil'
      }, {
        name: 'sunflower oil'
      }, {
        name: 'olive oil'
      },]
    }
  },
  methods: {
    convertToKebabCase(name) {
      return name.replace(' ', '-')
    }
  }
}
</script>

<style lang="scss" scoped>
.media {
  position: relative;
  padding-top: 90px;

  .media__title {
    position: relative;
    z-index: 1 !important;
    font-size: 60px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.5;
    letter-spacing: 6px;
    text-align: center;
    color: #ffffff;
  }

  .media__types {
    position: relative;
    z-index: 1 !important;
    margin-top: 67px;

    .media__type {
      position: relative;
      text-align: center;
      background-color: white;
      margin-right: 3px;
      height: 300px;

      .media__name {
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.3;
        letter-spacing: 2px;
        color: #f9891b;
        text-transform: uppercase;
        padding: 0;
        height: 180px;
        border: solid 1px #f9c410;
        padding: 50px;
      }

      .media__image {
        position: absolute;
        top: 120px;
      }
    }
  }
}

// background rectangle
.rectangle {
  position: absolute;
  width: 100vw;
  height: 300px;
  top: 0;
  left: 0;
  right: 0;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background-color: #f9c410;
}
</style>
