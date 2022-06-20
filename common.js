function gtaglogin () {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
  'event' : 'login',
  'loginMethod' : 'email' // this should be replaced with an actual login method
  });  
  console.log("gtaglogin")
}
