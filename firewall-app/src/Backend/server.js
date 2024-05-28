// backend/server.js
const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 5000;

app.post('/api/mlScript', (req, res) => {
  exec('python -u "d:\\FW-Project\\WebAppFirewall-with-ML\\gui.py"', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      res.status(500).send('Error executing script');
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      res.status(500).send('Script returned an error');
      return;
    }
    console.log(`stdout:\n${stdout}`);
    res.send(stdout); // Send script output to the client
  });
});

app.post('/api/xss', (req, res) => {
  exec('python "D:\\FW-Project\\Network-Fortification\\sqlmap-master\\sqlmap.py" -u "https://vulnhub.com" --depth 1', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      res.status(500).send('Error executing script');
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      res.status(500).send('Script returned an error');
      return;
    }
    console.log(`stdout:\n${stdout}`);
    res.send(stdout); // Send script output to the client
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
