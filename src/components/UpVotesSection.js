import React from "react";

const UpVotesSection = ({articleName, upvotes, setArticleInfo}) => {
    const upVote = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method:'POST'
        })
        const body = await result.json()
        setArticleInfo(body)
    }
    return (
        <div id="upvotes-section">
            <button onClick={() => upVote()}>UpVote</button>
            <p>This Post has {upvotes} Times</p>

        </div>
    )

}

export default UpVotesSection
