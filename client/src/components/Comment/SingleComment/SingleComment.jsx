import './SingleComment.css';

function SingleComment({ content, formattedCreatedOn, clientUserName }) {
    return (
        <article className="single-comment">
            <p className="single-comment-content">{content}</p>
            <hr />
            <div className="single-comment-info">
                <i className="fas fa-calendar-alt"></i> {formattedCreatedOn}
            </div>
            <p className="single-comment-info">
                <i className="fas fa-user"></i> {clientUserName}
            </p>
        </article>
    );
}

export default SingleComment;