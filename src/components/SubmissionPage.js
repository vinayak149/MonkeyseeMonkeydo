// components/SubmissionPage.js
import React from 'react';
import NavBar from './NavBar';

const SubmissionPage = () => {
    return (
        <div>
            <NavBar />
            <form className="container mt-20">
                <h2>Submit Your Idea</h2>
                <input type="text" name="ideaTitle" placeholder="Idea Title" />
                <textarea name="ideaDescription" placeholder="Idea Description"></textarea>
                <button type="submit">Submit Idea</button>
            </form>
        </div>
    );
};

export default SubmissionPage;
