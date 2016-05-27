var main = {
	init : function(){
		this.load();
		this.timerID = window.setInterval(function(){main.tick()}, 200);
	},
	timerID: 0,
	counter: 0,
	
	tick : function(){
		this.updateDisplay();
		this.save();
		this.counter++;
	},
	
	updateDisplay: function(){
		
	},
	
	save : function(){
		
	},
	
	load : function(){
		
	},
	
	alrt: function(input){
		var alert = $("<div class='alert'>" + input + "</div>");
		$('#alerts').append(alert);
		setTimeout(function(){
			alert.fadeOut('slow',function(){
				$(this).remove();
			});
		},3000);
	}
};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};