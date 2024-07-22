import React, { useState } from 'react';
import courses from '../data/courses';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

export default function Course() {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );
  return (
    <>
      {sortedCourses.map((course) => {
        return (
          <Link
            to={course.slug}
            key={course.id}
            className="flex cursor-pointer flex-col items-center justify-center mx-auto border border-[#ccc] p-10 mt-5 w-64 h-24">
            {course.title}
          </Link>
        );
      })}
    </>
  );
}
