const container = document.querySelector(".container");
let selectedColor = 'red'
let colorArray = ['red', 'green', 'blue', 'purple', 'black', 
'gray', 'cyan', 'cornflowerBlue', 'white', 'yellow']

for(let i = 0; i < 800; i++){
    const pixel = document.createElement("div");
    pixel.setAttribute('class', 'pixel')
   
    let isColoredIn = true;

    pixel.addEventListener('click', function(){
        isColoredIn = !isColoredIn
        if(isColoredIn === false) {
            (pixel.style.backgroundColor = selectedColor)
        } else {
            (pixel.style.backgroundColor = container.style.backgroundColor)
        }
    })

    pixel.addEventListener('mousedown', function(){
        mouseDown = true;
    })
    pixel.addEventListener('mouseenter',function(){
        if(mouseDown) {
            pixel.style.backgroundColor = selectedColor
        }
    })
    pixel.addEventListener('mouseup', function(){
        mouseDown = false;
    })

    container.appendChild(pixel);
}

const palette = document.createElement('div')
for(color of colorArray) {
    let colorEl = document.createElement('div');
    colorEl.classList.add('dot')
    colorEl.style.backgroundColor = color
    palette.append(colorEl)
}

container.append(palette);

palette.addEventListener('click', function(){
    selectedColor = event.target.style.backgroundColor
    console.log(`You are using ${selectedColor}`)
})
 
