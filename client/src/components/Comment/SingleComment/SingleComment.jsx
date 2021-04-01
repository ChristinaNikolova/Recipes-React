import './SingleComment.css';

function SingleComment({ content, formattedCreatedOn, clientUserName }) {
    return (
        <article className="post post-content">
            <div className="single-comment-wripper">
                <p className="comment-content">{content}</p>
                <hr />
                <div className="info">
                    <i className="fas fa-calendar-alt"></i> {formattedCreatedOn}
                </div>
                <div className="info">
                    <i className="fas fa-user"></i> {clientUserName}
                </div>
            </div>
        </article>
    );
}

export default SingleComment;