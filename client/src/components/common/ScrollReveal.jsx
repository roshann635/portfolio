import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  y = 80,
  opacity = 0,
  scrub = true,
  duration = 1,
  delay = 0,
}) => {
  const el = useRef();

  useEffect(() => {
    const element = el.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "top 20%",
        scrub: scrub ? 1.2 : false,
      },
    });

    tl.fromTo(
      element,
      {
        y,
        opacity,
      },
      {
        y: 0,
        opacity: 1,
        duration,
        ease: "power3.out",
        delay,
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return <div ref={el}>{children}</div>;
};

export default ScrollReveal;