/*
Create a customizable survey form.
The index.html file includes a form, which contains 2 sample questions as illustrations.
A user should be able to type a survey question into the text box with the id "question", click the Submit button, and the question
should be added to the survey.
When the user adds the question to the survey, it should be automatically numbered and a text box should be added below it.
Each survey question should also include a "Remove question" button that a user can click to remove the question from the survey.
In addition to creating the functionality described above, your final code should also do the following:
- Convert the existing code to use implicit iteration
- Implement at least one example of event delegation
- Chain at least 2 methods
Note: This project uses Bootstrap, which is a CSS framework that provides prebuilt styles using class names.
Make sure the new questions you add to the survey use the same class names as in the sample form questions to take advantage of Bootstrap styles.
*/

//not sure if I'm doing this right, also I dont think I selected the right class since the new input box is larger than the original ones

$(document).ready(function() {
  var $surveyList = $("#surveyList")
  var $button = $('#addQuestion');
  var $question = $("#question");
  var $removeButton =$('<button>').html("Remove question");

  function addToList($list, questions) {
  var $thingLi = $('<li>').html(questions).addClass("form-group padout").css({"font-weight":"700"});
  var $AddInput =$('<input>').addClass("form-control");
  var $addButton = $('<button>').html("Remove question");
  $list.append($thingLi, $AddInput, $addButton);

}

