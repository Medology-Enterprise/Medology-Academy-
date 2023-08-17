import { useEffect, useState } from "react";

export const useCarouselLogic = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const carouselProps = isMobile
    ? {}
    : {
        centerMode: true,
        centerSlidePercentage: 22,
      };
  return { carouselProps };
};
