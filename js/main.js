var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h3>
                    {this.props.author}
                </h3>
                <h4 className="alert alert-warning">
                    {this.props.children}
                </h4>
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                <Comment author="John">First...</Comment>
                <Comment author="Mary">Second...</Comment>
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return(
            <div className="commentForm">
                CommentForm
            </div>
        );
    }
});

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h2>Comments</h2>
                <CommentList />
                <h2>Add a Comment</h2>
                <CommentForm />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);