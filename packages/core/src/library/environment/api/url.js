import { currentHost, localHost, stagingHosts, productionHost } from '../host'

const protocol = 'http://'

const urls = Object.freeze({
  local: `${protocol}${stagingHosts.acceptance.prefix}${stagingHosts.acceptance.slug}`,
  test: `${protocol}${stagingHosts.test.prefix}${stagingHosts.test.slug}`,
  acceptance: `${protocol}${stagingHosts.acceptance.prefix}${stagingHosts.acceptance.slug}`,
  production: `${protocol}${productionHost.prefix}${productionHost.slug}`,
})

export function getBaseUrl() {
  let baseUrl

  if (currentHost === localHost) {
    baseUrl = urls.local
  }

  if (currentHost === stagingHosts.test.href) {
    baseUrl = urls.test
  }

  if (currentHost === stagingHosts.acceptance.href) {
    baseUrl = urls.acceptance
  }

  if (currentHost === productionHost.href) {
    baseUrl = urls.production
  }

  return baseUrl
}
