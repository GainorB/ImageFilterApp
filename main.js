const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image(),
  fileName = '';

const downloadBTN = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBTN = document.getElementById('revert-btn');

// Add filters and effects
// Event Delegation
// Doesn't have to be the document, it can be any parent of all the buttons
document.addEventListener('click', e => {
  const classes = e.target.classList;
  console.log(classes);
  // target specific classes
  // checks to see if the button clicked contains the filter-btn class
  // if (e.target.classList.contains('filter-btn')) {
  //   if (e.target.classList.contains('brightness-add')) {
  //     Caman('#canvas', img, function() {
  //       this.brightness(5).render();
  //     });
  //   } else if (e.target.classList.contains('brightness-remove')) {
  //     Caman('#canvas', img, function() {
  //       this.brightness(-5).render();
  //     });
  //   } else if (e.target.classList.contains('contrast-add')) {
  //     Caman('#canvas', img, function() {
  //       this.contrast(5).render();
  //     });
  //   } else if (e.target.classList.contains('contrast-remove')) {
  //     Caman('#canvas', img, function() {
  //       this.contrast(-5).render();
  //     });
  //   } else if (e.target.classList.contains('saturation-add')) {
  //     Caman('#canvas', img, function() {
  //       this.saturation(5).render();
  //     });
  //   } else if (e.target.classList.contains('saturation-remove')) {
  //     Caman('#canvas', img, function() {
  //       this.saturation(-5).render();
  //     });
  //   } else if (e.target.classList.contains('vibrance-add')) {
  //     Caman('#canvas', img, function() {
  //       this.vibrance(5).render();
  //     });
  //   } else if (e.target.classList.contains('vibrance-remove')) {
  //     Caman('#canvas', img, function() {
  //       this.vibrance(-5).render();
  //     });
  //   } else if (e.target.classList.contains('vintage-add')) {
  //     Caman('#canvas', img, function() {
  //       this.vintage().render();
  //     });
  //   } else if (e.target.classList.contains('lomo-add')) {
  //     Caman('#canvas', img, function() {
  //       this.lomo().render();
  //     });
  //   } else if (e.target.classList.contains('clarity-add')) {
  //     Caman('#canvas', img, function() {
  //       this.clarity().render();
  //     });
  //   } else if (e.target.classList.contains('sincity-add')) {
  //     Caman('#canvas', img, function() {
  //       this.sinCity().render();
  //     });
  //   } else if (e.target.classList.contains('crossprocess-add')) {
  //     Caman('#canvas', img, function() {
  //       this.crossProcess().render();
  //     });
  //   } else if (e.target.classList.contains('pinhole-add')) {
  //     Caman('#canvas', img, function() {
  //       this.pinhole().render();
  //     });
  //   } else if (e.target.classList.contains('nostalgia-add')) {
  //     Caman('#canvas', img, function() {
  //       this.nostalgia().render();
  //     });
  //   } else if (e.target.classList.contains('hermajesty-add')) {
  //     Caman('#canvas', img, function() {
  //       this.herMajesty().render();
  //     });
  //   }
  // }
});

// Upload File
uploadFile.addEventListener('change', () => {
  // Get File
  const file = document.getElementById('upload-file').files[0];

  // init FileReader
  const reader = new FileReader();
  if (file) {
    // Set file name
    fileName = file.name;
    // Read data as URL
    reader.readAsDataURL(file);
  }

  // Add image to canvas
  reader.addEventListener(
    'load',
    () => {
      // create image
      img = new Image();
      // set image src
      img.src = reader.result;
      // On image load, add to canvas
      img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.removeAttribute('data-caman-id');
      };
    },
    false
  );
});
