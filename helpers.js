// helpers funcitions

//constrain a value between a low and high limit
function constrain(value, low, high) {
    if (value < low) {
      return low;
    } else if (value > high) {
        return high;
    } else {
        return value;
    }
}

// calculate brightness of an rgb color
function calcBrightness(r, g, b) {
    return Math.round(Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2));
}


// update the color preview
function updateColor(r, g, b, previewEl, brightness) {
    let rgbString = `rgb(${r}, ${g}, ${b})`;
    previewEl.innerHTML = rgbString;
    previewEl.style.backgroundColor = rgbString;
    if (brightness > 160) {
      previewEl.style.color = "black";
    } else {
      previewEl.style.color = "white";
    }
}


function processColor(rEl, gEl, bEl, previewEl, brightEl) {
    // Get Input Values
  let r = +rEl.value;
  let g = +gEl.value;
  let b = +bEl.value;

  // Validate Input Values - rgb values must be between 0 and 255
  r = constrain(r, 0, 255);
  rEl.value = r;
  g = constrain(g, 0, 255);
  gEl.value = g;
  b = constrain(b, 0, 255);
  bEl.value = b;

  // Calculate & Output Brightness
  let brightness = calcBrightness(r, g, b);
  brightEl.innerHTML = brightness;

  // Update rgb preview: brightness > 160 -> black text, else white text
  updateColor(r, g, b, previewEl, brightness);
}

