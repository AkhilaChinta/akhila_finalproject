const http=require("http");
const fs = require("fs");
const path = require("path");
const {MongoClient} = require("mongodb");

// Port number that server listens to
const PORT = 3891;

//Fetches records from given database
async function getTaskDetails(client){
    const cursor = client.db("TaskSchedulerdb").collection("TaskDetails").find({});
    const results = await cursor.toArray();
    return results;
};

http.createServer(async (req,res)=>{
    if(req.url ===  "/api"){
        const uri ="mongodb+srv://achin15:Akhila%40123@taskcluster.23nzttq.mongodb.net/?retryWrites=true&w=majority&appName=TaskCluster";
        const client = new MongoClient(uri);
        try {
            // Connect to the MongoDB cluster
            await client.connect();
            console.log("Database Connection happened here");
            const tasksData = await getTaskDetails(client);
            res.setHeader("Access-Control-Allow-Origin","*");
            res.writeHead(200,{"content-type":"application/json"});
            res.end(JSON.stringify(tasksData));
        } catch (e) {
            console.error("Error in connecting database",e);
        } finally {
            await client.close();
            console.log( "We closed the connection ");
        }
    }
    else if(req.url === "/"){
        fs.readFile(path.join(__dirname,"public","index.html"),(err,content)=>{
            if(err){
                console.log(err);
            }
            else{
                res.writeHead(200,{"content-type":"text/html"});
                res.end(content);
            }
        })
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 Page Not Found!</h1>");
    }

}).listen(PORT,()=>console.log(`Server is running on ${PORT}`));