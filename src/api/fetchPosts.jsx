// Enhanced version with better error handling
export async function fetchPosts() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    if (error.name === 'TypeError') {
      throw new Error('Network error: Unable to reach the server');
    }
    throw error;
  }
}

// You can also add more API functions for different endpoints
export async function fetchPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch post ${id}`);
  return res.json();
}

export async function fetchUserById(userId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!res.ok) throw new Error(`Failed to fetch user ${userId}`);
  return res.json();
}
