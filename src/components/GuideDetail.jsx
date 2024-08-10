import React from 'react';
import { useParams } from 'react-router-dom';

// Sample static data for disaster guides
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

const GuideDetail = () => {
  const { id } = useParams();
  const guide = guides.find((guide) => guide.id === parseInt(id, 10));

  if (!guide) {
    return <p>Guide not found.</p>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            {guide.title}
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Detailed information and safety steps for {guide.title}.
          </p>
        </div>

        {/* Guide Steps */}
        <div className="flex flex-wrap -m-4">
          {guide.steps.map((step, index) => (
            <div key={index} className="lg:w-1/2 w-full p-4">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                  {/* Replace with appropriate icon for each step */}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    {step.step}
                  </h2>
                  <p className="leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideDetail;
