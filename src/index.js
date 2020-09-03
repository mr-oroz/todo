import React from 'react';
import ReactDOM from 'react-dom';

const Blog = (props) => {
    return (
        <div>
            <div className="card" style={{width: '200px', display: "flex"}}>
                <img className="card-img-top"
                     src="https://i.pinimg.com/originals/57/66/74/576674777c929c18f612c451ab934707.jpg"
                     alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                </div>
            </div>
        </div>
)
}
const Projects = () => {
    return (
        <div>
            <Blog title='text'/>
            <Blog/>
            <Blog/>
            <Blog/>
        </div>
)
}
ReactDOM.render(
<Projects/>,
  document.getElementById('root')
);
