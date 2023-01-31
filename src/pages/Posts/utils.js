export const getMapPosts = (posts) => posts.map(({
  id, userId, body, title,
}) => ({
  col1: id,
  col2: userId,
  col3: body,
  col4: title,
}));
