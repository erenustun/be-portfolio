import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = Number(process.env.APP_PORT)

app.get('/', (_, res) => {
  res.status(200).send()
})

app.listen(port, 'localhost', () =>
  console.log(`server started on http://localhost:${port}`)
)

export {}
