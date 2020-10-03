import { FC, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

import getPosts from '$/blog/getPosts';
import { BlogPostState } from '@/modules/types';
import { getLocale, makeUrl } from '@/utils';

import { assetsSiteFolder } from 'config/app.json';

const Info: FC = () => {
  const [posts, setPosts] = useState<BlogPostState[] | null>(null);

  const receivePosts = useCallback(() => {
    getPosts().then((posts: BlogPostState[]) => {
      setPosts(posts);
    }).catch((e) => console.error(e));
  }, []);

  useEffect(() => { receivePosts(); }, [receivePosts]);

  return (
    <section className="section-info">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2>{getLocale('useful_info_and_news')}</h2>
          </div>
          <div className="col-12 col-lg-6">
            <a href="#" className="section-info__banner">
              <img src={`${assetsSiteFolder}img/sample-new-1.jpg`} alt="" />
              <div className="section-info__banner__title">
                <div>
                  <span className="text-underline">
                    {getLocale('how_to_order_ded_moroz')}
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="section-info__wrapper">
          <div className="section-info__middle">
            <Link href={makeUrl('blog')}>
              <a className="btn btn-danger btn-sm">{getLocale('read_all')}</a>
            </Link>
          </div>

          {posts
            ? (
              <div className="row">
                {posts.map((post: BlogPostState) => (
                  <div key={post.id} className="col-12 col-md-6 col-lg-3">
                    <BlogItem {...post} />
                  </div>
                ))}
              </div>
            )
            : (
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                  <BlogItemFaked />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <BlogItemFaked />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <BlogItemFaked />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <BlogItemFaked />
                </div>
              </div>
            )
          }
        </div>
      </div>

      <div className="decoration">
        <div className="container">
          <img
            className="decoration__image decoration__image--2"
            src={`${assetsSiteFolder}img/decor-gift-3.png`}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

const BlogItem: FC<BlogPostState> = ({
  image,
  introtext,
  formatted_date,
  pagetitle,
  uri,
}) => (
    <div className="card-article">
      {image
        ? (
          <Link href="{$uri}">
            <a
              className="card-article__image"
              style={{
                backgroundImage: `url('${image}')`,
              }} />
          </Link>
        )
        : (
          <div className="card-article__image"></div>
        )
      }
      <div className="card-article__title">
        <Link href={uri}>{pagetitle}</Link>
      </div>
      <div className="card-article__intro">{introtext}</div>
      <div className="card-article__date"> {formatted_date}</div>
    </div>
  );

const BlogItemFaked: FC = () => (
  <div className="card-article card-article--faked">
    <div className="card-article__image" style={{ background: '#CCC' }}></div>
    <div className="card-article__title">
      <span style={{ display: 'block', background: '#CCC', height: '1em', marginBottom: 7 }}></span>
      <span style={{ display: 'block', background: '#CCC', height: '1em', width: '75%' }}></span>
    </div>
    <div className="card-article__intro">
      <span style={{ display: 'block', background: '#CCC', height: '1em', marginBottom: 6 }}></span>
      <span style={{ display: 'block', background: '#CCC', height: '1em', marginBottom: 6 }}></span>
      <span style={{ display: 'block', background: '#CCC', height: '1em', marginBottom: 6 }}></span>
      <span style={{ display: 'block', background: '#CCC', height: '1em' }}></span>
    </div>
    <div className="card-article__date" style={{ background: '#CCC', height: '1em', width: 115 }}></div>
  </div>
);

export default Info;
