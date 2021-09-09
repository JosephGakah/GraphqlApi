const {DataStore} = require("notarealdb");
const store = new DataStore(.. /./Data);

module.exports = {
  students: store.collection('students'), 
  University: store.collection('University')
}