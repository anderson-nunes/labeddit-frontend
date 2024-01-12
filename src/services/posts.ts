import fetchApp from "./customFetch";

export const getPosts = async () => {
  const response = await fetchApp("posts", {
    method: "GET",
  });

  return response;
};

export const createPost = async (body: any) => {
  const response = await fetchApp("posts", {
    body,
    method: "POST",
  });

  return response;
};

export const likeOrDislike = async (id: string, body: any) => {
  const response = await fetchApp(`posts/${id}/like`, {
    body,
    method: "PUT",
  });

  return response;
};
