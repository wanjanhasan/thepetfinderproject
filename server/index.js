import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'

import multer from 'multer'


const app = express()
app.use(express.json())
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/tpfp', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => {
    console.log('DB connected')
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model('User', userSchema)

const port=9003
//Routes

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: false,
        },
        username: {
            type: String,
            required: true,
        },
        categories: {
            type: Array,
            required: false,
        },
    },
    { timestamps: true }
);

const Post = new mongoose.model('Post', PostSchema);
//Routes




//CREATE POST
app.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE POST
app.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can update only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE POST
app.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can delete only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET POST
app.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL POSTS
app.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName],
                },
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, "hello.jpeg");
    },
});
const upload = multer({ storage: storage });
app.post("/server/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});







app.post('/login', (req, res)=> {
    const {email, password} = req.body
    User.findOne({email: email}, (error, user) => {
        if(user){
            if(password===user.password) {
                res.send({message: 'Login Successful', user: user})
            }
            else {
                res.send({message: 'Password did not match'})
            }
        }
        else {
            res.send({message:'User not registered'})
        }
    })
})

app.post('/signup', (req, res)=> {
    const {name, email, password} = req.body
    User.findOne({email: email}, (error, user) => {
        if(user){
            res.send({message: 'User already registered'})
        }
        else {
            const user=new User({
                name,
                email,
                password
            })
            user.save(error => {
                if(error) {
                    res.send(error)
                }
                else {
                    res.send( { message: 'Signed up successfully'})
                }
            })
        }
    })
    
})

//articles portion

const articleSchema=new mongoose.Schema({
    //authorName: String,
    //authorEmail: String,
    title: String,
    articleBody: String
})

const Article = new mongoose.model('Article', articleSchema)

app.post('/articles', (req, res)=> {
    const {title, articleBody} = req.body
    const article=new Article({
        title, 
        articleBody
    })
    article.save(error => {
        if(error) {
            res.send(error)
        }
        else {
            res.send( { message: 'Submitted article successfully'})
        }
    })

    
})

//fetching articles


app.listen(port, () => {
    console.log('Server started at', port)
})



