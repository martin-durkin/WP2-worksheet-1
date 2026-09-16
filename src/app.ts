import express, {Application, Request, Response} from "express" ; 

 

const PORT = process.env.PORT || 4000; 

 

const app: Application = express(); 

app.get("/ping", async (_req : Request, res: Response) => { 
     res.json({ 

    message: "hello from Martin "

    }); 

}); 

app.get('/bananas', async (_req : Request, res: Response) => { 

    res.json({ 

    message: "this is bananas", 

    }); 

}); 

app.get('/pineapples', async (_req : Request, res: Response) => { 

    res.json({ 

    message: "this is pineapples", 

    }); 

}); 

app.get('/fun', async (_req : Request, res: Response) => { 

    res.json({ 

    message: "this is fun", 

    }); 

}); 


app.use((req, _res, next) => {   

    console.log(`${req.method} ${req.originalUrl}`); 

    next(); 

}); 



 

app.listen(PORT, () => { 

    console.log("Server is running on port", PORT); 

    }); 

 