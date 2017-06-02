$(".start").click(function(){
	$(".start").hide();
});

var content = [
{
question: 'how old is he?',
choice: ['15','20','30'],
answer: '15'
},
{
question: 'what is his name?',
choice: ['john','air','kim'],
answer: 'air'
}
}];

for (var i = 0; i < content.length ; i++){
	console.log(content[i]);
}

