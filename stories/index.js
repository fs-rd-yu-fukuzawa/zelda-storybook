import { storiesOf } from '@storybook/vue'

import VButton from './../src/components/base/VButton.vue'
import MyButton from './../src/components/MyButton.vue'

storiesOf('MyButton', module)
  .add('simple', () => ({
    components: { MyButton },
    template: `<my-button>KEEP IT SIMPLE</my-button>`
  }))
  .add('vbotton', () => ({
    components: { VButton },
    template: `<v-button>TEST</v-button>`
  }))
