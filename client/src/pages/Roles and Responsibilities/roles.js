import React from 'react';
import './roles.css';

const roles = [
  {
    title: 'Volunteer, Chaitanya Spandana Club, CBIT Hyderabad',
    duration: 'Sept 2022 - Sept 2003',
    description: ''
  },
  {
    title: 'Member of Organising Committee, Head of Design Team, UCC Club, CBIT Hyderabad',
    duration: 'Jan 2023 - Jan 2024',
    description: ''
  },
  {
    title: 'Technical and Documentation Head, Chaitanya Svaastya Club, CBIT Hyderabad',
    duration: 'Sept 2023 - Current',
    description: ''
  }
];

const Roles = () => {
  return (
    <div className="roles">
      <h2>Roles and Responsibilities</h2>
      {roles.map((role, index) => (
        <div className="role-item" key={index}>
          <h3>{role.title}</h3>
          <p>Duration: {role.duration}</p>
          <p>{role.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Roles;
