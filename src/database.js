const mongoose = require('mongoose')
const URI = ('mongodb://localhost/mern-tasks')
mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
    .then(db=> console.log('DB is connected'))
    .catch(err => console.log(err))

module.exports = mongoose