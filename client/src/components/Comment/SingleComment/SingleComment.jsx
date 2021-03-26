import './SingleComment.css';

function SingleComment({
    content,
    formattedCreatedOn,
    clientUserName
}) {
    return (
        <div className="single-comment-wripper">
            <p className="comment-content">{content}</p>
            <div className="info">
                <i className="fas fa-calendar-alt"></i> {formattedCreatedOn}
            </div>
            <div className="info">
                <i className="fas fa-user"></i> {clientUserName}
            </div>
        </div>
    );
}

export default SingleComment;