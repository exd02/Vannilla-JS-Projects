/* id = img name (1.jpg, 2.jpg...) */
const reviews = [
  {
    id: 0,
    name: "Susan Smith",
    role: "WEB DEVELOPER",
    desc: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 1,
    name: "Anna Johnson",
    role: "WEB DESIGNER",
    desc: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 2,
    name: "Peter Jones",
    role: "INTERN",
    desc: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 3,
    name: "Bill Anderson",
    role: "THE BOSS",
    desc: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  }
];

// Global Int Id of the reviwer
let gI_id = 0

function changeElements(id)
{
  
  document.getElementById("reviewImg").src = 'img/'.concat(id, '.jpg');
  document.getElementById('name').innerHTML = reviews[id].name
  document.getElementById('role').innerHTML = reviews[id].role
  document.getElementById('desc').innerHTML = reviews[id].desc
}

// print the first item when page loads
window.addEventListener("DOMContentLoaded", function () {
  changeElements(gI_id);
});

function nextPage()
{
  if (++gI_id > 3)
    gI_id = 0
    
  changeElements(gI_id)
}

function prevPage()
{
  if (--gI_id < 0)
    gI_id = 3

  changeElements(gI_id)
}

function randPage()
{
  gI_id = Math.floor(Math.random() * 4);
  changeElements(gI_id)
}