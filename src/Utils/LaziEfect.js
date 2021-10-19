
  const lazyImg = (id)=>{
      
      if ( document.querySelector(`#${id}`).getBoundingClientRect().top < window.innerHeight) {
          document.querySelector(`#${id}`).src = document.querySelector(`#${id}`).getAttribute('data-src')
          
        }
        
        
    };
export {
    lazyImg
}