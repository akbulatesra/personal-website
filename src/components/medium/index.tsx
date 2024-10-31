'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import parse from 'html-react-parser';
import Link from 'next/link';
import { getMediumArticles } from '@/helpers';

interface Article {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  description: string;
  categories: [string];
  content: string;
}

const Medium = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    getMediumArticles().then((res) => {
      if (res.length > 0) {
        let temp = [];
        temp.push(res[0], res[2]);
        setArticles(temp);
      }
    });
  }, []);
  return (
    <div
      className="flex flex-col lg:gap-12 md:gap-8 gap-4 xl:h-[80vh] 2xl:h-auto 2xl:mb-32 lg:pt-10"
      id="articles"
    >
      <h2 className="text-3xl lg:text-6xl mb-0">Articles</h2>
      <div className="grid lg:grid-cols-2 lg:gap-12 md:gap-8 gap-4">
        {articles.length > 0 ? (
          articles.map((article, index) => {
            const parsedArticle = parse(article.content) as ReactNode[];
            const parsedArticleWithoutTitle = parsedArticle.slice(2);

            return (
              <>
                <Link
                  key={index}
                  className="shadow-md dark:shadow-darkMode lg:px-8 py-4 px-4"
                  href={article.guid}
                  target="_blank"
                  aria-hidden
                >
                  <div className="flex flex-col justify-between items-stretch">
                    <h3 className="text-lg lg:text-xl mb-4">{article.title}</h3>
                    <div
                      className="text-sm md:text-base lg:text-base text-justify h-60 overflow-hidden"
                      aria-hidden
                    >
                      {parsedArticleWithoutTitle}
                    </div>
                    ...
                  </div>
                </Link>
                <span
                  style={{
                    position: 'absolute',
                    top: -999999,
                  }}
                >
                  <h3 className="text-lg lg:text-xl mb-4">{article.title}</h3>
                  {parsedArticle[3]}
                  {parsedArticle[4]}
                  {parsedArticle[5]}
                  {parsedArticle[6]}
                  {parsedArticle[7]}
                  {parsedArticle[8]}
                  {parsedArticle[9]}
                  <span>
                    If you want to read full article please click to link
                    <a href={article.guid} aria-label="Navigate to medium" />
                  </span>
                </span>
              </>
            );
          })
        ) : (
          <p className="text-base lg:text-xl lg:col-span-2">
            Articles cannot be displayed at the moment, but you can have a view
            them
            <Link
              href={'https://medium.com/@a.esra.akbulat'}
              target="_blank"
              className="text-special_red"
              aria-label="Navigate to Esra Akbulats medium account"
            >
              here!
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};
export default Medium;
