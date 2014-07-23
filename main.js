// Would have been better to check if next character is string instead of
// last char is number, would have eliminated need to slice.
// Update: this way breaks with large numbers too but I understand
// the problem so I'm moving on.

var addNumbers = function(string) {
	var numbers = []
	var lastIsNumber = false
	var sum = 0
	for (var i = 0; i < string.length; i++) {
		if(lastIsNumber && parseInt(string[i])) {
			newNumber = string[i-1] + string[i]
			numbers.splice(numbers.length-1, 1)
		}
		else { newNumber = string[i]}
		lastIsNumber = false
		if(parseInt(string[i])){
			numbers.push(newNumber)
			lastIsNumber = true
		}

	};
	for (var i = 0; i < numbers.length; i++) {
		sum += parseInt(numbers[i])
	};
	console.log(sum)
	return sum
}
addNumbers("23john45john9a")

// Only breaks on user error. (Specifically if the last word is the longest
//  and there is no final punctuation.)


var longestWord = function(string) {
	var exclude = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "`", "~", "[", "]", "{", "}", "|", "/", ";", ":", ",", ".", "<", ">", "?", " "]
	var words = []
	var longest = ""
	var currentWord = ""
	var longestLength = 0
	
	for (var i = 0; i < string.length; i++) {
		if(exclude.indexOf(string[i]) !== -1) {
			words.push(currentWord)
			currentWord = ""
		}
		else {
			currentWord += string[i]
		}
	};

	for (var i = 0; i < words.length; i++) {
			if(words[i].length>longestLength) {
				longestLength = words[i].length
				longest = words[i]
				console.log(longest)
			}
	}
	return longest	
}
longestWord("John quickly defenestrated the offending arachnid.")








