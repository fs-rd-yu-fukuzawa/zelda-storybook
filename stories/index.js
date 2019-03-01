import { storiesOf } from '@storybook/vue'

import MyButton from './../src/components/MyButton.vue'

storiesOf('MyButton', module)
  .add('simple', () => ({
    components: { MyButton },
    template: `<my-button>KEEP IT SIMPLE</my-button>`
  }))
