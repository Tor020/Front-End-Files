(function() {
  
timeline_LayoutFix()

})()

function timeline_LayoutFix(){

  // In order to center the timeline elements to match the design document, the image, and paragraph container elements must be the same height. This will get the height of a paragraph element, they should all be the same size hopefully


let imageElements = document.querySelectorAll('.about-timeline-image');
let p_Timeline = document.querySelectorAll('.about-p-timeline');

let pElementHeight = p_Timeline[0].offsetHeight // gets the height of the first p element returned in the array

imageElements.forEach(image =>{  // for each image in the array assign them the height of the pElementHeight
  Object.assign(image.style,{height:`${pElementHeight}px`})
})

  p_Timeline.foreach(p => {  // ensures that all p elements will be the same size
    Object.assign(p.style,{height:`${pElementHeight}px`})
  })
}
