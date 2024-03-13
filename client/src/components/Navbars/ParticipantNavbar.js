import React from 'react';
// import ReactNavbar from 'react-responsive-animate-navbar';
import { ReactNavbar } from "react-responsive-animate-navbar";

import { Link } from 'react-router-dom';

const ParticipantNavbar = () => {
  return (
    <ReactNavbar
      color="rgb(25, 25, 25)"
      logo="https://svgshare.com/i/KHh.svg"
      menu={[
        { name: 'Home', to: '/home' },
        { name: 'Participant Dashboard', to: '/participant-dashboard' },
        { name: 'Judge Dashboard', to: '/judge-dashboard' },
        { name: 'Panelist Dashboard', to: '/panelist-dashboard' },
        { name: 'Submit Idea', to: '/ideas/new' },
        { name: 'Dashboard', to: '/dashboard' },
        { name: 'Add Panelist', to: '/add-panelist' },
        { name: 'Assign Idea', to: '/assign-idea' },
      ]}
      social={[
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/nazeh-taha/',
          icon: ['fab', 'linkedin-in'],
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/nazeh200/',
          icon: ['fab', 'facebook-f'],
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/nazeh_taha/',
          icon: ['fab', 'instagram'],
        },
        {
          name: 'Twitter',
          url: 'http://nazehtaha.herokuapp.com/',
          icon: ['fab', 'twitter'],
        },
      ]}
    />
  );
};

export default ParticipantNavbar;
