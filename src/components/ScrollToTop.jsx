import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Accedemos a la ubicación actual (ruta)
  const { pathname } = useLocation();

  useEffect(() => {
    // Cada vez que el pathname cambie, subimos al top 0
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente no renderiza nada
};

export default ScrollToTop;