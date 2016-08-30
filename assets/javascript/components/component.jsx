import React from 'react';

class SimpleComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {likesCount : 0};
        this.onLike = this.onLike.bind(this);
        this.onUnLike = this.onUnLike.bind(this);
    }

    onLike () {
        let newLikesCount = this.state.likesCount + 1;
        this.setState({likesCount: newLikesCount});
    }

    onUnLike () {
        let newLikesCount = this.state.likesCount - 1;
        this.setState({likesCount: newLikesCount});
    }

    render() {
        return (
            <div>
                Number of Likes : <span>{this.state.likesCount}</span>
                <div><button onClick={this.onLike}>Like</button></div>
                <div><button onClick={this.onUnLike}>Unlike</button></div>
            </div>
        );
    }

}

export default SimpleComponent;