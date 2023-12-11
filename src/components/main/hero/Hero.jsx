import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import './hero.css';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPosts } from "../../../reduxACtions/actions/PostsAction";

const Hero = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  if (!posts) return ' ';

  const sorted = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const firstFour = sorted.slice(0, 4);

  return (
    <>
      <section className='hero'>
        {posts && posts.length > 0 ? (
          <div className='container'>
            <Card posts={posts} firstFour={firstFour} />
          </div>
        ) : null}
      </section>
    </>
  );
}

export default Hero;

