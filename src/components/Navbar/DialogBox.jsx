// DialogBox.jsx
import React from 'react';
import './DialogBox.css'; // Import the CSS file for styling

const DialogBox = ({ isOpen, onClose, onConfirm, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <div className="dialog-header">
          <div className="dialog-title">{title}</div>
        </div>
        <div className="dialog-content">{children}</div>
        <div className="dialog-actions">
          <button className="btn cancel-btn" onClick={onClose}>Cancel</button>
          <button className="btn confirm-btn" onClick={onConfirm}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
