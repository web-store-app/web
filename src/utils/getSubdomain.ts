export const getSubdomain = (): string | null => {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');
  
    if (parts.length > 2) {
      return parts[0];
    }
  
    return "lojateste";//null;
  };