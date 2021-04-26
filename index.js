const SerialPort = require('serialport');
const port  = new SerialPort('/dev/ttyACM0', { baudRate: 9600 });

function send_data() {
  const secs = Math.random() * 10 * 1000;
  setTimeout(() => {
    const pixelNum = Math.floor(Math.random() * 50);
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    port.write(`<${pixelNum};${r},${g},${b}>`);
    send_data();
  }, secs);
}

send_data();
