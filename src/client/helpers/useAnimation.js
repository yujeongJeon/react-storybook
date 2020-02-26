import { useEffect, useState } from "react";

const useAnimation = (f, s) => {
  let rafId = void 0;

  const [done, setDone] = useState(false);

  useEffect(_ => {
    if (window.requestAnimationFrame) {
      const render = _ => {
        f();

        rafId = window.requestAnimationFrame(render); 

        if (s()) {
          setDone(true);
          cancelAnimationFrame(rafId);
        }
      }

      render();
    }
  }, [])
  
  return {
    done
  };
}

export default useAnimation;