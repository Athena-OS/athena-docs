import React, { useState, useEffect } from 'react';
import { data } from 'src/javascript/downloadsData';

const DownloadCards = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [downloadItemsData, setDownloadItemsData] = useState(data)
  const [flippedCards, setFlippedCards] = useState({});
  const [activeHashes, setActiveHashes] = useState({});
  const [downloadEnabled, setDownloadEnabled] = useState(true)

  useEffect(() => {
    const initialHashes = {};
    data.forEach((_, index) => {
      initialHashes[index] = 'MD5';
    });
    setActiveHashes(initialHashes);

    const getDownloadCounts = async () => {
      try {
        const response = await fetch(
          `https://cms.athenaos.org/api/download-counts-list`,
        );
        const result = await response.json();
        const updatedData = [...downloadItemsData]; // Create a copy to avoid mutating the original state
        result.forEach((entry) => {
          const matchingItem = updatedData.find(
            (item) => item.title === entry.download_type // Match based on title
          );
          if (matchingItem) {
            matchingItem.downloadsCount = entry.download_count; // Update downloadsCount
          }
        });

        // Update the state with the new data
        setDownloadItemsData(updatedData);

      } catch (error) {
        console.error("Error fetching data:", error);
        return { data: [] };
      }
    }

    getDownloadCounts()
  }, []);

  const openModal = (index) => setActiveModal(index);
  const closeModal = () => {
    setActiveModal(null);
    setFlippedCards(prev => ({ ...prev, [activeModal]: false }));
  };
  const flipCard = (index) => setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  const changeHash = (index, hashType) => setActiveHashes(prev => ({ ...prev, [index]: hashType }));
  const downloadItem = () => {

    const downloadURL = downloadItemsData[activeModal]["downloadURL"];
  
    if (downloadURL.startsWith("https://cms.athenaos.org/")) {
      // Use fetch to get the file
      fetch(downloadURL)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // Get the response as a Blob
        })
        .then((blob) => {
          const url = window.URL.createObjectURL(blob); // Create a URL for the Blob
          const a = document.createElement("a"); // Create a temporary anchor element
          a.style.display = "none"; // Hide the anchor
          a.href = url; // Set the href to the Blob URL
          a.download = downloadURL.split("/").pop(); // Set the download attribute with the file name
          document.body.appendChild(a); // Append the anchor to the document
          a.click(); // Programmatically click the anchor to trigger the download
          window.URL.revokeObjectURL(url); // Release the Blob URL
          document.body.removeChild(a); // Remove the anchor from the document
          // increment download counter
          setDownloadItemsData((prevData) => {
            return prevData.map((item, index) => {
              if (index === activeModal) {
                // Increment the downloadsCount for the active modal
                return { ...item, downloadsCount: (item.downloadsCount || 0) + 1 };
              }
              return item; // Return the item unchanged if it's not active
            });
          });
        })
        .catch((error) => {
          console.error("Error downloading the file:", error); // Handle errors
        });
    } else {
      // Open the link in a new tab
      window.open(downloadURL, "_blank");
    }
    setDownloadEnabled(false)
    setTimeout(() => {
      setDownloadEnabled(true);
    }, 10000);
  };
  

  return (
    <div className="pt-8 pb-24">
      <h4 className="block lg:hidden text-center pb-4">Download Links:</h4>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {downloadItemsData.map((item, index) => (
          <React.Fragment key={index}>
            <div 
              onClick={() => openModal(index)} 
              className="cursor-pointer transform transition-transform duration-300 hover:scale-125 downloadButtonImage"
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
                    <div className="flex flex-col sm:flex-row items-center gap-0 sm:gap-6 text-center sm:text-left">
                      <div className="w-20 sm:h-20 flex-shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">{item.title}</h2>
                        <p className="text-sm leading-6 max-w-sm">{item.description}</p>
                        <p className="text-xs font-bold flex justify-center sm:justify-start items-center cursor-pointer">
                          Flip card for download
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                          </svg>
                        </p>
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
                            className={`cursor-pointer px-3 py-1 bg-transparent transition-opacity duration-300 ${activeHashes[index] === hashType ? 'opacity-100 border-b-2 border-yellow-400 dark:border-indigo-400' : ''}`}
                            onClick={(e) => { e.stopPropagation(); changeHash(index, hashType); }}
                            style={{marginTop:"0"}}
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
                    <div className={`w-full flex items-center border-t border-yellow-400 dark:border-indigo-400 ${item.enableDownloadCounter ? "justify-between pt-3" : "pt-3 mt-3 justify-center"}`}>
                      {item.enableDownloadCounter && 
                        <div className="text-center leading-none">Total downloads:<br/><strong className="text-2xl">{item.downloadsCount}</strong></div>}
                      <button 
                        disabled={!downloadEnabled}
                        className={`${downloadEnabled ? "cursor-pointer" : "cursor-not-allowed"} flex items-center justify-center gap-4 bg-gray-800 dark:hover:bg-gray-700 text-yellow-400 dark:text-indigo-400 px-4 py-2 rounded-lg hover:bg-gray-900 downloadButtonImage`}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card flip
                          // Perform the download action here
                          downloadItem()
                        }}
                      >
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
    </div>
  );
};

export default DownloadCards;