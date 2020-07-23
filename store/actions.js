export default {
  async GET_SPECIES({}) {
    return await this.$axios.get(`${process.env.SPECIES_ENDPOINT}`)
  },
}
