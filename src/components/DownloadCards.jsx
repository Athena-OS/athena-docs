import React, { useState, useEffect } from 'react';
import { data } from 'src/javascript/downloadsData';

const DownloadCards = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});
  const [activeHashes, setActiveHashes] = useState({});

  useEffect(() => {
    const initialHashes = {};
    data.forEach((_, index) => {
      initialHashes[index] = 'MD5';
    });
    setActiveHashes(initialHashes);
  }, []);

  const openModal = (index) => setActiveModal(index);
  const closeModal = () => {
    setActiveModal(null);
    setFlippedCards(prev => ({ ...prev, [activeModal]: false }));
  };
  const flipCard = (index) => setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  const changeHash = (index, hashType) => setActiveHashes(prev => ({ ...prev, [index]: hashType }));

  return (
    <div className="pt-4 pb-20 flex flex-wrap justify-center items-center gap-6">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div 
            onClick={() => openModal(index)} 
            className="cursor-pointer transform transition-transform duration-300 hover:scale-125"
          >
            <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
          </div>
          {activeModal === index && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md">
              <div 
                className={`relative w-full h-[320px] ${flippedCards[index] ? '[transform:rotateY(180deg)]' : ''} transition-transform duration-600 [transform-style:preserve-3d]`}
                onClick={() => flipCard(index)}
              >
                {/* Front of the card */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg border border-yellow-400 dark:border-indigo-400 bg-white dark:bg-gray-900 shadow-lg shadow-yellow-400/30 dark:shadow-indigo-400/30 p-6 flex flex-col justify-center items-center">
                  <div className="flex items-center gap-6 text-center sm:text-left">
                    <div className="w-20 h-20 flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                      <p className="text-sm leading-6 max-w-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Back of the card */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg border border-yellow-400 dark:border-indigo-400 bg-white dark:bg-gray-900 shadow-lg shadow-yellow-400/30 dark:shadow-indigo-400/30 p-4 flex flex-col">
                  <div className="flex-grow overflow-hidden">
                    <div className="flex justify-center mb-2">
                      {Object.keys(item.hashes).map((hashType) => (
                        <button 
                          key={hashType}
                          className={`px-3 py-1 bg-transparent transition-opacity duration-300 ${activeHashes[index] === hashType ? 'opacity-100 border-b-2 border-yellow-400 dark:border-indigo-400' : ''}`}
                          onClick={(e) => { e.stopPropagation(); changeHash(index, hashType); }}
                        >
                          {hashType}
                        </button>
                      ))}
                    </div>
                    <div className="text-center mt-2">
                      <h4 className="text-lg font-bold">{activeHashes[index]}</h4>
                      <p className="mt-1 break-all overflow-y-auto max-h-[180px]">{item.hashes[activeHashes[index]]}</p>
                    </div>
                  </div>
                  <div className="w-full flex justify-center border-t border-yellow-400 dark:border-indigo-400 pt-3 mt-3">
                    <button className="flex items-center justify-center gap-4 bg-gray-800 text-yellow-400 dark:text-indigo-400 px-4 py-2 rounded-lg">
                      Download
                      <div className="bg-yellow-400 dark:bg-indigo-400 p-2 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          className="text-gray-800"
                        >
                          <path
                            d="M8.59375 12.23L3.59375 7.22998L4.99375 5.77998L7.59375 8.37998V0.22998H9.59375V8.37998L12.1938 5.77998L13.5938 7.22998L8.59375 12.23ZM2.59375 16.23C2.04375 16.23 1.57308 16.0343 1.18175 15.643C0.790416 15.2516 0.594417 14.7806 0.59375 14.23V11.23H2.59375V14.23H14.5938V11.23H16.5938V14.23C16.5938 14.78 16.3981 15.251 16.0068 15.643C15.6154 16.035 15.1444 16.2306 14.5938 16.23H2.59375Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
      {activeModal !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[9]"
          onClick={closeModal}
        />
      )}
    </div>
  );
};

export default DownloadCards;