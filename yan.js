var http=require("http")
var url=require("url")
var fs=require("fs")
var data=require("./data")

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    var obj=url.parse(req.url,true).query
    if(req.url==="/favicon.ico"){
        return
    }
    // fs.appendFile("./data.js",`jsonStr[${obj.username}]=${obj.password};`,(err)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         res.end("注册成功")
    //     }
    // })
    if(obj.password==data.jsonStr[obj.username]&&obj.test=="0000"){
        res.end("登录成功,欢迎您回来"+obj.username)
    }else{
        res.end("登录失败 密码或验证码错误")
    }
    
}).listen(3000)