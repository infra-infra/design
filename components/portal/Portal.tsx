import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface PortalType {
  children: React.ReactNode;
}

function Portal({ children }: PortalType): React.ReactPortal | null {
  const [container, setContainer] = useState<HTMLElement>();

  useEffect(() => {
    const el = document.createElement('div');
    el.classList.add('portal-container');
    document.body.appendChild(el);
    setContainer(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  return container ? ReactDOM.createPortal(children, container) : null;
}

export { Portal };
