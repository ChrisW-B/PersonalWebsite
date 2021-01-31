const { zipFunctions } = require('@netlify/zip-it-and-ship-it');

zipFunctions('dist', 'functions');
