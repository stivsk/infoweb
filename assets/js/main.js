(function(){

	var touch = $('#showNav');
	var menu = $('#nav');

	touch.on('click',function(e){
		e.preventDefault();
		menu.slideToggle();
	});


	var disqus_shortname = 'yeiksite2'; 
   	(function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
	$('.comments').html('<div id="disqus_thread"></div> <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>');


})();