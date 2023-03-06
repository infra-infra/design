import React, { useEffect, useRef, useState } from 'react';
import useRequestIdleScroll from './useRequestIdleScroll';

const Progress: React.FC = () => {
  const [max, setMax] = useState(0);
  const [value, setValue] = useState(0);

  function scroll() {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    setMax(docHeight - winHeight);
    setValue(window.scrollY);
  }

  useRequestIdleScroll(scroll);
  return <progress className="zzf-progress" max={max} value={value} />;
};

export default Progress;
