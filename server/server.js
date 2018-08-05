import express from 'express'
import path from 'path'
import { MongoClient } from 'mongodb'
import template from './../template'
// don't use when building for production
import devBundle from './devBundle'

const app = express()
// don't use when building for production
devBundle.compile(app)

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
    res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
    console.info('Server started on port %s.', port)
})

// Database connection
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'
// connect to server
MongoClient.connect(url, (err, db) => {
    console.log("Connected to mongodb server!")
    db.close()

})