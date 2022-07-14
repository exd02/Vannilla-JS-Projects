function toggleVisibility(idName, cssClass)
{
  let elementId = document.getElementById(idName)

  if (elementId.classList.contains(cssClass))
    elementId.classList.remove(cssClass)
  else
    elementId.classList.add(cssClass)

}