import { useEffect, useState } from 'react';
import { API } from '../../api';
import Table from '../../components/Table/Table';
import { postColumns } from './constants';
import { getMapPosts } from './utils';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    setPosts(await API.post.getPosts());
  };
  useEffect(() => {
    getPosts();
  }, []);
  if (posts !== []) {
    return (
      <div>
        <Table columns={postColumns} data={getMapPosts(posts)} />
      </div>

    );
  }
};

export default Posts;
