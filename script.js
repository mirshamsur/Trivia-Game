$('document').ready(function(){
	$('.answerSelected').hide()
	var score = 0
	var index =0
	function shuffle (array){
		for (var i=0; i <array.length -1; i++){
			var j=i+ Math.floor(Math.random() * (array.length-i))
			var shuffledArray = array[j]
			array [j] = array[i]
			array[i]= shuffledArray
			}
		}
	function startTimer(){
		var time = 50
		$ ('.time').show()
		$('.time').text(time)
		var counter = setInterval(function(){

			time--
			$('.time').text(time)
			if(time === 0){
				alert ('Game is over. ' + 'Your score:' + score +' correct!')
				score =0
				$('.time').fadeOut('fast')
				$('.question').hide()
				$('#buttonA').hide()
				$('#buttonB').hide()
				$('#buttonC').hide()
				$('#buttonD').hide()
				beginGame()
				clearInterval(counter)

			}
		}, 1000)
	}
$('.answerSelected').on('click',nextQuestion)
function nextQuestion(){
	displayQuestion(index)
}
function beginGame(){
	index = 0
	if ($('#startButton').length > 0){
		$ ('#startButton').show()
	}else{
		$('.container').append ('<button id="startButton">Start</button>')
		$('#startButton').on('click', function(){
			$(this).hide()
			$('.question').show()
			startTimer(index)
			shuffle(questionArr)
			displayQuestion(index)
		})

	}
}

function displayQuestion(questionIndex){
	$('.question').html(questionArr[questionIndex].question)
	$('#buttonA')
		.text(questionArr[questionIndex].possibleAnswers[0])
		.show()
	$('#buttonB')
		.text(questionArr[questionIndex].possibleAnswers[1])
		.show()
	$('#buttonC')
		.text(questionArr[questionIndex].possibleAnswers[2])
		.show()
	$('#buttonD')
		.text(questionArr[questionIndex].possibleAnswers[3])
		.show()
}

$('.answerSelected').on('click',function(){
	index++
	score++
	correctAnswer(this)
	nextQuestion()
	displayQuestion(index)
})

function correctAnswer(element,score){
	var answerSelected
	if(element.id === 'buttonA'){
		answerSelected='A.'
			}else if(element.id === 'buttonB'){
				answerSelected =  'B.'

			}else if(element.id === 'buttonC'){
				answerSelected = 'C.'
				
			}else if(element.id ==='buttonD'){
				answerSelected = 'D.'
			}

			var correctAnswer = true
			if(answerSelected === 'A.' && questionArr [index - 1].marks [0] === true){
				score ++
			}else if(answerSelected === 'B.' && questionArr[index - 1].marks[1]===true){
				score ++

				}else if(answerSelected === 'C.' && questionArr[index - 1].marks[2]===true){
				score ++

			}else if(answerSelected === 'D.' && questionArr[index - 1].marks[3]===true){
				score ++
			}else{
				correctAnswer = false
			}

			}

			beginGame()
		})







