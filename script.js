let currentPage = 1;
const totalQuestions = 13; 
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
    pages[pageNumber - 1].classList.add('active');
    move();
}

function nextPage() {
    if (currentPage < 15) {
        currentPage++;
        move();
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

});

showPage(currentPage);



/*extra comment*/
