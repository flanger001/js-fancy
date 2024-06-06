function mouseMove(event) {
    let hue = (100 * event.clientX) / 360;
    let saturation = (100 * (event.clientY + 10)) / window.innerHeight; 
    let color = `hsl(${hue}, ${saturation}%, 50%)`;
    console.log(color);
    document.body.style = `background: ${color}`;
}
document.onmousemove = mouseMove;