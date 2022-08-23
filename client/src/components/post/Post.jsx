import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img }) {
    return (
        <div className="post">
            <img
                className="postImg"
                src={img}
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Music">
                            
                        </Link>
                    </span>
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Music">
                           
                        </Link>
                    </span>
                </div>
                <span className="postTitle">
                    <Link to="/post/abc" className="link">
                        Buttercup needs another home!
                    </Link>
                </span>
                <hr />
                <span className="postDate">few hour ago</span>
            </div>
            <p className="postDesc">
                Such a cute and happy cat one can find. Although he needs 24/7 care. Interested people can contact here: 01992228873
            </p>
        </div>
    );
}