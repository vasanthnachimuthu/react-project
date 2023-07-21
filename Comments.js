import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Comments() {
    const [comment, setComments] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => {
                console.log(response);
                setComments(response.data);
            })
            .catch(error => {
                setComments([]);
            });
    }, []);
    return (
        <div>

            <p>
                <button class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <i class='fas fa-comment-alt'> Comments</i>
                </button>
            </p>
            <div class="collapse" id="collapseExample">

                <div class="card card-body">
                    <p className="card-text">{ }</p>
                </div>
            </div>
        </div>
    )
}

export default Comments