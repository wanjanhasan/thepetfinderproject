import React, {useState, setState} from "react"
import "./article.css"
import axios from "axios"

const Article=() => {

    const [ article, setArticle ]=useState({
        title: "",
        articleBody: ""
    })

    const reset = () => {
        setState({
            title: '',
            articleBody: ''
        })
    }

    const handleChange= e => {
        const {name, value}=e.target
        setArticle({
            ...article,
            [name]:value
        })
    }

    const articlepost = () => {
        const {title, articleBody}=article
        axios.post("http://localhost:9003/articles", article)
        .then(res => alert(res.data.message))
        reset()

    }

    return (
        <div className="createArticlePage">
          {console.log("Article", article)}
          <h1>Post Article</h1>
              <input type="text" name="title" value={article.title} placeholder="Enter the title of your article" onChange={handleChange}></input>
              <div>
                <textarea name="articleBody" value={article.articleBody} placeholder="Type your article" onChange={handleChange}></textarea>
              </div>
            <button className="button" onClick={articlepost}>Post</button> 
                       
        </div>
    )
        

}


export default Article