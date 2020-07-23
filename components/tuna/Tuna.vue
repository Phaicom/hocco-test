<template>
  <div>
    <Thumnail />
    <Species />
    <Meat />
    <Media />
    <Size />
  </div>
</template>

<script>
import Thumnail from '@/components/tuna/Thumnail'
import Species from '@/components/tuna/Species'
import Meat from '@/components/tuna/Meat'
import Media from '@/components/tuna/Media'
import Size from '@/components/tuna/Size'

export default {
  components: {
    Thumnail,
    Species,
    Meat,
    Media,
    Size
  }
}
</script>
