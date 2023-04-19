const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app)

// See: http://expressjs.com/en/4x/api.html#app.settings.table
const PRODUCTION = app.get('env') === 'production';

// Administrative routes are not timed or logged, but for non-admin routes, pino
// overhead is included in timing.
app.get('/ready', (req, res) => res.status(200).json({status:"ok"}));
app.get('/live', (req, res) => res.status(200).json({status:"ok"}));
app.get('/metrics', async (req, res, next) => {
  const metrics = await Prometheus.register.metrics();
  res.set('Content-Type', Prometheus.register.contentType)
  res.end(metrics);
})


app.get('/', (req, res) => {
  res.send('Hello from Node.js Starter Application!');
});

app.get('*', (req, res) => {
  res.status(404).send("Not Found");
});

// Listen and serve.
server.listen(PORT, () => {
  console.log(`App started on PORT ${PORT}`);
});
