const swaggerAutogen = require('swagger-autogen')(); 

const doc= {
    info: {
        title:'Users Api',
        descripition: 'Users Api'
    },
    host: 'localhost: 3001',
    schemes: ['https','http']    
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];


// This will generate swagger.json

swaggerAutogen(outputFile, endpointFiles, doc);
