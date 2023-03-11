import React, { useState } from 'react';
import useRequestIdleScroll from './useRequestIdleScroll';
import { style } from './style';

function Progress(): JSX.Element {
  const [max, setMax] = useState(0);
  const [value, setValue] = useState(0);

  function scroll(): void {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    setMax(docHeight - winHeight);
    setValue(window.scrollY);
  }

  useRequestIdleScroll(scroll);
  return <progress className={style} max={max} value={value} />;
}

export default Progress;
