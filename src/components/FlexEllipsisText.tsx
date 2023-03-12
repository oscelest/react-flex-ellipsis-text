import React, {HTMLProps, useEffect, useRef, useState} from "react";
import Style from "./FlexEllipsisText.module.css";

export function FlexEllipsisText(props: EllipsisTextProps) {
  let {children, className, showTitle, ...component_props} = props;
  
  const [show_title, setShowTitle] = useState<boolean>(false);
  const ref_element = useRef<HTMLDivElement>(null);
  const title = showTitle !== false && show_title && typeof children === "string" ? children : undefined;
  
  useEffect(
    () => {
      if (!ref_element.current) {
        throw new Error("Ellipsis text 'ref_element' is not being rendered.");
      }
  
      const observer = new ResizeObserver(change_list => setShowTitle(change_list.every(change => shouldShowTitle(change.target))));
      observer.observe(ref_element.current, {box: "content-box"});
  
      setShowTitle(shouldShowTitle(ref_element.current));
      return () => observer.disconnect();
    },
    [ref_element.current]
  );
  
  const classes = [Style.Component, "ellipsis-text"];
  if (className) classes.push(className);
  
  return (
    <div {...component_props} className={classes.join(" ")} title={title}>
        <span ref={ref_element}>
          {children}
        </span>
    </div>
  );
}

function shouldShowTitle(element?: Element | null) {
  return element ? element.clientWidth < element.scrollWidth : true;
}

export interface EllipsisTextProps extends HTMLProps<HTMLDivElement> {
  children?: string;
  showTitle?: boolean;
}

export default FlexEllipsisText;
