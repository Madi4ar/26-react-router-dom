import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="mt-3 font-light mx-auto w-96 flex items-center justify-between border border-[#ccc]">
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
      <NavLink to="courses">Courses</NavLink>
      <NavLink to="*">Not found</NavLink>
    </nav>
  );
}
