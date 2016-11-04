module.exports = async function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://app.l3.wtf');
  return {message: 'This is a message!', timestamp: new Date().toISOString()}
}