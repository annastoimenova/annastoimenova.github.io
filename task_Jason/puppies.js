$(document).ready(function(){
			$.get('puppies.mst', function (template) {
				Mustache.parse(template);

				$.ajax({
					url: 'puppies.json',
					dataType: 'json',
					complete: function (data) {
						notie.alert(1, 'PUPPIES!!', 1.5);
						data.responseJSON.forEach(function(item){
							var rendered = Mustache.render(template, item);
							$(rendered)
								.data(item)
								.appendTo($("#image-grid")).click(function(){
									var name = $(this).data('name') || "Puppy";
									var bark = $(this).data('bark') || "Baw Baw";
									notie.alert(4, name + ' says: "' + bark + '"', 1.5);
								});
							//if(Math.random() >= 0.5)
							//	item.addClass('image-grid-item-width2')
						});
						$("#image-grid").masonry({
							itemSelector: '.image-grid-item',
							gutter: 10,//margin between images
							columnWidth: 200
						});
					},
					failure: function (error) {
						notie.error('no puppies');
					}
				});
			});
		});

