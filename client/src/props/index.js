import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./props/components/CommentDetail";
import ApprovalCard from "./props/components/ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Debi"
                    timeAgo="Today at 4:45pm"
                    image={faker.image.avatar()}
                    comment="Nice blog post!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Prasad"
                    timeAgo="Today at 3:00pm"
                    image={faker.image.avatar()}
                    comment="I like your post."
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Mishra"
                    timeAgo="Yesterday at 9:00pm"
                    image={faker.image.avatar()}
                    comment="Beautiful work, keep it up!"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));

/* 
    Semantic ui for styling
    https://cdnjs.com/libraries/semantic-ui

    faker.js to generate fake data
    https://github.com/marak/Faker.js/

*/
