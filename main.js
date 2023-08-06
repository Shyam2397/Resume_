const spans = document.querySelectorAll(".progress_bar span");

spans.forEach((span)=>{
    span.style.width =span.dataset.width;
    span.innerHTML = span.dataset.width;
})