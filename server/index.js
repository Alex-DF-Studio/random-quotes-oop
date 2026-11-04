const express = require('express')
const quotes = require('./data/quotes')
const app = express()
const PORT = 3000

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const quote = quotes[randomIndex]
  return quote
}

app.get('/quote/rendom-single', (req, res) => {
  const randomQuote = getRandomQuote()
  res.json(randomQuote)
})

app.listen(PORT, () => {
  console.log(`Quotes API service is running on port ${PORT}`)
})
