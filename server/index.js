const express = require('express')
const cors = require('cors')
const quotes = require('./data/quotes')
const app = express()
const PORT = 3000

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const quote = quotes[randomIndex]
  return quote
}

const corsQptions = {
  origin: '*',
  // origin: ['http://localhost:8080', 'http://127.0.0.1:8080'],
}

app.use(cors(corsQptions))

// my
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080')
//   res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

//   if (req.method === 'OPTIONS') {
//     return res.sendStatus(204)
//   }

//   next()
// })

app.get('/quote/rendom-single', (req, res) => {
  const randomQuote = getRandomQuote()
  res.json(randomQuote)
})
app.listen(PORT, () => {
  console.log(`Quotes API service is running on port ${PORT}`)
})
