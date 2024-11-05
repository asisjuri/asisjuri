const url = "https://asisjuridica.com/admin/wp-json/wp/v2"

export async function getPosts() {
    const response = await fetch(`${url}/posts`);
    if (!response.ok) throw new Error("Error fetching posts");
    const posts = await response.json();
    return posts;
  }


export async function getPostBySlug(slug) {
  const response = await fetch(`${url}/posts/${slug}`);
  const post = await response.json();
  return post;
}


export async function getImage(postId) {
  const response = await fetch(`${url}/media/${postId}`);
  const media = await response.json();
  return media?.source_url;
}

export async function getCategories() {
  const response = await fetch(`${url}/categories`);
  const cat = await response.json();
  return cat;
}

export async function getTags() {
  const response = await fetch(`${url}/tags`);
  const tags = await response.json();
  return tags;
}

export async function postsPerPage (page = 1, perPage = 4) {
  const response = await fetch(`${url}/posts?page=${page}&per_page=${perPage}`);
  if (!response.ok) throw new Error("Error fetching posts");
  const posts = await response.json();
  const totalPosts = response.headers.get("X-WP-Total");
  const totalPages = Number(response.headers.get("X-WP-TotalPages"));
  
  return {
    posts,
    totalPosts: totalPosts !== null ? Number(totalPosts) : 0, // Asegurarse de que sea un número
    totalPages,
  };
};

