const colors = ["Rgba(133,122,200)", "#F15025", "Green", "Red"]

function changeBackgroundColor(id)
{
  let random = Math.floor(Math.random() * 4)
  document.getElementById(id).style.backgroundColor = colors[random]
  document.getElementById('colorValue').innerHTML = colors[random]
}