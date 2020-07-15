import { useState, useEffect, useCallback } from "react";

const useToast = _ => {
  const [fadeIn, setFadeIn] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState(void 0);
  const types = ["success", "error", "warn", "info"];

  useEffect(
    _ => {
      let _timer = null;
      if (fadeIn) _timer = setTimeout(timeOutFunc, 2500);
      return _ => clearTimeout(_timer);
    },
    [fadeIn]
  );

  const timeOutFunc = _ => {
    setFadeIn(false);
    setMessage("");
  };

  const toggleAlert = _ => {
    if (!fadeIn) {
      setFadeIn(!fadeIn);
    }
  };

  const toast = useCallback(
    (type, msg) => {
      if (!fadeIn) {
        if (!types.includes(type)) setType(void 0);
        else setType(type);

        setMessage(msg);
        setFadeIn(true);
      }
    },
    [fadeIn]
  );

  return {
    fadeIn,
    toggleAlert,
    toast,
    type,
    message
  };
};

export default useToast;