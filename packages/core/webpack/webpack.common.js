import { getWebpackCommonSetup } from '@papillonbits/library/webpack'
import { micrositeFolderPaths } from './webpack.constant'
import packageJSON from '../package.json'

export const webpackCommonSetup = getWebpackCommonSetup({ micrositeFolderPaths, packageJSON })
