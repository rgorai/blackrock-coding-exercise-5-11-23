const express = require('express')
const axios = require('axios')

const PORT = 3000

const app = express()
app.use(express.json())

app.all('*', async (req, res) => {
  try {
    // handle request
    console.log('Received request to', req.url)

    // complete request
    const { status, data } = await axios(req)
    return res.status(status).json(data)
  } catch (error) {
    return res.sendStatus(500)
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
