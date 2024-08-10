// src/components/GuideDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const guides = [
  { id: 1, title: 'Earthquake Safety', content: 'Detailed content about earthquake safety...' },
  { id: 2, title: 'Flood Response', content: 'Detailed content about flood response...' },
  { id: 3, title: 'Fire Safety', content: 'Detailed content about fire safety...' },
  // Add more guides as needed
];

const GuideDetail = () => {
  const { id } = useParams();
  const guide = guides.find(guide => guide.id === parseInt(id));

  if (!guide) return <p>Guide not found.</p>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{guide.title}</h2>
      <p>{guide.content}</p>
    </div>
  );
};

export default GuideDetail;
