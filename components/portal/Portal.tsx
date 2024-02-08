import { ReactNode, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import type { ReactPortal } from 'react';
import { nanoid } from 'nanoid';

type PortalProps = {
  children: ReactNode;
  className?: string;
};

function Portal({ children, className = '' }: PortalProps): ReactPortal | null {
  const containerElement = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    containerElement.setAttribute('portal-container-id', nanoid());
    if (className) {
      containerElement.className = className;
    }
    document.body.appendChild(containerElement);
    return () => {
      document.body.removeChild(containerElement);
    };
  }, []);

  return ReactDOM.createPortal(children, containerElement);
}

export { Portal };
