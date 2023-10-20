let currentPage = 0;
const totalQuestions = 14; 
var propertyType = "";
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
    else if(currentPage === 1){
        currentPage++;
        move();
        showPage(currentPage);
    }
    else if(currentPage === 1){
        currentPage++;
        move();
        showPage(currentPage);
    }
    else if(currentPage === 1){
        currentPage++;
        move();
        showPage(currentPage);
    }
    else if(currentPage === 1){
        currentPage++;
        move();
        showPage(currentPage);
    }
    else if(currentPage === 1){
        currentPage++;
        move();
        showPage(currentPage);
    }
    else if(currentPage === 1){
        currentPage++;
        move();
        showPage(currentPage);
    }
    else if(currentPage === 1){
        currentPage++;
        move();
        showPage(currentPage);
    }
    else if(currentPage === 1){
        currentPage++;
        move();
        showPage(currentPage);
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
