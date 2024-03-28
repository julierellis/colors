//set up an express http server on the local machine, on port 8080.
const express = require('express');
const app = express();
const path = require('node:path');

const port = 8080;

app.use(express.static('public'));
app.use(express.urlencoded({extended: false})); 

const { colors } = require('./public/TypeColorCodes.js')


//the following command never executes if there is a index.html file in public
app.get('/',(req,res)=>{
	console.log(req.method);
//	console.log(__dirname);
	res.json(colors)
	
// 	res.sendFile(path.resolve(__dirname,'./HWHaiku.txt'));
//	res.end();
})

app.post('/', (req, res)=>{
	//console.log(req.body);
	const {name, coreType} = req.body;

	if (!name){
			res.sendFile(path.resolve(__dirname,'./public/TypeColors.jpg'));
	} else {
		const yourColor = colors[Number(coreType)-1].colorName;
		const yourCode = colors[Number(coreType)-1].hexCode;
		
		res.send(`<h1 style="color:${yourCode}">Hello, ${name}! <br>The color we use for ${coreType}s is ${yourColor}.<H1>`)
	}
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
