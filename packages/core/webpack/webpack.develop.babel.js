import { getWebpackDevelopmentSetup } from '@papillonbits/library/webpack'
import { environmentVariablesFilePaths, micrositeFolderPaths, micrositeUrlPaths, includedSourceFilePaths } from './webpack.constant'
import { webpackCommonSetup } from './webpack.common'

export default getWebpackDevelopmentSetup({
  webpackCommonSetup,
  environmentVariablesFilePath: environmentVariablesFilePaths.development,
  micrositeUrlPath: micrositeUrlPaths.development,
  micrositeFolderPaths,
  includedSourceFilePaths,
})
