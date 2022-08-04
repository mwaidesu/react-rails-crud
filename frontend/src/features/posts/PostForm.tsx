import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createPostAsync} from './postSlice';

function PostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // const [countt, setCountt] = React.useState(0);

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
    <form className = "">
      <div className="form-group">
        <input
          type="text"
          className="form-control text-start my-4 w-50 py-3"
          name="title"
          placeholder="Your Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* <input
        type="text"
        className="form-control text-start"
        name="title"
        placeholder="Your Title..."
        value={image}
        onChange={(e) => setImage(e.target.value)}
      /> */}
        <textarea
          className="form-control text-start my-4 w-50"
          name="body"
          required
          placeholder='Your article...'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          // onChange ={e => setCountt(e.target.value.length)}
        />
        {/* <div className="mb-4"><span id="char_count">{countt}</span></div> */}
        <button
          type="submit" className="btn btn-danger w-50 py-3"
          onClick={(e) => submitHandler(e)}>Submit</button>
      </div>
    </form>
  </div>;
}

export default PostForm;
