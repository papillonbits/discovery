import { getWebpackProductionSetup } from '@papillonbits/setup/webpack'
import { environmentVariablesFilePaths, micrositeFolderPaths, micrositeUrlPaths } from './webpack.constant.babel'
import { webpackCommonSetup } from './webpack.common.babel'
import packageJSON from '../../../package.json'

export default getWebpackProductionSetup({
  webpackCommonSetup,
  environmentVariablesFilePath: environmentVariablesFilePaths.test,
  micrositeUrlPath: micrositeUrlPaths.test,
  micrositeFolderPaths,
  packageJSON,
})
