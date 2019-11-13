import { useCallback, useState, useEffect } from 'react';

const useDeviceInfo = () => {
  const getDeviceInfo = useCallback(() => {
    const deviceInfo = {
      desktop: false,
      tablet: false,
      landscape: false,
      mobile: false,
    };
    if (window.innerWidth > 1184) {
      deviceInfo.desktop = true;
    }
    if (window.innerWidth < 1184 && window.innerWidth > 767) {
      deviceInfo.tablet = true;
    }
    if (window.innerWidth < 768 && window.innerWidth > 480) {
      deviceInfo.landscape = true;
    }
    if (window.innerWidth < 481) {
      deviceInfo.mobile = true;
    }
    return deviceInfo;
  }, []);
  const [deviceInfo, setDeviceInfo] = useState(getDeviceInfo());

  const handleResize = useCallback(() => {
    setDeviceInfo(getDeviceInfo());
  }, [getDeviceInfo]);

  useEffect(() => {
    setDeviceInfo(getDeviceInfo());
    window.addEventListener('resize', handleResize);
  }, [getDeviceInfo, handleResize]);

  return deviceInfo;
};

export default useDeviceInfo;
