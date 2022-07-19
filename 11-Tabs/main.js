const tabs = document.querySelectorAll('.tab-button')
const tabInfo = document.querySelectorAll('.info')

tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    //return for self-targeting
    if (tab.classList.contains('active-tab'))
      return
    
    const targetName = tab.getAttribute("data-id")
    const target = document.getElementById(targetName)

    // loop to hide remove all active tabs
    tabs.forEach(element => {
      element.classList.remove('active-tab')
    });
    tabInfo.forEach(element => {
      element.classList.remove('active-tab-info')
    });

    tab.classList.add('active-tab')
    target.classList.add('active-tab-info')
  }) 
})