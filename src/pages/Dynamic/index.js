import React from 'react';
import { useParams } from 'react-router-dom';

const Dynamic = () => {
  const { id } = useParams();
  return (
    <div>este es el id {id}</div>
  );
}

export default Dynamic;