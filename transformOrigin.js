module.exports = function(target, state) {

  if( state.anchor ) {
    
    var anchor = state.anchor || [ 0.5, 0.5 ],
        cssValue = Math.round( anchor[ 0 ] * 100 ) + '% ' + Math.round( anchor[ 1 ] * 100 ) + '%';

   target.style[ 'transform-origin' ] = cssValue;
   target.style[ '--webkit-transform-origin' ] = cssValue;
   target.style[ '--ms-transform-origin' ] = cssValue;
   target.style[ '--moz-transform-origin' ] = cssValue;
  }
};