import React from "react";
import ArticlesContent from './article-content'
import NotFound from "./NotFoundPage";
import ArticlesList from "../components/ArticlesList";


const ArticlePage = ({match}) => {
    const name = match.params.name
    const article = ArticlesContent.find(article => article.name === name)
    if(!article) return <NotFound />
    const otherArticles = ArticlesContent.filter(article => article.name !== name)
    return (
        <>
            <h1>Article {article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}

            <ArticlesList articles={otherArticles}/>
        </>

    )
}


export default ArticlePage
