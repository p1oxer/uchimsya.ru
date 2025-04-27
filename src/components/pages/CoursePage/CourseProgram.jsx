import React from 'react'
import Accordion from "../../UI/Accordion";

export default function CourseProgram({courseProgram}) {
  return (
      <>
          <p className="page-course__heading heading-small">Программа курса</p>
          <div className="page-course__program">
              {courseProgram &&
                  courseProgram.map((item, index) => {
                      return (
                          <Accordion key={index} title={item}>
                              <p>1. Lorem ipsum dolor sit amet consectetur.</p>
                              <p>2. Adipisicing elit. </p>
                              <p>3. Fugiat enim doloremque similique.</p>
                              <p>4. Natus possimus fuga commodi</p>
                              <p>5. Sint itaque voluptate voluptates.</p>
                          </Accordion>
                      );
                  })}
          </div>
      </>
  );
}
