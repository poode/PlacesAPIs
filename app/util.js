const swaggerJSDoc = require('swagger-jsdoc');
const package = require('../package.json')

/**
 * 
 * @param  { Request } req 
 * @param  {{url: string}} options 
 * @return { 'Swagger Object as a json' }
 */
function swaggerDocs(req, options) {
    return swaggerJSDoc({
        // import swaggerDefinitions
        swaggerDefinition: {
          info: {
            title: 'Places API',
            version: package.version,
            description: 'Places - RESTful API'
          },
          host: options ? options.url : `${req.hostname}:${process.env.PORT | 3000}`,
          basePath: '/'
        },
        // path to the API docs
        apis: ['./**/router/*.js'] // pass all in array
      })
}

module.exports = {
  swaggerDocs
}
