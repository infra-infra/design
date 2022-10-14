import { createContext } from "react";

const PortalContext = createContext({
  container: document.body,
} as {
  container: HTMLElement;
});

const { Provider } = PortalContext;

export { Provider as PortalProvider, PortalContext };
