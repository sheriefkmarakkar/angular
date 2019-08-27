const ex=require('Express')
var app=ex();


var bodyparser=require('body-parser')

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());



app.listen(8080,function(req,res){
    console.log("server Started");
})


