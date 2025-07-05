const mask = document.querySelector(".xray-mask");
const radius = 300; // 可自定义半径
const softEdge = 1; // 0~1，边缘软化程度，越接近1越柔和

document.querySelector(".image-container").addEventListener("mousemove", (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  mask.style.maskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, rgba(0,0,0,1) ${100 * (1 - softEdge)}%, rgba(0,0,0,0) 100%)`;
  mask.style.webkitMaskImage = mask.style.maskImage;
});
