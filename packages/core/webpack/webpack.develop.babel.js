import { getWebpackDevelopmentSetup } from '@papillonbits/setup/webpack'
import { environmentVariablesFilePaths, micrositeFolderPaths, micrositeUrlPaths, includedSourceFilePaths } from './webpack.constant.babel'
import { webpackCommonSetup } from './webpack.common.babel'

export default getWebpackDevelopmentSetup({
  webpackCommonSetup,
  environmentVariablesFilePath: environmentVariablesFilePaths.development,
  micrositeUrlPath: micrositeUrlPaths.development,
  micrositeFolderPaths,
  includedSourceFilePaths,
})
