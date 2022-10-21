const path = require('path')
const getStorybookMainSetup = require('@papillonbits/setup/storybook').getStorybookMainSetup

const storiesBasePath = path.resolve(__dirname, '../packages/core/src/**/**/**/__tests__/*.int.story.@(js|mdx)')
const includeBasePath = path.resolve(__dirname, '../packages/core/src/**/**/**/__tests__/*')
const modulesBasePath = path.resolve(__dirname, '../packages')

module.exports = getStorybookMainSetup({ storiesBasePath, includeBasePath, modulesBasePath })
