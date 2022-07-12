function toggleMenuVisibility()
{
  let elementId = document.getElementById('navPagesLinks')
  let classToAdd = "show"

  if (elementId.classList.contains(classToAdd))
    elementId.classList.remove(classToAdd)
  else
    elementId.classList.add(classToAdd)
    
}