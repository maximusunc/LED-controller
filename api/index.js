const router = require('express').Router();
const SerialPort = require('serialport');
const port  = new SerialPort('/dev/ttyACM0', { baudRate: 9600 });

router.get('/', (req, res) => {
  const { pixelNum, r, g, b } = req.query;
  port.write(`<${pixelNum};${r},${g},${b}>`);
  res.send(200);
});

module.exports = router;
