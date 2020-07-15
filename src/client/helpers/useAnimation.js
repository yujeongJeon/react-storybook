import { useEffect, useState } from "react";

const useAnimation = (f, s, v) => {
  let rafId = void 0;

  const [done, setDone] = useState(false);

  useEffect(_ => {
    if (window.requestAnimationFrame) {
      const render = _ => {
        v = f(v);

        rafId = window.requestAnimationFrame(render); 

        if (s(v)) {
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