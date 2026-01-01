export {};

declare global {
  interface Window {
    tidioChatApi?: {
      open: () => void;
      close: () => void;
      on: (event: string, callback: () => void) => void;
    };
  }
}
