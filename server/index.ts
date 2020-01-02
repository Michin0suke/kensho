import express from 'express'
import ssr from './ssr'
import { createBrowserHistory } from 'history'

const app = express()

app.listen('3000')

const history = createBrowserHistory()

app.get('', (_, res) => res.send(ssr(history)))
