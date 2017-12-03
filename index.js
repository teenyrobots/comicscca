function randomBackground() {
    var backgroundNum = Math.floor(Math.random() * 15) + 1;
    var backgroundImg = "images/backgrounds/" + backgroundNum + ".jpg";
    $('body').css('background-image', 'url(' + backgroundImg + ')');
    whichStudent(backgroundNum);
};

function whichStudent(x) {
    var student = {}

    switch(x) {
        case 1:
            student = {
                name: "Ashley Guillory",
                title: "Sam's Town"
            }
            console.log(student.name);
            console.log(student.title);
            break;

        case 2:
            student = {
                name: "Bex Freund",
                title: "Fever Dreams of the City that Never Was"
            }
            console.log(student.name);
            console.log(student.title);
            break;

        case 3:
            student = {
                name: "Maia Kobabe",
                title: "The Theif's Tale"
            }
            console.log(student.name);
            console.log(student.title);
            break;

        case 4:
            student = {
                name: "Josh White",
                title: "Bad Year"
            }
            console.log(student.name);
            console.log(student.title);
            break;

        case 5:
            student = {
                name: "Ryan Bitinis",
                title: "The Tale of Old Ryan"
            }
            console.log(student.name);
            console.log(student.title);
            break;

        case 6:
            student = {
                name: "Kayan Cheung-Miaw",
                title: "Your Struggle is Your Strength"
            }
            console.log(student.name);
            console.log(student.title);
            break;

        case 7:
            student = {
                name: "Masami Inoue",
                title: "Whale and Albatross"
            }
            console.log(student.name);
            console.log(student.title);
            break;

        case 8:
            student = {
                name: "Cordelia McGee-Tubb",
                title: "Your Hands Are Clean and You Have Nothing to Worry About"
            }
            console.log(student.name);
            console.log(student.title);
            break;

        case 9:
            student = {
                name: "Kristin Olson",
                title: "Sick Bed Blues"
            }
            console.log(student.name);
            console.log(student.title);
            break;

        case 10:
            student = {
                name: "Lyssette Williams",
                title: "4"
            }
            console.log(student.name);
            console.log(student.title);
            break;

        case 11:
            student = {
                name: "Tris Bain",
                title: "The First Witch"
            }
            console.log(student.name);
            console.log(student.title);
            break;

        case 12:
            student = {
                name: "Eli Bishop",
                title: "TK"
            }
            console.log(student.name);
            console.log(student.title);
            break;

        case 13:
            student = {
                name: "Craig Campbell",
                title: "TK"
            }
            console.log(student.name);
            console.log(student.title);
            break;

        case 14:
            student = {
                name: "Garrett Gainey",
                title: "Speed of Light"
            }
            console.log(student.name);
            console.log(student.title);
            break;

        case 15:
            student = {
                name: "Patrick Lay",
                title: "Ramble"
            }
            console.log(student.name);
            console.log(student.title);
            break;

        default:
            student = {
                name: "All our students",
                title: "are great"
            }
            console.log(student.name);
            console.log(student.title);
            break;
    };

    $("#name").append(student.name);
    $("#title").append(student.title);
}