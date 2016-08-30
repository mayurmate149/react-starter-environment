import React from 'react';

class SimpleComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {likesCount: 0};
        this.onLike = this.onLike.bind(this);
        this.onUnLike = this.onUnLike.bind(this);
    }

    onLike() {
        let newLikesCount = this.state.likesCount + 1;
        this.setState({likesCount: newLikesCount});
    }

    onUnLike() {
        let newLikesCount = this.state.likesCount - 1;
        this.setState({likesCount: newLikesCount});
    }

    render() {
        return (
            <div>
                <h4> Number of Likes to this project </h4>
                <h4 className="margin-top-10"> Like : <span className="red">{this.state.likesCount}</span></h4>

                <div className="margin-top-10">
                    <button className="btn pull-left" onClick={this.onLike}>Like</button>
                    <button className="btn pull-left" onClick={this.onUnLike}>Unlike</button>
                </div>

            </div>
        );
    }

}

export default SimpleComponent;