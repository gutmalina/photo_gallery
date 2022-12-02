/** gallery1 */
const slidesGrowing = document.querySelectorAll('.slide-growing');

for(const slide of slidesGrowing){
  slide.addEventListener('click', ()=>{
    clearActiveClasses()
    slide.classList.add('active')
  })
};

function clearActiveClasses(){
  slidesGrowing.forEach((slide)=>{
      slide.classList.remove('active')
  })
};




