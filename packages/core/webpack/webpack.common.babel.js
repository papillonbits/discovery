import { getWebpackCommonSetup } from '@papillonbits/setup/webpack'
import { micrositeFolderPaths } from './webpack.constant.babel'
import packageJSON from '../../../package.json'

export const webpackCommonSetup = getWebpackCommonSetup({ micrositeFolderPaths, packageJSON })
