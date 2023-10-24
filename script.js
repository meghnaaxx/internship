let currentPage = 0;
const totalQuestions = 14; 
var propertyType = "";
var apartmentType =[];
var rentalType ="";
var roomNumber = "";
var yearInput = "";
var money;
var timeInput;
var req;
var numOccu;
var gender;
var workpassType = [];
function move() {
    var elem = document.getElementById("myBar");
    var width = (currentPage - 1) * (100 / totalQuestions); // Calculate the progress based on the current question
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= currentPage * (100 / totalQuestions)) {
            clearInterval(id);
        } else if (width < currentPage * (100 / totalQuestions)) {
            width++;
            elem.style.width = width + '%';
            }
    }
}


function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    pages[pageNumber].classList.add('active');
    move();
}

function nextPage() {
    if(currentPage === 0){
        var selectedOption = document.getElementById('selectedOption').value;
        propertyType = selectedOption;
        if(selectedOption){
            currentPage++;
            move();
            showPage(currentPage);    
        }
    }
    else if(currentPage === 1){
        currentPage++;
        move();
        showPage(currentPage);
    }
    else if(currentPage === 2){
        apartmentType.length = 0;
        const checkboxes = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');
        console.log(checkboxes);

        // Iterate through checkboxes and add selected values to the array
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                apartmentType.push(checkbox.value);
            }
        });
        if(apartmentType.length>0){
            currentPage++;
            move();
            showPage(currentPage);
    
        }
    }
    else if(currentPage === 3){
        var selectedOptionPage3 = document.getElementById('selectedOptionPage3').value;
        rentalType = selectedOptionPage3;
        if(selectedOptionPage3){
            currentPage++;
            move();
            showPage(currentPage);    
        }
    }
    else if(currentPage === 4){
        var selectedOptionPage4 = document.getElementById('selectedOptionPage4').value;
        roomNumber = selectedOptionPage4;
        if(selectedOptionPage4){
            currentPage++;
            move();
            showPage(currentPage);    
        }
    }
    else if(currentPage === 5){
        var selectedOptionPage5 = document.getElementById('selectedOptionPage5').value;
        yearInput = selectedOptionPage5;
        if(selectedOptionPage5){
            currentPage++;
            move();
            showPage(currentPage);    
        }
    }
    else if(currentPage === 6){
    var inputElement = document.querySelector('.inputmoney'); // Select the input element using its class
    money = inputElement.value; // Get the input value and store it in the variable
    console.log('Input Value:', money);
    if(money){
        currentPage++;
        move();
        showPage(currentPage);
    }
    }
    else if(currentPage === 7){
        var selectedOptionPage7 = document.getElementById('selectedOptionPage7').value;
        timeInput = selectedOptionPage7;
        if(selectedOptionPage7){
            currentPage++;
            move();
            showPage(currentPage);    
        }
    }
    else if(currentPage === 8){
        var requirement = document.querySelector('.inputrqrmnt'); // Select the input element using its class
        req = requirement.value; // Get the input value and store it in the variable
        console.log('Input Value:', money);
        if(req){
            currentPage++;
            move();
            showPage(currentPage);
        }
    }
    else if(currentPage === 9){
        var selectedOptionPage9 = document.getElementById('selectedOptionPage9').value;
        numOccu = selectedOptionPage9;
        if(selectedOptionPage9){
            currentPage++;
            move();
            showPage(currentPage);    
        }
    }
    else if(currentPage === 10){
        var selectedOptionPage10 = document.getElementById('selectedOptionPage10').value;
        gender = selectedOptionPage10;
        if(selectedOptionPage10){
            currentPage++;
            move();
            showPage(currentPage);    
        }
    }
    else if(currentPage === 11){
        var selectedOptionPage9 = document.getElementById('selectedOptionPage9').value;
        numOccu = selectedOptionPage9;
        if(selectedOptionPage9){
            currentPage++;
            move();
            showPage(currentPage);    
        }
    }
    else if(currentPage === 12){
        workpassType.length = 0;
        const checkboxes = document.querySelectorAll('.special-input input[type="checkbox"]');
        console.log(checkboxes);

        // Iterate through checkboxes and add selected values to the array
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                workpassType.push(checkbox.value);
            }
        });
        if(workpassType.length>0){
            currentPage++;
            move();
            showPage(currentPage);
    
        }
    }
    else{
        currentPage++;
        move();
        showPage(currentPage);
    }
    
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

});

var inputs = document.querySelectorAll('.House-input');
    inputs.forEach(function(input) {
        input.addEventListener('click', function() {
            // Store the selected option in the hidden input field
            document.getElementById('selectedOption').value = input.placeholder;
        });
    });

    var inputs4 = document.querySelectorAll('.room-input');
    inputs4.forEach(function(input) {
        input.addEventListener('click', function() {
            // Store the selected option in the hidden input field
            document.getElementById('selectedOptionPage4').value = input.placeholder;
        });
    });
    
    var inputs5 = document.querySelectorAll('.year-input');
    inputs5.forEach(function(input) {
        input.addEventListener('click', function() {
            // Store the selected option in the hidden input field
            document.getElementById('selectedOptionPage5').value = input.placeholder;
        });
    });

    var inputs3 = document.querySelectorAll('.rental-input');
    inputs3.forEach(function(input) {
        input.addEventListener('click', function() {
            // Store the selected option in the hidden input field
            document.getElementById('selectedOptionPage3').value = input.placeholder;
        });
    });
    
    var inputs7 = document.querySelectorAll('.time-input');
    inputs7.forEach(function(input) {
        input.addEventListener('click', function() {
            // Store the selected option in the hidden input field
            document.getElementById('selectedOptionPage7').value = input.placeholder;
        });
    });
    var inputs9 = document.querySelectorAll('.occupant-input');
    inputs9.forEach(function(input) {
        input.addEventListener('click', function() {
            // Store the selected option in the hidden input field
            document.getElementById('selectedOptionPage9').value = input.placeholder;
        });
    });
    var inputs10 = document.querySelectorAll('.gender-input');
    inputs10.forEach(function(input) {
        input.addEventListener('click', function() {
            // Store the selected option in the hidden input field
            document.getElementById('selectedOptionPage10').value = input.placeholder;
        });
    });

showPage(currentPage);

function getCurrentPageNumber() {
    var activePage = document.querySelector('.page.active');
    if (activePage) {
        // Extract the page number from the ID of the active page
        var pageNumber = parseInt(activePage.id.split(' ')[1]);
        return pageNumber;
    } else {
        // Return a default value or handle the case when no active page is found
        return -1; // For example, return -1 if no active page is found
    }
}


/*extra comment*/
