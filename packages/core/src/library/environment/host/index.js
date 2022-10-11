export const currentHost = window.location.href?.split('://')?.[1]?.split('-')?.[0]?.split(':')?.[0]

export const localHost = 'localhost'

export const stagingHosts = Object.freeze({
  test: {
    href: 'test',
    prefix: 'test',
    slug: '/api',
  },
  acceptance: {
    href: 'acceptance',
    prefix: 'acceptance',
    slug: '/api',
  },
})

export const productionHost = {
  href: 'production',
  prefix: 'production',
  slug: '/api',
}

export const isRunningOnLocalHost = currentHost === localHost

export const isRunningOnStaging = currentHost === stagingHosts.test.href || currentHost === stagingHosts.acceptance.href

export const isRunningOnProduction = currentHost === productionHost.href
