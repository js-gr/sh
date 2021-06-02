window.onload = function(){
    var params = (new URL(document.location)).searchParams;
    var pass = params.get('p');
    if ( pass == "114514" ) {
      var params = (new URL(document.location)).searchParams;
      var url = params.get('u');
      location.href = 'https://is.gd/' + url ;
    }
}
