const express = requrie('express');
const app = express();4


app.get('/', (req, res) =>{
  res.send('Hello Wolrd!')
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
})