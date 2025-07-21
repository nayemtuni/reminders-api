import express from 'express';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';

const app = express()
const port = process.env.PORT || 3000

console.log('new version');
console.log(`Server is running on port ${process.env.PORT}`);

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('Home page is working')
})

app.use('/reminders', (req, res) => {
  res.status(200).json({ message: 'Reminders endpoint' })
})

app.get('/health', (req, res) => {
  res.status(200).send('OK')
})

app.use(errorHandlerMiddleware)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})