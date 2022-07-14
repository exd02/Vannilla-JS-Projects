const articles = document.querySelectorAll('.question-article')

articles.forEach(article => {
  let moreInfoBtn = article.querySelector('.button-see-more')
  let questionAnswer = article.querySelector('.question-answer')

  moreInfoBtn.addEventListener("click", function() {
    // loop through all articles and close all of them before opening the clicked
    articles.forEach(artc => {
      if (article != artc)
        artc.classList.remove('show')
        
      article.classList.toggle('show')
    });
  })
})

