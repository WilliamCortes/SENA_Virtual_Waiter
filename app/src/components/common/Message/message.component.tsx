import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Image from "next/image";
import { initialState, iconByType } from "./constants";
import styles from "./message.module.css";

export type TMessage = {
  text: string;
  type?: "info" | "success" | "warning" | "error";
  duration?: number;
};

export const Message: FC<TMessage> = (props) => {
  const [{ text, type = "info", duration = 3000 }, setContent] =
    useState<TMessage>({ ...initialState, ...props });
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setContent(initialState), duration);
  }, [duration]);

  useEffect(() => {
    if (!messageRef.current) return;
    const exitDuration = `${(duration - 500) / 1000}s`;
    messageRef.current.style.setProperty("--default-duration", exitDuration);
  }, [duration]);

  return (
    <Fragment>
      {text &&
        ReactDOM.createPortal(
          <div
            ref={messageRef}
            className={`${styles.container} ${styles.show}`}
          >
            <Image src={iconByType[type]} className={styles.icon} alt={type} />
            {text}
          </div>,
          document.body
        )}
    </Fragment>
  );
};

export const message = (props: TMessage) => {
  const idMessageDiv = "magneto-ui-message";
  if (!document) return;
  const messageActive = document.querySelector(`#${idMessageDiv}`);
  if (messageActive) return;
  const container = document.createElement("div");
  container.setAttribute("id", idMessageDiv);
  document.body.appendChild(container);
  createRoot(container).render(<Message {...props} />);
  const duration = props.duration ? props.duration : initialState.duration;
  setTimeout(() => document.body.removeChild(container), duration);
};
