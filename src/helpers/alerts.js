import Swal from "sweetalert2";

const regularAlert = (icon = 'success', title='', text='') => Swal.fire({
  icon,
  title,
  text,
});

const timerAlert = (icon, title, timer=1500) => Swal.fire({
  position: 'top-end',
  icon,
  title,
  showConfirmButton: false,
  timer
});

export {
  regularAlert,
  timerAlert,
}