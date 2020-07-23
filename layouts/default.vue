<template>
  <v-app>

    <v-container
      px-0
      class="pt-10 pb-7 header"
    >
      <v-col
        class="pa-0 ma-0 text-left"
        cols="12"
      >
        <v-btn
          text
          small
          color="primary"
          class="pl-0 header__btn"
        >
          <v-icon left>mdi-chevron-left</v-icon>BACK
        </v-btn>
      </v-col>
    </v-container>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      padless
      color="#041225"
    >
      <v-col
        class="py-7 text-center"
        cols="12"
      >
        <span class="footer__text">Copyright © A.E.C. CANNING COMPANY LIMITED 2017</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
$break-small: 600px;

.header {
  border-bottom: solid 1px var(--v-primary-base);
  .header__btn {
    font-size: 1.25em;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: 2px;
    text-align: left;
  }
}

.footer__text {
  font-size: 1.25em;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 2px;
  color: white;

  @media screen and (max-width: $break-small) {
    font-size: 0.75em;
  }
}
</style>
