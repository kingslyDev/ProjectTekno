import React, { useEffect } from 'react';

const RefreshOnResize = () => {
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const breakpoint = 768;

      if (currentWidth >= breakpoint) {
        location.reload();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null;
};

export default RefreshOnResize;
