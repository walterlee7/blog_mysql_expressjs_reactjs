import React from 'react';
import { Link } from 'react-router-dom';

const EditButton = (props) => {
    return (
        <button id={props.id}><Link to={`/edit/${props.id}`}>Edit Blog</Link></button >
    );
};

export default EditButton;