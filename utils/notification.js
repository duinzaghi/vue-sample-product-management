export const showNotification = (vm, message, description, type) => {
  // eslint-disable-next-line prefer-const
  let noti = {};
  noti.message = message;
  noti.placement = "bottomRight";
  noti.description = description;
  noti.duration = 3;
  vm.$notification[type](noti);
};
export const showMessage = (vm, message, type, duration = 3) => {
  vm.$message[type](message, duration);
};
