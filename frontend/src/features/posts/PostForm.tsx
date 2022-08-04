import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createPostAsync} from './postSlice';

function PostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function submitHandler(e:any) {
    e.preventDefault();
    const formData = {
      post: {
        title: title,
        body: body,
      }
    }
    dispatch(createPostAsync(formData));
    resetState();
  }

  function resetState() {
    setTitle('');
    setBody('');
  }
  
  return <div>
    <form>
      <input
        type="text"
        className="form-control text-start"
        name="title"
        placeholder = "Your Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
      <textarea
        className="form-control text-start"
        name="body"
        placeholder='Your article...'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        />
        <button
          type="submit"  className="btn btn-danger"
          onClick={(e) => submitHandler(e)}>Submit</button>
    </form>
  </div>;
}

export default PostForm;
