function toggleAsideVisibility()
{
  let elementId = document.getElementById('aside')
  let classToAdd = "show"

  if (elementId.classList.contains(classToAdd))
    elementId.classList.remove(classToAdd)
  else
    elementId.classList.add(classToAdd)
    
}