import { usePosts } from "hooks/usePosts";
import { useCallback, useEffect, useReducer, useState } from "react";

export default function Home() {
  const { data, error, isLoading } = usePosts();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data.length === 0) {
    return <div>No data.</div>;
  }

  return (
    <div>
      <ol>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}
