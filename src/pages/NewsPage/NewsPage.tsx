import { useEffect } from "react";
import styles from "./NewsPage.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import * as newsActions from "../../features/news";

const NewsPage = () => {
  const dispatch: any = useAppDispatch();
  const newsData: any = useAppSelector((state) => state.news.news);
  useEffect(() => {
    dispatch(newsActions.getNews());
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.box} box`}>
        News Page
        <div>
          {newsData.map((item: any) => {
            return (
              <div key={item.id} className="box">
                {item.title}
                <div>
                  <a href={item.url}>Read full news</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
