function searchClick(anchor) {
    anchor.closest('.wrapper').classList.toggle('active');
    // console.log("hiii")
    var search = document.getElementById('search');
    console.log(search);
    search.style.display="inline-block";
    search.style.width="100%"
    var searchIcon = document.getElementById('search-icon');
    console.log(searchIcon);
    searchIcon.style.display="none"
  }