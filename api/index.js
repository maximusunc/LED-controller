const router = require('express').Router();
const SerialPort = require('serialport');
const port  = new SerialPort('/dev/ttyACM0', { baudRate: 9600 });

router.post('/change', (req, res) => {
  const { r, g, b } = req.body;
  port.write(`<${r},${g},${b}>`);
  res.sendStatus(200);
});

module.exports = router;
