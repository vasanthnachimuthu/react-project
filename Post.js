import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './mystyle.css';
import Comments from './Comments';

function Post() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                setPost(response.data);
            })
            .catch(error => {
                setPost([]);
            });
    }, []);

    return (
        <div className='container'>
            {posts.map(post => (
                <div key={post.id} className='row'>
                    <div className="col mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <div className="card-divider"></div>
                                <p className="card-text">{post.body}</p>
                                <Comments />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Post;
