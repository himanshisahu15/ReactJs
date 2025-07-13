import { useEffect, useRef, useState } from "react";
import Spinner from "../Spinner/Spinner";

interface LazySectionProps {
  render: (visible: boolean) => React.ReactNode;
  className?: string;
}

const LazySection = ({ render, className = "" }: LazySectionProps) => {
  
  //tracks section is in viewport
  const [isVisible, setIsVisible] = useState(false);
  //for spinner
  const [loading, setLoading] = useState(false);
  //reference to div which observe
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (!ref.current) return;

    //IO-tracks whether element is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setLoading(true); 

          //stop showing spinner in 1 sec
          setTimeout(() => {
            setIsVisible(true);
            setLoading(false); 
          }, 1000);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4, //40% visible
        rootMargin: "0px 0px -20% 0px",
      }
    );

    //start observing
    observer.observe(ref.current);

    //cleanup func
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={ref} className={className}>
      {loading ? <Spinner /> : render(isVisible)}
    </div>
  );
};

export default LazySection;
