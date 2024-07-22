import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';

export default function SingleCourse() {
  const params = useParams();
  const course = courses.find((course) => course.slug === params.courseSlug);
  const navigate = useNavigate();
  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course, navigate]);
  return (
    <>
      <div>
        SingleCourse Info
        <h1>{course?.title}</h1>
        <h2>{course?.slug}</h2>
        <h3>{course?.id}</h3>
        <Link to=".." relative="path" className="underline mt-10">
          All courses
        </Link>
      </div>
    </>
  );
}
