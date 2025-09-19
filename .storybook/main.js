import path from 'path'
import { getStorybookMainSetup } from '@papillonbits/setup/storybook/mainSetup'

const storiesBasePath = path.resolve(__dirname, '../packages/core/src/**/**/**/__tests__/*.int.story.@(js|jsx|mdx|mjs)')
const includeBasePath = path.resolve(__dirname, '../packages/core/src/**/**/**/__tests__/*')
const modulesBasePath = path.resolve(__dirname, '../packages')

export default getStorybookMainSetup({ storiesBasePath, includeBasePath, modulesBasePath, rootAttributesDefaults: true })
