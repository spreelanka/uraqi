// begin fullFunc

window.bookmarklet = function(opts){fullFunc(opts); };

if(window.bookmarklet_called === undefined){
  window.bookmarklet_called = false;
};

if(!window.bookmarklet_called){

  window.bookmarklet({
    ready  : function(){
        insertBox();
        window.bookmarklet_called = true
      }
  });

} else {
    insertBox();
}
