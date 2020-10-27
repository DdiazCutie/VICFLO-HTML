    const express = require('express');
    const app = express();
    
    app.get ('/', (req, res) => {
        res.send('index.html')
    });

    app.listen(3000);
