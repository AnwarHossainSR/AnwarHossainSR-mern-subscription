export const disableScroll =() => {
  document.body.style.height = "100vh";
  document.body.style.overflow = 'hidden';
}

export const defaultScroll = () => {
  document.body.style.height = 'unset';
  document.body.style.overflow = 'unset';
}


