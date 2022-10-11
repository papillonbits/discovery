import { getWebpackProductionSetup } from '@papillonbits/library/webpack'
import { environmentVariablesFilePaths, micrositeFolderPaths, micrositeUrlPaths } from './webpack.constant'
import { webpackCommonSetup } from './webpack.common'
import packageJSON from '../package.json'

export default getWebpackProductionSetup({
  webpackCommonSetup,
  environmentVariablesFilePath: environmentVariablesFilePaths.release,
  micrositeUrlPath: micrositeUrlPaths.release,
  micrositeFolderPaths,
  packageJSON,
})
