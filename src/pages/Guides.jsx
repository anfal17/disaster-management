import React, { useState } from 'react';

// Sample static data for disaster guides
const guides = [
  { id: 1, title: 'Earthquake Safety', content: 'Detailed content about earthquake safety...' },
  { id: 2, title: 'Flood Response', content: 'Detailed content about flood response...' },
  { id: 3, title: 'Fire Safety', content: 'Detailed content about fire safety...' },
  // Add more guides as needed
];

const Guides = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter guides based on the search term
  const filteredGuides = guides.filter(guide =>
    guide.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Disaster Guides
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Find detailed guides on various disaster management and safety protocols.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-6"
            placeholder="Search guides..."
          />
        </div>

        <div className="flex flex-wrap -m-4">
          {filteredGuides.length > 0 ? (
            filteredGuides.map((guide) => (
              <div key={guide.id} className="xl:w-1/3 md:w-1/2 p-4">
                <a href={`/guides/${guide.id}`} className="block border border-gray-200 p-6 rounded-lg hover:shadow-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                    {/* You can replace this SVG with an appropriate icon */}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{guide.title}</h2>
                  <p className="leading-relaxed text-base">{guide.content}</p>
                </a>
              </div>
            ))
          ) : (
            <p>No guides found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Guides;
