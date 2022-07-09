import React, {useRef, useState, useEffect} from "react";
import "./EllipsisText.css";

function EllipsisText(props: EllipsisTextProps) {
  const [show_title, setShowTitle] = useState<boolean>(false);
  const ref_element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref_element.current) throw new Error("Ellipsis text 'ref_element' is not being rendered.");
    setShowTitle(shouldShowTitle(ref_element.current));

    const observer = new ResizeObserver(change_list => setShowTitle(change_list.every(change => {
      return shouldShowTitle(change.target);
    })));
    observer.observe(ref_element.current, {box: "content-box" });
    return () => observer.disconnect();
  }, [ref_element.current]);

  const classes = ["ellipsis-text"];
  if (props.className) classes.push(props.className);

  return (
    <div className={classes.join(" ")} title={show_title ? props.children : ""}>
        <span ref={ref_element}>
          {props.children}
        </span>
    </div>
  );
}

function shouldShowTitle(element?: Element | null) {
  if (!element) return true;
  return element.clientWidth < element.scrollWidth;
}

export interface EllipsisTextProps {
  children?: string;
  className?: string;
}

export default EllipsisText;
