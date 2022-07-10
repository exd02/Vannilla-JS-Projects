function changeBackgroundColor(id)
{
  let randomColor = "#".concat(Math.floor(Math.random()*16777215).toString(16))
  document.getElementById(id).style.backgroundColor = randomColor
  document.getElementById('colorValue').innerHTML = randomColor
}