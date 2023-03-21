import { ReactNode, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import type { ReactPortal } from 'react';

type PortalProps = {
  children: ReactNode;
};

function Portal({ children }: PortalProps): ReactPortal | null {
  const containerElement = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    containerElement.setAttribute('portal-container-id', String(Date.now()));
    document.body.appendChild(containerElement);
    return () => {
      document.body.removeChild(containerElement);
    };
  }, []);

  return ReactDOM.createPortal(children, containerElement);
}

export { Portal };
