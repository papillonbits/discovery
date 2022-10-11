require('@babel/register')({
  extensions: ['.js', '.jsx'],
  ignore: [],
})

require('whatwg-fetch')

require('./clientRenderApp')
