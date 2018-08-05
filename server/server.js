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