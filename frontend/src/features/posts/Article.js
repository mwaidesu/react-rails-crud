import React, {useEffect} from 'react'
import { fetchPostsAsync } from './postSlice';
import { useDispatch } from 'react-redux';

function Article() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch])

  // , 
  return (
    <div>
      Article
    </div>
  );
}

export default Article