import { version } from '../lerna.json'
import { setStorybookManagerSetup } from '@papillonbits/setup/storybook/managerSetup'

setStorybookManagerSetup({
  panelPosition: 'right',
  theme: {
    base: 'light',
    brandTitle: `Discovery v${version}`,
    brandUrl: 'https://github.com/papillonbits/discovery',
    brandImage: 'https://avatars2.githubusercontent.com/u/81188645',
  },
})
