import React, { useState, useEffect } from 'react';
import { data } from 'src/javascript/downloadsData';
import "../styles/cards.css"
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

  const openModal = (index) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
    setFlippedCards(prev => ({
      ...prev,
      [activeModal]: false
    }));
  };

  const flipCard = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const changeHash = (index, hashType) => {
    setActiveHashes(prev => ({
      ...prev,
      [index]: hashType
    }));
  };
  return (
    <div className="download-container">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div 
            onClick={() => openModal(index)} 
            style={{ margin: '48px', cursor: 'pointer', }}
            className='logo'
          >
            <img src={item.image} alt={item.title} />
          </div>
          {activeModal === index && (
            <div className="download-modal active">
              <div 
                className={`download-card ${flippedCards[index] ? 'flipped' : ''}`}
                onClick={() => flipCard(index)}
              >
                <div className="download-modal-header">
                  <button onClick={(e) => { e.stopPropagation(); closeModal(); }} className="close-button">
                    &times;
                  </button>
                </div>
                <div className="download-content download-card-content">
                  <div className="download-front">
                    <div className="download-icon">
                      <img src={item.image} alt={item.title} width="64" height="64" className='card-logo' />
                    </div>
                    <div>
                      <h2 className="download-title">{item.title}</h2>
                      <p className="download-description">{item.description}</p>
                    </div>
                  </div>
                  <div className="download-back">
                    <div style={{ width: '100%' }}>
                      <div style={{ paddingInline: '12px' }}>
                        <div className="download-tabs">
                          {Object.keys(item.hashes).map((hashType) => (
                            <button 
                              key={hashType}
                              className={`download-tab-btn ${activeHashes[index] === hashType ? 'active' : ''}`}
                              onClick={(e) => { e.stopPropagation(); changeHash(index, hashType); }}
                            >
                              {hashType}
                            </button>
                          ))}
                        </div>
                        <div className="download-hash-display">
                          <h4 className="download-back-title">{activeHashes[index]}</h4>
                          <p className="download-hash-value">{item.hashes[activeHashes[index]]}</p>
                        </div>
                      </div>
                    </div>
                    <div className="download-btn-wrapper">
                      <button className="download-btn">
                        Download
                        <div className="download-icon-container">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <path
                              d="M8.59375 12.23L3.59375 7.22998L4.99375 5.77998L7.59375 8.37998V0.22998H9.59375V8.37998L12.1938 5.77998L13.5938 7.22998L8.59375 12.23ZM2.59375 16.23C2.04375 16.23 1.57308 16.0343 1.18175 15.643C0.790416 15.2516 0.594417 14.7806 0.59375 14.23V11.23H2.59375V14.23H14.5938V11.23H16.5938V14.23C16.5938 14.78 16.3981 15.251 16.0068 15.643C15.6154 16.035 15.1444 16.2306 14.5938 16.23H2.59375Z"
                              fill="#23262F"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
      {activeModal !== null && <div id="download-overlay" className="active" onClick={closeModal} />}
    </div>
  );
};

export default DownloadCards;
