import React from "react";
import { Popconfirm, message } from "antd";

const ConfirmAction = ({
  title,
  description,
  action,
  button,
  infoUser,
  confirmMessage,
  requiredMessage,
}) => {
  const confirm = (e) => {
    if (infoUser) {
      action();
      message.success(confirmMessage);
    } else {
      message.error(requiredMessage);
    }
  };
  return (
    <Popconfirm
      title={title}
      description={description}
      onConfirm={confirm}
      okText="Đồng ý"
      cancelText="Hủy"
    >
      {button}
    </Popconfirm>
  );
};

export default ConfirmAction;
