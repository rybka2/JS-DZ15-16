$(function() {

    var $submit = $('.submitbtn');
    var $field = $('.search-request')

    function sendRequest () {

      var $request = $('.search-request').val().split(" ");
      var $urlString = 'https://pixabay.com/api/?key=3750037-59b70644a0ea3a4147bb2a2ad&q='+ $request.join("+") +'&image_type=photo'

      $.ajax({
        url: $urlString,
        dataType: 'json',
        success: function (data) {
          if(data.hits.length > 0) {
            var $target = $('.results-list');
            $target.html('<ul></ul>')
            var $targetList = $('.results-list ul')
            for (var i=0; i<data.hits.length; i++) {
              $($targetList).append('<li><img src="' + data.hits[i].webformatURL + '"></li>')
            }
          }
        }
      })
}

function enterTrigger (e) {
    if(e.keyCode == 13) {
      sendRequest();
    }
}

$submit.on('click', sendRequest);
$field.on('keypress', enterTrigger);

    function Human (name, age, sex, height, weight) {
        this.name = name || 'name';
        this.age = age || 'age';
        this.sex = sex || 'sex';
        this.height = height || 'height' + ' sm';
        this.weight = weight || 'weight' + ' kg';
    }

    function Worker (job, salary) {
        this.job = job || 'job';
        this.salary = salary + '$' || 'salary';
    }

    Worker.prototype = new Human();
    Worker.prototype.work = function () {
        console.log('I am working!');
    }

    function Student (studyPlace, bursary) {
        this.studyPlace = studyPlace || 'study place';
        this.bursary = bursary + '$' || 'bursary';
      }

    Student.prototype = new Human();
    Student.prototype.watchSerial = function () {
        console.log('I am watching serial!');
    };

    var workers = {
        frontEndDeveloper: new Worker('Junior FE dev', 500),
        backEndDeveloper: new Worker('Junior BE dev', 500),
        webDesigner: new Worker('web designer', 500),
        projectManager: new Worker('PM', '...')
    }

    var students = {
        kpiStudent: new Student('KPI', 50),
        knteuStudent: new Student('KNTEU', 60),
        nauStudent: new Student('NAU', 45),
        badStudent: new Student('BAD', 0)
    }

    console.log('workers: ', workers);
    console.log('students: ', students);
}), (jQuery);
