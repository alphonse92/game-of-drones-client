var express = require('express');
var app = express();

app
	.use((req,res,next)=>{
		console.log("REQUESTING TO: ",req.protocol + '://' + req.get('host') + req.originalUrl)
		next();
	})
	.use(express.static('dist'));
app.listen(4200,()=>console.log("listening"));