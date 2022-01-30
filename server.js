const express=require('express');
const app=express();
const fs=require('fs');

const port=process.env.PORT||3000;

//read operation
app.get('/getmember',(req,res)=>{
fs.readFile(__dirname+"/member.json",'utf8',(err,data)=>{
    console.log(data);
    res.end(data)
});
})


    //add operation  create
    var member=
    {
        "member5":
    {
        "id":5,
        "fname":"Jene",
        "lname":"Singh",
        "email":"singh@gamil.com"
    }
    }
    app.post('/addmember',(req,res)=>{
        fs.readFile(__dirname+ "/member.json",'utf8',(err,data)=>{
            data=JSON.parse(data);
            data["member5"]=member["member5"];
            console.log(data);
            res.end(JSON.stringify(data))
        });
    })

    // delete operation
    app.delete("/deletemember", (req, res) => {
        fs.readFile(__dirname+ "/member.json",'utf8',(err,data)=>{
          data = JSON.parse(data);
          delete data["member" + 4];
          console.log(data);
          res.end(JSON.stringify(data));
        });
      })

// find by id
app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "member.json", 'utf8', function (err, data) {
      var members = JSON.parse( data );
      var member = members["member4" + req.params.id] 
      console.log( member );
      res.end( JSON.stringify(member));
   });
})
   
  app.listen(port);
  console.log("Check local host at port 3000");






