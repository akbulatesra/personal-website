'use client';
import { useEffect, useState } from 'react';
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
    <div className="flex flex-col gap-12 h-[80vh] pt-10" id="articles">
      <h2 className="text-6xl mb-0">Articles</h2>
      <div className="grid grid-cols-2 gap-12">
        {articles.length > 0 ? (
          articles.map((article, index) => {
            return (
              <div
                key={index}
                className="shadow-md dark:shadow-darkMode px-8 py-4"
              >
                <div className="flex flex-col justify-between items-stretch">
                  <h3 className="text-xl mb-4">{article.title}</h3>
                  <div className="text-justify h-60 overflow-hidden">
                    {parse(article.content)}
                  </div>
                  ...
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-xl col-span-2">
            Articles cannot be displayed at the moment, but you can have a view
            them{' '}
            <Link
              href={'https://medium.com/@a.esra.akbulat'}
              target="_blank"
              className="text-special_red"
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
