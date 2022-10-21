import { getWebpackCommonSetup } from '@papillonbits/setup/webpack'
import { micrositeFolderPaths } from './webpack.constant'
import packageJSON from '../../../package.json'

export const webpackCommonSetup = getWebpackCommonSetup({ micrositeFolderPaths, packageJSON })
