import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample static data for disaster guides with more detailed information
const guides = [
  {
    id: 1,
    title: 'Earthquake Safety',
    steps: [
      { step: 'STEP 1', description: 'Drop down on your knees, cover your head and neck, and hold on until the shaking stops.' },
      { step: 'STEP 2', description: 'If you are indoors, stay indoors. Move away from windows and heavy objects.' },
      { step: 'STEP 3', description: 'If you are outdoors, move to an open area away from buildings, streetlights, and utility wires.' },
      { step: 'STEP 4', description: 'After the shaking stops, be cautious of aftershocks and be prepared for possible structural damage.' },
    ],
  },
  {
    id: 2,
    title: 'Flood Response',
    steps: [
      { step: 'STEP 1', description: 'Move to higher ground and stay there. Avoid walking or driving through floodwaters.' },
      { step: 'STEP 2', description: 'If you are caught in a vehicle, abandon it and move to higher ground if you can do so safely.' },
      { step: 'STEP 3', description: 'Listen to the radio or TV for information about the flood and emergency instructions.' },
      { step: 'STEP 4', description: 'After the flood, check your property for damage and avoid entering buildings until they have been declared safe.' },
    ],
  },
  {
    id: 3,
    title: 'Landslide Preparedness',
    steps: [
      { step: 'STEP 1', description: 'Move to a safe area away from hillsides and steep slopes during heavy rains.' },
      { step: 'STEP 2', description: 'Avoid driving on roads that are prone to landslides.' },
      { step: 'STEP 3', description: 'Install drainage systems to divert water away from slopes and homes.' },
      { step: 'STEP 4', description: 'Be aware of warning signs such as small slides or cracks in the ground and report them to authorities.' },
    ],
  },
  {
    id: 4,
    title: 'Fire Safety',
    steps: [
      { step: 'STEP 1', description: 'Know the fire escape routes and make a plan for your family to follow in case of fire.' },
      { step: 'STEP 2', description: 'Install smoke alarms and test them regularly. Change the batteries once a year.' },
      { step: 'STEP 3', description: 'Practice fire drills and ensure everyone knows how to evacuate quickly.' },
      { step: 'STEP 4', description: 'Keep flammable materials away from heat sources and never leave cooking unattended.' },
    ],
  },
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
<div className="pt-2 relative mx-auto text-gray-600 mb-12" style={{ maxWidth: '400px' }}>
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none w-full"
    placeholder="Search guides..."
  />
  <button type="submit" className="absolute right-0 top-0 mt-3 mr-3">
    <svg
      className="text-gray-600 h-4 w-4 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 56.966 56.966"
      style={{ enableBackground: 'new 0 0 56.966 56.966' }}
      xmlSpace="preserve"
      width="512px"
      height="512px"
    >
      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
    </svg>
  </button>
</div>


        <div className="flex flex-wrap -m-4">
          {filteredGuides.length > 0 ? (
            filteredGuides.map((guide) => (
              <div key={guide.id} className="xl:w-1/3 md:w-1/2 p-4">
                <Link to={`/guides/${guide.id}`} className="block border border-gray-200 p-6 rounded-lg hover:shadow-lg">
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
                  <p className="leading-relaxed text-base">{guide.steps[0].description}</p>
                </Link>
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
