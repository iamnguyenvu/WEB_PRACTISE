$(document).ready(function(){
    $('#Courses').change(function(){
        var course = $(this).val();
        var timeLearning;
        if(course === "basicEnglish") {
            timeLearning = "3 tháng";
        } else if(course === "englishCommunicate") {
            timeLearning = "9 tháng";
        } else if(course === "ielts") {
            timeLearning = "12 tháng";
        }
        $('#timeLearning').val(timeLearning);
    });
});