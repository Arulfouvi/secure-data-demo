// src/services/api.js
export const getSecretMessage = () => {
    // Use import.meta.env to access environment variables in Vite
    return Promise.resolve(import.meta.env.VITE_SECRET_MESSAGE);
  };
  