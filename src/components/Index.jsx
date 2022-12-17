import React, { useEffect, useState } from "react";

export default function Index() {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      adfasdf
      <div>content.....</div>
      <footer className={isBottom ? "showFooter" : "hideFooter"}>Masdasdasd</footer>
    </div>
  );
}

// how to create sticky footer?
