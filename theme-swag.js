var ThemeSwag = ( function( window ) {
  
  function getTheme() {
    var fulldomain = window.location.host
    var parts = fulldomain.split('.')
    return parts[0];
  }
  
  function setBranding() {
    var body = document.getElementsByTagName("body")[0];
    body.setAttribute("data-theme", getTheme()); 
  }
  
  return {
    getTheme : getTheme,
    setTheme : setTheme
  };
  
} )( window );