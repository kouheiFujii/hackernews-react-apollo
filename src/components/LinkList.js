import React from "react";
import Link from "./Link";
import { useQuery, gql } from "@apollo/client";

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        description
        url
        createdAt
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
      count
    }
  }
`;

function LinkList() {
  /**
   * loading: まだリクエストが完了していない場合は true
   * error: エラーが発生した場合はエラーの内容が格納される
   * data: リクエストが完了した場合はデータが格納される
   */
  const { data, error, loading } = useQuery(FEED_QUERY);
  return (
    <div>
      {data && (
        <>
          {data.feed.links.map((link, index) => (
            <Link key={link.id} link={link} index={index} />
          ))}
        </>
      )}
    </div>
  );
}

export default LinkList;
