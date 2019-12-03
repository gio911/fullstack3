const app = require('./app')
const port = process.env.PORT || 3000

app.listen(port, ()=>console.log(`app start on port ${port}`))