const Slide = document.querySelector('.slide');
const Sl = document.querySelectorAll('.sl');  // Phải dùng querySelectorAll để lấy tất cả các phần tử có class 'sl'
const Previous = document.querySelector('.previous');
const Next = document.querySelector('.next');
let viTri = 0;
function showSlide() {
    const width = Slide.clientWidth;
    // Slide.clientWidth: Lấy chiều rộng của phần tử Slide để tính toán khoảng cách dịch chuyển
    Slide.style.transform = `translateX(-${viTri * width}px)`;
    // Dịch chuyển sang trái theo trục OX , translateY sẽ di chuyển lên  theo trục OY
    // -${viTri * width}px: Dịch chuyển sang trái 1 khoảng = viTri x chiều rộng của slide
    // viTri * width: Tính toán vị trí dịch chuyển dựa trên chỉ số viTri và chiều rộng của slide
 
}

Previous.addEventListener('click', () => {
  viTri--;
  if (viTri < 0) {
    viTri = Sl.length - 1;
  }
  showSlide();
});

Next.addEventListener('click', () => {
  viTri++;
  if (viTri >= Sl.length) {
    viTri = 0;
  }
  showSlide();
});