import React from "react";

const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))


function App() {       
    return( <>

 <div class="container hover-left">
        <div class="split left">
            <h1>Watch</h1>
            <a href="h" class="btn">Buy Now</a>
        </div>
        <div class="split right">
            <h1>Shoe</h1>
            <a href="ijuhg" class="btn">Buy Now</a>
        </div>
    </div>
</>
    );
}


export default App;