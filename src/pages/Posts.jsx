import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { fetchPosts } from '../api/fetchPosts';
import { useTheme } from '../context/ThemeContext';

export default function Posts() {
  const { theme } = useTheme();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let mounted = true;
    async function loadPosts() {
      try {
        setLoading(true);
        const data = await fetchPosts();
        if (!mounted) return;
        setPosts(data.slice((page - 1) * 10, page * 10));
      } catch (err) {
        if (!mounted) return;
        setError(err.message);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    loadPosts();
    return () => { mounted = false; };
  }, [page]);

  const filtered = posts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));

  if (loading) return (
    <div className={`min-h-screen py-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <p className={`text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Loading...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className={`min-h-screen py-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <p className={`text-center text-red-500 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>{error}</p>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen py-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card title="Posts">
          <input
            type="text"
            placeholder="Search posts..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className={`border p-2 w-full mb-4 rounded ${
              theme === 'dark' 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          />
          <ul>
            {filtered.map(post => (
              <li key={post.id} className={`border-b py-2 ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <h3 className={`font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {post.title}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {post.body}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4">
            <Button onClick={() => setPage(p => Math.max(1, p - 1))}>Previous</Button>
            <Button onClick={() => setPage(p => p + 1)}>Next</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}