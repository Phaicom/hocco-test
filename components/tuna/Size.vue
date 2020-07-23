<template>
  <div class="size">
    <h1 class="size__title">SIZE</h1>
    <div class="rectangle"></div>
    <v-row class="">
      <v-col>
        <v-tabs
          v-model="tab"
          background-color="transparent"
          centered
          height="100px"
          slider-size="38"
          class="size__tabs"
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            href="#tab-1"
            class="tabs__name"
            :ripple="false"
          >
            SOLID
          </v-tab>
          <v-tab
            href="#tab-2"
            class="tabs__name"
            :ripple="false"
          >
            Favorites
          </v-tab>
          <v-tab
            href="#tab-3"
            class="tabs__name"
            :ripple="false"
          >
            Nearby
          </v-tab>
          <v-tab
            href="#tab-4"
            class="tabs__name"
            :ripple="false"
          >
            Nearby
          </v-tab>
        </v-tabs>
        <hr class="size__slider-bar">
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="i in 4"
            :key="i"
            :value="'tab-' + i"
          >
            <v-data-table
              :headers="headers"
              :items="temps"
              :items-per-page="12"
              hide-default-footer
              class="size__table"
            ></v-data-table>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      tab: null,
      headers: [
        {
          text: 'NET WEIGHT (g.)',
          align: 'start',
          value: 'nw1',
        },
        { text: 'NET WEIGHT (2)', value: 'nw2' },
        { text: 'DRAIN WEIGHT', value: 'dw' },
        { text: 'CAN SIZE', value: 'size' },
        { text: 'CANS/CARTON', value: 'carton' },
        { text: 'CANS/20’FCL (Normal Lid)', value: 'lid' },
        { text: 'CANS/20’FCL (EOE)', value: 'eoe' },
      ],
      temps: [
        {
          nw1: 'Frozen Yogurt',
          nw2: 159,
          dw: 6.0,
          size: 24,
          carton: 24,
          lid: 4.0,
          eoe: '1%',
        },
      ],
    }
  },
  mounted() {
    this.generateTemp()
  },
  methods: {
    generateTemp() {
      let temps = []
      for (let i = 0; i < 12; i++) {
        let temp = {
          nw1: Math.floor(Math.random() * 1000),
          nw2: Math.floor(Math.random() * 100),
          dw: Math.floor(Math.random() * 1000),
          size: Math.floor(Math.random() * 200 + 200) + 'X' + Math.floor(Math.random() * 300 + 100),
          carton: Math.floor(Math.random() * 30 + 10),
          lid: Math.floor(Math.random() * 3000 + 1000),
          eoe: Math.floor(Math.random() * 3000 + 1000),
        }

        temps.push(temp);
      }
      this.temps = temps
    }
  }
}
</script>

<style lang="scss" scoped>
.size {
  position: relative;
  padding-top: 80px;
  padding-bottom: 50px;

  .size__title {
    position: relative;
    z-index: 1 !important;
    font-size: 60px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.5;
    letter-spacing: 6px;
    text-align: center;
    color: #ddc7a9;
    padding-bottom: 50px;
  }

  .tabs__name {
    font-size: 20px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 2px;
    text-align: right;
    color: #a8a8a8;

    &.v-tab--active {
      font-weight: normal;
      line-height: 1.3;
      color: #f9891b;
    }
  }
  .size__tabs {
    text-align: center;
    .v-tabs-slider {
      height: 9px;
      width: 9px;
      border-radius: 50%;
      display: inline-block;
    }
  }
  .size__slider-bar {
    position: absolute;
    top: 246px;
    left: 31%;
    width: 38%;
    height: 1px;
    border: none;
    background-color: #f9891b;
    color: #f9891b;
  }

  .size__table {
    border-top: solid 3px #f2f2f2;
    border-radius: 0;
    margin-top: 50px;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 1.4px;
    text-align: center;
    color: #6a7990;

    // .v-table tbody tr {
    //   background-color: red;
    // }
  }
}

.size__table .v-table tbody tr:not(:last-child) {
  background-color: red !important;
}

// background rectangle
.rectangle {
  position: absolute;
  width: 100vw;
  height: 100px;
  top: 170px;
  left: 0;
  right: 0;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background-color: #fafafafa;
}

.theme--light.v-tabs .v-tab--active:hover::before,
.theme--light.v-tabs .v-tab--active::before,
.theme--light.v-tabs .v-tab:hover::before {
  opacity: 0;
}
</style>
