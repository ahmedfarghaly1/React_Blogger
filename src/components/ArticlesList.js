import React from "react";
import {Link} from 'react-router-dom'

const ArticlesList = ({articles}) => (
    <>
        { articles.map((article, key) => (
            <Link className="article-list-item" to={`/article/${article.name}`} key={key}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0,50)} ...</p>
            </Link>

        ))}
    </>
)


export default ArticlesList
