//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton() {
    console.log($('#navbarplaceholder').load('./text/nav.html'));
    console.log($('#footerplaceholder').load('./text/footer.html'));
}
loadSkeleton();  //invoke the function
