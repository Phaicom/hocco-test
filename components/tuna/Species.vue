<template>
  <div class="species">
    <h1 class="species__title">SPEICIES</h1>
    <vueper-slides
      ref="speciesSlides"
      class="no-shadow mb-0"
      :visible-slides="3"
      :slide-ratio="1 / 4"
      :dragging-distance="70"
      :bullets="false"
      :arrows="false"
      fixed-height="420px"
    >
      <vueper-slide
        v-for="
      specie
      in
      species"
        :key="specie.id"
      >
        <template v-slot:content>
          <div class="mx-5 my-10 specie">
            <div class="pa-7 ml-15 specie__description">
              <h3 class="specie__name primary--text">{{specie.name}}</h3>
              <h3 class="specie__formal_name">({{specie.formal_name}})</h3>
            </div>
            <v-img
              :src="'https://hocco-frontend-test.hocco.co'+specie.image.url"
              alt=""
              class="specie__image"
            ></v-img>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col md="6">
        <v-btn
          text
          small
          color="primary"
          class="pa-0 slides__btn"
          @click="$refs.speciesSlides.previous()"
        >
          <v-icon left>mdi-chevron-left</v-icon>PREV
        </v-btn>
      </v-col>
      <v-col
        md="6"
        :style="'text-align:right'"
      >
        <v-btn
          text
          small
          color="primary"
          class="pa-0 slides__btn"
          @click="$refs.speciesSlides.next()"
        >
          NEXT<v-icon right>mdi-chevron-right</v-icon>
        </v-btn>
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
      species: []
    }
  },
  mounted() {
    this.loadSpecies()
  },
  methods: {
    loadSpecies() {
      this.$store.dispatch('GET_SPECIES')
        .then(res => {
          this.species = res.data
        })
        .catch(err => {
          console.log('API error')
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.species {
  position: relative;
  margin-bottom: 100px;

  .species__title {
    position: relative;
    z-index: 1 !important;
    margin-bottom: 120px;
    font-size: 50px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.6;
    letter-spacing: 5px;
    text-align: left;
    color: #ddc7a9;
  }

  .specie {
    height: 340px;

    .specie__description {
      background-color: white;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
      height: 100%;
      margin: auto;

      .specie__name {
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.3;
        letter-spacing: 2px;
        text-align: left;
      }

      .specie__formal_name {
        font-size: 20px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: 2px;
        text-align: left;
        color: #939393;
      }
    }

    .specie__image {
      width: 313px;
      position: absolute;
      top: 150px;
    }
  }
}

// override vueperslide css
.vueperslide {
  transition: 0.3s ease-in-out;
  transform: scale(1);
  &.vueperslide--active {
    transform: scale(1.1);
  }
}

.slides__btn {
  font-size: 1.25em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: 2px;
  text-align: left;
}

// background rectangle
.rectangle {
  position: absolute;
  width: 100vw;
  height: 370px;
  top: 12px;
  left: 0;
  right: 0;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background-color: #fafafa;
}
</style>
