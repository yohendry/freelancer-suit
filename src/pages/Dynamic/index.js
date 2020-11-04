import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Dynamic = () => {
  const { id } = useParams();
  return (
    <div className={"page-animation-renderer"}>
      este es el id {id}
    </div>
  );
}

export default Dynamic;