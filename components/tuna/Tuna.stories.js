import { storiesOf } from '@storybook/vue'
import store from '@/.storybook/store'
import Thumnail from '@/components/tuna/Thumnail'
import Species from '@/components/tuna/Species'
import Meat from '@/components/tuna/Meat'
import Media from '@/components/tuna/Media'
import Size from '@/components/tuna/Size'

storiesOf('Tuna', module)
  .add('Thumnail', () => ({
    components: { Thumnail },
    template: '<Thumnail />',
  }))
  .add('Species', () => ({
    components: { Species },
    store: store,
    template: '<Species />',
  }))
  .add('Meat', () => ({
    components: { Meat },
    template: '<Meat />',
  }))
  .add('Media', () => ({
    components: { Media },
    template: '<Media />',
  }))
  .add('Size', () => ({
    components: { Size },
    template: '<Size />',
  }))
