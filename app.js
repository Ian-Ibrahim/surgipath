var nav = document.querySelector("nav");
function openCategoryPage(category) {
    window.location.href = `category.html?category=${category}`;
}

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6818a7695d55ef191a9db2f9/1iqg4rte0';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();


function showSearchModal(){
  searchModal.style.top='0rem';
}
function closeSearchModal(){
  searchModal.style.top='-20rem';
}
function navSearch(){
  let queryTerm=document.getElementById('query').value
  window.location.href=`search.html?keyword=${queryTerm}`;
  return false;
}
function searchSubmit(){
  return false;
  
}
const dateToday = new Date();
document.getElementById("get-current-year").innerHTML=dateToday.getFullYear()
$(document).ready(function () {
  // Get all buttons with anchor inside
const anchorButtons = document.querySelectorAll('button  a');

anchorButtons.forEach((button) => {
    button.parentElement.addEventListener('click', () => {
      const href = button.getAttribute('href');
      window.location.href = href;
    });
    });

    $("#partners-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [650, 1],
        pagination: false,
        navigation: false,
        slideSpeed: 100,
        autoPlay: true
    });
});
// document.addEventListener('click', function(event) {
//   // Check if the clicked element is outside the div
//   if (!nav.contains(event.target)) {
//     console.log('jj')
//     document.getElementById('mega-menu-show').click()
//   }
// });
function openProductPage(productId) {
    window.location.href = `product.html?productId=${productId}`;
}
  fetch('products.json')
  .then(response => response.json())
  .then(products => {
    // Extract the download links and product names
    const downloadLinks = products
      .filter(product => product.downloadLink !== '') // exclude products with empty download links
      .map(product => product.downloadLink);
    const productNames = products
      .filter(product => product.downloadLink !== '') // exclude products with empty download links
      .map(product => product.name);

    // Create list items with links for each download link
    const listItems = downloadLinks.map((link, index) => {
        return `<li><a href="${link}" target="_blank" class="link text-blue-600 hover:text-blue-800">${productNames[index]}</a></li>`;
    });

    // Add the list items to the ul element
    const ul = document.getElementById('download-links');
    ul.innerHTML = listItems.join('');
                  })
                  .catch(error => console.error(error));fetch('products.json')
      .then(response => response.json())
      .then(products => {
          // Extract the download links and product names
          const downloadLinks = products
          .filter(product => product.downloadLink !== '') // exclude products with empty download links
          .map(product => product.downloadLink);
          const productNames = products
          .filter(product => product.downloadLink !== '') // exclude products with empty download links
          .map(product => product.name);

          // Create list items with links for each download link
          const listItems = downloadLinks.map((link, index) => {
          return `<li><a href="${link}" target="_blank">${productNames[index]}</a></li>`;
          });

          // Add the list items to the ul element
          const ul = document.getElementById('download-links');
          ul.innerHTML = listItems.join('');
      })
      .catch(error => console.error(error));