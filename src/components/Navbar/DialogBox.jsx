// DialogBox.jsx
import React from 'react';
import './DialogBox.css'; // Make sure to create and import the CSS file for styling

const DialogBox = ({ isOpen, onClose, onConfirm, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <div className="dialog-title">{title}</div>
        <div className="dialog-content">{children}</div>
        <div className="dialog-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={onConfirm}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
