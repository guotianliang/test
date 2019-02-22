var http=require("http")
var url=require("url")

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    var obj=url.parse(req.url,true).query
    if(req.url==="/favicon.ico"){
        return
    }
    if(obj.username=="123456"&&obj.password=="1111"&&obj.test=="0000"){
        res.end("登录成功,欢迎您回来"+obj.username)
    }else{
        res.end("登录失败 密码或验证码错误")
    }
    
}).listen(3000)