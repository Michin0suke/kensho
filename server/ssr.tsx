import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '#/components/App'
import H from 'history'

const ssr = (history: H.History): string => (`
  <html>
    <head>
      <title>Kensho</title>
      <meta charset="utf-8"/>
    </head>
    <body>
      <div id="app">
        ${renderToString(<App history={history} />)}
      </div>
      <script src="./client.js"></script>
    </body>
  </html>
`)

export default ssr
