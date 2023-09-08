import React from 'react';

const Lecture = ({ params }) => {
    return (
        <div>
            <h2>Lecture 1 of college {params.lecture}</h2>
        </div>
    );
};

export default Lecture;