// ChainSelectionModal.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleChain } from '../actions';
import { RootState } from '../store';

const ChainSelectionModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const selectedChains = useSelector((state: RootState) => state.selectedChains);

  const handleChainClick = (chain) => {
    dispatch(toggleChain(chain)); // Dispatch the action to toggle a chain
  };

  const isAtLeastOneChainSelected = () => selectedChains.length > 0;

  const ChainSelectionModal = ({ onClose }) => {
    // ...component code
  };

  return (
    <div className="chain-selection-modal">
      <h2>Selected Chains</h2>
      <div>
        {selectedChains.map((chain, index) => (
          <div key={index} className="chain-item">
            <span>{chain}</span>
            <button onClick={() => handleChainClick(chain)}>Remove</button>
          </div>
        ))}
        {!isAtLeastOneChainSelected() && <p>Please select at least one chain.</p>}
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ChainSelectionModal;
