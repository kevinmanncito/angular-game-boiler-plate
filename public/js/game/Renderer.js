var Renderer = (function() {

  // A generic drawImage function from Dr. Mathias (for the particles)
  function drawImage(context, spec) {
    context.save();
    
    context.translate(spec.center.x, spec.center.y);
    context.rotate(spec.rotation);
    context.translate(-spec.center.x, -spec.center.y);
    
    context.drawImage(
      spec.image, 
      spec.center.x - spec.size/2, 
      spec.center.y - spec.size/2,
      spec.size, spec.size);
    
    context.restore();
  }

  function render($scope) {
    $scope.canvas.width = $scope.canvas.width;
  }

  return {
    render : render,
    drawImage: drawImage
  };

})();