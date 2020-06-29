import React,{useState,useEffect} from "react";
import ArticlesContent from './article-content'
import NotFound from "./NotFoundPage";
import ArticlesList from "../components/ArticlesList";
import CommentsList from "./CommentsList";
import UpVotesSection from '../components/UpVotesSection'
import AddCommentForm from "../components/AddCommentForm";

const ArticlePage = ({match}) => {
    const name = match.params.name
    const article = ArticlesContent.find(article => article.name === name)
    const [articleInfo, setArticleInfo] = useState({upvotes : 0, comments: []});
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`)
            const body  = await result.json()
            setArticleInfo(body)
        }
        fetchData()
    }, [name]);

    if(!article) return <NotFound />
    const otherArticles = ArticlesContent.filter(article => article.name !== name)
    return (
        <>
            <h1>Article {article.title}</h1>
            <UpVotesSection upvotes={articleInfo.upvotes} articleName={name} setArticleInfo={setArticleInfo}/>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={articleInfo.comments}/>
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <ArticlesList articles={otherArticles}/>
        </>

    )
}


export default ArticlePage
