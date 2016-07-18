$("#filter-search").keyup(function() {

    // find value using search bar
    var $search = $("#filter-search").val();

    // images located in the list items
    var $imgs = $('li');
    
    $imgs.each(function(){

        // search for alt attribute for images
        var $imgAlt = $(this).find("img").attr("alt");
        
        // only show images with matched alt values
        if($imgAlt.toUpperCase().indexOf($search.toUpperCase()) === -1){
            $(this).fadeOut("slow");                
        }

        $imgs.show();
    });
});