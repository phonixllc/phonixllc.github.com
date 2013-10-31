$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        target = $this.attr('href');
    $this.parents('.tabs').find("li").removeClass("active");
    $this.parents("li").addClass("active");
  
    $(tabgroup).children('div').hide();
    $(target).show();
  
})
    