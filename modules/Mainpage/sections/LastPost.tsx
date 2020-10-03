import { useCallback, useEffect, useState } from 'react';

import Link from 'next/link';

import getPosts from '$/blog/getPosts';
import { getLocale, makeUrl } from '@/utils';

import { BlogPostState } from '../../types';

const LastPost = () => {
  const [post, setPost] = useState<BlogPostState | null>(null);

  const receivePosts = useCallback(() => {
    getPosts().then((posts: BlogPostState[]) => {
      setPost(posts[0]);
    }).catch((e) => {
      console.error(e);
    });
  }, []);

  useEffect(() => { receivePosts(); }, [receivePosts]);

  return (
    <>
      <h5>
        {getLocale('last_post_in_blog')}
        {/* Последняя запись в <Link href={makeUrl('blog')}><a className="text-underline">Блоге</a></Link> */}
      </h5>

      {post
        ? (
          <div className="card-article mb-x0">
            <Link href={post.uri}>
              <a className="card-article__image" style={{
                backgroundImage: `url('${post.image}')`,
              }}></a>
            </Link>
            <div className="card-article__title">
              <Link href={post.uri}><a>{post.pagetitle}</a></Link>
            </div>
            <div className="card-article__date">{post.formatted_date}</div>
          </div>
        )
        : (
          <div className="card-artilce card-artilce--faked">
            <div className="card-article__image card-article__image--faked" style={{ background: '#CCC' }}></div>
            <div className="card-article__title card-article__title--faked">
              <span style={{ display: 'block', background: '#CCC', height: 20, marginBottom: 6, width: '100%' }}></span>
              <span style={{ display: 'block', background: '#CCC', height: 20, width: '75%' }}></span>
            </div>
            <div className="card-article__date card-article__date--faked" style={{ background: '#CCC', height: 16, width: 110 }}></div>
          </div>
        )}
    </>
  );
}

export default LastPost;
