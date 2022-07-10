let num = 0

function changeCounter(id, n)
{
  num = num + parseInt(n)
  document.getElementById(id).innerHTML = num
  if (num === 0)
    document.getElementById(id).style.color = 'rgb(38, 38, 75)'
  else if (num > 0)
    document.getElementById(id).style.color = 'green'
  else 
  document.getElementById(id).style.color = 'red'
}

function resetCounter(id) {
  num = 0
  document.getElementById(id).innerHTML = num
  document.getElementById(id).style.color = 'rgb(38, 38, 75)'
}