import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState(1248);

  useEffect(() => {
    fetch('http://localhost:5000/api/visitor')
      .then(res => res.json())
      .then(data => setCount(data.totalVisitors))
      .catch(() => {});
  }, []);

  return (
    <div className="mt-3 mb-3 inline-flex items-center gap-2 bg-white dark:bg-zinc-900 shadow-inner border border-zinc-200 dark:border-zinc-700 rounded-3xl px-5 py-2 text-sm">
      <span className="text-emerald-500">●</span>
      <span className="font-medium">{count.toLocaleString()}</span>
      <span className="text-zinc-400">developers &amp; clients visited</span>
    </div>
  );
}