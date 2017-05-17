$('.photoset-grid-custom').photosetGrid({
  // Set the gutter between columns and rows
  gutter: '5px',
  // Manually set the grid layout
  layout: '21',
  // Wrap the images in links
  highresLinks: true,
  // Asign a common rel attribute
  rel: 'print-gallery',

  onInit: function(){},
  onComplete: function(){
    // Show the grid after it renders
    $('.photoset-grid-custom').attr('style', '');
  }
});
