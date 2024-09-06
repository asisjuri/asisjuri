const url = "https://asisjuridica.com/admin/wp-json/wp/v2"

export async function getPosts() {
    const response = await fetch(`${url}/posts`);
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

