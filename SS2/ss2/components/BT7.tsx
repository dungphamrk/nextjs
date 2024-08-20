import classNames from "classnames";
import React from "react";
import styles from "./BT7.module.css";

type PropTypes = {
  type: "primary" | "danger" | "warning" |"success";
};

export default function Button({ type }: PropTypes) {
  const classObj = classNames("button", {
    [styles.primary]: type === "primary",
    [styles.danger]: type === "danger",
    [styles.warning]: type === "warning",
    [styles.success]: type === "success",
  });
  return (
    <>
      <button className={classObj}>Thêm mới</button>
    </>
  );
}
