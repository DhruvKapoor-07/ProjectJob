     
        const addbutton = document.querySelector('#add');

        const addnew = () => {
            const container = document.getElementById('job-listing');
            const square = document.createElement('div');
            
            square.classList.add('square');
            // square.style.backgroundColor = 'white'; // Set the background color directly on the square element
            let name = document.getElementById("name1").value;
            let exp = document.getElementById("name2").value;
            let pack = document.getElementById("name3").value;
            let l = document.getElementById("name4").value;
            // Add information inside the square element
            square.innerHTML = `
            <div class="mid>
            <div class="square">
            <div class="head">${name}</div>
            <div>Cam Tools Industries</div><br>
            <div class="textSquare">
            <div><i class="fa-solid fa-bag-shopping"></i> <span style="margin-left: 10px;"> ${exp} Yrs</span> <span id="ruppee" class="vertical"></span><i id="ruppee" class="fa-solid fa-indian-rupee-sign"></i> ${pack} Lacs PA<span id="ruppee"  class="vertical"></span><i id="ruppee" class="fa-solid fa-location-dot"></i>${l}</div>
            <div><i class="fa-regular fa-note-sticky"></i><span style="margin-left: 10px;">Exceptional managerial, communication, problem-solving skills. .Bach.. </span> </div>
            <p>Finite Element Analysis <span class="smallHorizontal"></span><span>and lumax.<span class="smallHorizontal"></span></span><span style="font-size: 12px;"> The ideal candidate will possess a profound understanding of the automative Tier<span class="smallHorizontal"></span></span><span>Desining<span class="smallHorizontal"></span></span>Analysis</p>
            <div><span class="date">6 Days Ago</span> <span style="margin-left: 350px;">Save <i class="fa-regular fa-bookmark"></i></span></div>
        </div><br>
        </div>
            `;
            
            container.appendChild(square);
        };
        
        addbutton.addEventListener('click', () => addnew());

        function closeIt(){
            if(document.getElementById("dept").classList!="hidden"){
                // document.getElementById("arrow").innerHTML.classList = <i class="fa-solid fa-angle-up"></i>;
                document.getElementById("dept").classList="hidden";

            }
            
            // document.getElementById("dept").classList="hidden";
            else if(document.getElementById("dept").classList=="hidden"){
                document.getElementById("dept").classList="block";
            }
            // document.getElementById("dept").classList.toggle="";

            // document.getElementById("dept").toggleAttribute.style.display="block";
        }
        function work(){
            if(document.getElementById("work").classList!="hidden"){
                // document.getElementById("arrow").innerHTML.classList = <i class="fa-solid fa-angle-up"></i>;
                document.getElementById("work").classList="hidden";

            }
            
            // document.getElementById("dept").classList="hidden";
            else if(document.getElementById("work").classList=="hidden"){
                document.getElementById("work").classList="block";
            }
            
            // document.getElementById("dept").toggleAttribute.style.display="block";
        }
        function dept1(){
            if(document.getElementById("dept1").classList!="hidden"){
                // document.getElementById("arrow").innerHTML.classList = <i class="fa-solid fa-angle-up"></i>;
                document.getElementById("dept1").classList="hidden";

            }
            
            // document.getElementById("dept").classList="hidden";
            else if(document.getElementById("dept1").classList=="hidden"){
                document.getElementById("dept1").classList="block";
            }
            
            // document.getElementById("dept").toggleAttribute.style.display="block";
        }
        function company(){
            if(document.getElementById("company").classList!="hidden"){
                // document.getElementById("arrow").innerHTML.classList = <i class="fa-solid fa-angle-up"></i>;
                document.getElementById("company").classList="hidden";

            }
            
            // document.getElementById("dept").classList="hidden";
            else if(document.getElementById("company").classList=="hidden"){
                document.getElementById("company").classList="block";
            }
            
            // document.getElementById("dept").toggleAttribute.style.display="block";
        }
        function role12(){
            if(document.getElementById("role12").classList!="hidden"){
                // document.getElementById("arrow").innerHTML.classList = <i class="fa-solid fa-angle-up"></i>;
                document.getElementById("role12").classList="hidden";

            }
            
            // document.getElementById("dept").classList="hidden";
            else if(document.getElementById("role12").classList=="hidden"){
                document.getElementById("role12").classList="block";
            }
            
            // document.getElementById("dept").toggleAttribute.style.display="block";
        }
        function locate(){
            if(document.getElementById("locate").classList!="hidden"){
                // document.getElementById("arrow").innerHTML.classList = <i class="fa-solid fa-angle-up"></i>;
                document.getElementById("locate").classList="hidden";

            }
            
            // document.getElementById("dept").classList="hidden";
            else if(document.getElementById("locate").classList=="hidden"){
                document.getElementById("locate").classList="block";
            }
            
            // document.getElementById("dept").toggleAttribute.style.display="block";
        }
        function education(){
            if(document.getElementById("education").classList!="hidden"){
                // document.getElementById("arrow").innerHTML.classList = <i class="fa-solid fa-angle-up"></i>;
                document.getElementById("education").classList="hidden";

            }
            
            // document.getElementById("dept").classList="hidden";
            else if(document.getElementById("education").classList=="hidden"){
                document.getElementById("education").classList="block";
            }
            
            // document.getElementById("dept").toggleAttribute.style.display="block";
        }
        function posted(){
            if(document.getElementById("posted").classList!="hidden"){
                // document.getElementById("arrow").innerHTML.classList = <i class="fa-solid fa-angle-up"></i>;
                document.getElementById("posted").classList="hidden";

            }
            
            // document.getElementById("dept").classList="hidden";
            else if(document.getElementById("posted").classList=="hidden"){
                document.getElementById("posted").classList="block";
            }
            
            // document.getElementById("dept").toggleAttribute.style.display="block";
        }
        function jobs(){
            if(document.getElementById("jobs").classList!="hidden"){
                // document.getElementById("arrow").innerHTML.classList = <i class="fa-solid fa-angle-up"></i>;
                document.getElementById("jobs").classList="hidden";

            }
            
            // document.getElementById("dept").classList="hidden";
            else if(document.getElementById("jobs").classList=="hidden"){
                document.getElementById("jobs").classList="block";
            }
            
            // document.getElementById("dept").toggleAttribute.style.display="block";
        }
        function industry(){
            if(document.getElementById("industry").classList!="hidden"){
                // document.getElementById("arrow").innerHTML.classList = <i class="fa-solid fa-angle-up"></i>;
                document.getElementById("industry").classList="hidden";

            }
            
            // document.getElementById("dept").classList="hidden";
            else if(document.getElementById("industry").classList=="hidden"){
                document.getElementById("industry").classList="block";
            }
            
            // document.getElementById("dept").toggleAttribute.style.display="block";
        }
        function exp(){
            if(document.getElementById("exp").classList!="hidden"){
                // document.getElementById("arrow").innerHTML.classList = <i class="fa-solid fa-angle-up"></i>;
                document.getElementById("exp").classList="hidden";

            }
            
            // document.getElementById("dept").classList="hidden";
            else if(document.getElementById("exp").classList=="hidden"){
                document.getElementById("exp").classList="block";
            }
            
            // document.getElementById("dept").toggleAttribute.style.display="block";
        }
        let search_bar = document.getElementById("s");
        let div_tags = document.querySelectorAll("#job-listing > div");
        
        search_bar.addEventListener("input", find_and_show);
        
        function find_and_show() {
          let searchTerm = search_bar.value.toLowerCase();
          div_tags.forEach(div => {
            let element = div.textContent.toLowerCase();
            if (element.includes(searchTerm)) {
              div.style.display = '';
            } else {
              div.style.display = 'none';
            }
          });
        }
        function privacy()
        {
            window.open( "privacypolicy.html");
        }
        function terms(){
            window.open("terms.html");
        }
        function saved(){
            window.open("saved.html");
        }
        // Get reference to the div and save button
// const contentDiv = document.getElementById('square');
document.querySelectorAll('.square').forEach((square, index) => {
    const saveButton = square.querySelector(`#save${index + 1}`);
    saveButton.addEventListener('click', function() {
        const content = square.innerHTML;
        sessionStorage.setItem(`savedDivContent${index + 1}`, content);
        alert('Div content saved to session storage!');
    });
});

// Get reference to the checkboxes and the list of items// Function to filter content based on selected checkboxes

    // Get references to the checkboxes and items to be filtered
    const workModeCheckbox = document.getElementById('workModeCheckbox');
    const HybridCheckbox = document.getElementById('HybridCheckbox');
    const SalaryCheckbox1 = document.getElementById('SalaryCheckbox1');
    const SalaryCheckbox2 = document.getElementById('SalaryCheckbox2');
    const SalaryCheckbox3= document.getElementById('SalaryCheckbox3');
    const SalaryCheckbox4 = document.getElementById('SalaryCheckbox4');
    const ProductionCheckbox = document.getElementById('ProductionCheckbox');
    const btechCheckbox = document.getElementById('btechCheckbox');
    const companyCheckbox = document.getElementById('companyCheckbox');
    const consultantCheckbox = document.getElementById('consultantCheckbox');
    const chennaiCheckbox = document.getElementById('chennaiCheckbox');
    const bangloreCheckbox = document.getElementById('bangloreCheckbox');
    const puneCheckbox = document.getElementById('puneCheckbox');
    const delhiCheckbox = document.getElementById('delhiCheckbox');
    const engnCheckbox = document.getElementById("engnCheckbox");
    // Add more checkbox references as needed
    
    // Get references to items to be filtered
    const itemsToFilter = document.querySelectorAll('.square'); // Assuming you want to filter these elements

    // Filter the items based on the checkbox states
    workModeCheckbox.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            // Iterate through each item to filter
            itemsToFilter.forEach(item => {
                // Example filtering based on the checkbox state
                if (item.textContent.includes('Microsoft')||item.textContent.includes('Deloitte')||item.textContent.includes('Design')||item.textContent.includes('Infosys')) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        } else {
            // If the checkbox is unchecked, show all items
            itemsToFilter.forEach(item => {
                item.style.display = ''; // Show item
            });
        }
    });
    //for engineering checkbox
    engnCheckbox.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            // Iterate through each item to filter
            itemsToFilter.forEach(item => {
                // Example filtering based on the checkbox state
                if (item.textContent.includes('Deloitte')||item.textContent.includes('Microsoft')||item.textContent.includes('Infosys')||item.textContent.includes('Amazon')||item.textContent.includes("capg")) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        } else {
            // If the checkbox is unchecked, show all items
            itemsToFilter.forEach(item => {
                item.style.display = ''; // Show item
            });
        }
    });
    //for hybrid
    HybridCheckbox.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            // Iterate through each item to filter
            itemsToFilter.forEach(item => {
                // Example filtering based on the checkbox state
                if (item.textContent.includes('Technical Expert')||item.textContent.includes('Assistant')||item.textContent.includes('VICE')||item.textContent.includes('Plant')) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        } else {
            // If the checkbox is unchecked, show all items
            itemsToFilter.forEach(item => {
                item.style.display = ''; // Show item
            });
        }
    });
    // for salary1
    SalaryCheckbox1.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            // Iterate through each item to filter
            itemsToFilter.forEach(item => {
                // Example filtering based on the checkbox state
                if (item.textContent.includes('10')||item.textContent.includes('11')||item.textContent.includes('12')||item.textContent.includes('13')||item.textContent.includes('14')||item.textContent.includes('15')) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        } else {
            // If the checkbox is unchecked, show all items
            itemsToFilter.forEach(item => {
                item.style.display = ''; // Show item
            });
        }
    });
    //for salary2
    SalaryCheckbox2.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            // Iterate through each item to filter
            itemsToFilter.forEach(item => {
                // Example filtering based on the checkbox state
                if (item.textContent.includes('15')||item.textContent.includes('16')||item.textContent.includes('17')||item.textContent.includes('18')||item.textContent.includes('19')||item.textContent.includes('20')) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        } else {
            // If the checkbox is unchecked, show all items
            itemsToFilter.forEach(item => {
                item.style.display = ''; // Show item
            });
        }
    });
    //for salary3
    SalaryCheckbox3.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            // Iterate through each item to filter
            itemsToFilter.forEach(item => {
                // Example filtering based on the checkbox state
                if (item.textContent.includes('25')||item.textContent.includes('26')||item.textContent.includes('27')||item.textContent.includes('28')||item.textContent.includes('29')||item.textContent.includes('30')) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        } else {
            // If the checkbox is unchecked, show all items
            itemsToFilter.forEach(item => {
                item.style.display = ''; // Show item
            });
        }
    });
    //for salary4
    SalaryCheckbox4.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            // Iterate through each item to filter
            itemsToFilter.forEach(item => {
                // Example filtering based on the checkbox state
                if (item.textContent.includes('50')||item.textContent.includes('51')||item.textContent.includes('52')||item.textContent.includes('53')||item.textContent.includes('54')||item.textContent.includes('55')) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        } else {
            // If the checkbox is unchecked, show all items
            itemsToFilter.forEach(item => {
                item.style.display = ''; // Show item
            });
        }
    });
    //production
    ProductionCheckbox.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            // Iterate through each item to filter
            itemsToFilter.forEach(item => {
                // Example filtering based on the checkbox state
                if (item.textContent.includes('Microsoft')||item.textContent.includes('Dredging')) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        } else {
            // If the checkbox is unchecked, show all items
            itemsToFilter.forEach(item => {
                item.style.display = ''; // Show item
            });
        }
    });
    //btech jobs
    btechCheckbox.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            // Iterate through each item to filter
            itemsToFilter.forEach(item => {
                // Example filtering based on the checkbox state
                if (item.textContent.includes('Microsoft')||item.textContent.includes('Deloitte')||item.textContent.includes('Infosys')) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        } else {
            // If the checkbox is unchecked, show all items
            itemsToFilter.forEach(item => {
                item.style.display = ''; // Show item
            });
        }
    });
    
    //company checkbox
    companyCheckbox.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            // Iterate through each item to filter
            itemsToFilter.forEach(item => {
                // Example filtering based on the checkbox state
                if (item.textContent.includes('Microsoft')||item.textContent.includes('Infosys')||item.textContent.includes('Deloitte')) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        } else {
            // If the checkbox is unchecked, show all items
            itemsToFilter.forEach(item => {
                item.style.display = ''; // Show item
            });
        }
    });
    //corporate
    consultantCheckbox.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            // Iterate through each item to filter
            itemsToFilter.forEach(item => {
                // Example filtering based on the checkbox state
                if (item.textContent.includes('Design')||item.textContent.includes('Technical')||item.textContent.includes('Plant')) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        } else {
            // If the checkbox is unchecked, show all items
            itemsToFilter.forEach(item => {
                item.style.display = ''; // Show item
            });
        }
    });
    //checking of pune city companies
    puneCheckbox.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            // Iterate through each item to filter
            itemsToFilter.forEach(item => {
                // Example filtering based on the checkbox state
                if (item.textContent.includes('Pune')) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        } else {
            // If the checkbox is unchecked, show all items
            itemsToFilter.forEach(item => {
                item.style.display = ''; // Show item
            });
        }
    });
    delhiCheckbox.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            // Iterate through each item to filter
            itemsToFilter.forEach(item => {
                // Example filtering based on the checkbox state
                if (item.textContent.includes('Delhi')) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        } else {
            // If the checkbox is unchecked, show all items
            itemsToFilter.forEach(item => {
                item.style.display = ''; // Show item
            });
        }
    });
    bangloreCheckbox.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            // Iterate through each item to filter
            itemsToFilter.forEach(item => {
                // Example filtering based on the checkbox state
                if (item.textContent.includes('Banglore')) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        } else {
            // If the checkbox is unchecked, show all items
            itemsToFilter.forEach(item => {
                item.style.display = ''; // Show item
            });
        }
    });
    chennaiCheckbox.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            // Iterate through each item to filter
            itemsToFilter.forEach(item => {
                // Example filtering based on the checkbox state
                if (item.textContent.includes('Chennai')) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        } else {
            // If the checkbox is unchecked, show all items
            itemsToFilter.forEach(item => {
                item.style.display = ''; // Show item
            });
        }
    });
// Attach event listeners to checkboxes
// document.getElementById('workMode').addEventListener('change', filterContent);
function init() {
    // Perform any initialization tasks here
    // For example, hide all items initially
    const itemsToFilter = document.querySelectorAll('.square');
    itemsToFilter.forEach(item => {
        item.style.display = 'non';
    });
}

// Call the init function when the page loads
window.onload = init;

//For login
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the username from session storage
    var username = sessionStorage.getItem('username');
    
    // Display the username wherever needed in Project.html
    document.getElementById("hello").innerHTML = username;
});
const scrollButton = document.getElementById('scrollButton');

    // Add event listener to the button
    scrollButton.addEventListener('click', function() {
        // Scroll the window to a specific position (e.g., 500px from the top)
        window.scrollTo({
            top: 120, // Adjust the scroll position as needed
            behavior: 'smooth' // Smooth scrolling animation
        });
    });
const shareButton = document.getElementById('shareButton');
shareButton.addEventListener('click',function (){

    window.scrollTo({
        top:2300,
        behavior:'smooth'
    });
});

const deleteButto = document.getElementById("deleteButt");
    deleteButto.addEventListener("click", function() {
        // Clear savedContent in session storage
        for (let i = 1; i <= 10; i++) {
            sessionStorage.removeItem(`savedDivContent${i}`);
        }
        // Clear content in List div
        alert("Cleared");
    });
//dark the color of save button
window.onload = function() {
    // Function to toggle the bookmark icon classes when clicked
    function toggleBookmark(event) {
        const saveIcon = event.target;
        // Toggle between regular and solid bookmark icons
        if (saveIcon.classList.contains("fa-regular")) {
            saveIcon.classList.remove("fa-regular"); // Remove regular bookmark class
            saveIcon.classList.add("fa-solid");      // Add solid bookmark class
        } else {
            saveIcon.classList.remove("fa-solid");   // Remove solid bookmark class
            saveIcon.classList.add("fa-regular");   // Add regular bookmark class
        }
    }

    // Add click event listeners to each "Save" icon
    const saveIcons = document.querySelectorAll('.fa-regular.fa-bookmark');
    saveIcons.forEach(icon => {
        icon.addEventListener('click', toggleBookmark);
    });
     function toggleBookmark12(event) {
        const saveIcon12 = event.target;
        // Toggle between regular and solid bookmark icons
        if (saveIcon12.classList.contains("fa-angle-down")) {
            saveIcon12.classList.remove("fa-angle-down"); // Remove regular bookmark class
            saveIcon12.classList.add("fa-angle-up");      // Add solid bookmark class
        } else {
            saveIcon12.classList.remove("fa-angle-up");   // Remove solid bookmark class
            saveIcon12.classList.add("fa-angle-down");   // Add regular bookmark class
        }
    }

    // Add click event listeners to each "Save" icon
    const saveIcons12 = document.querySelectorAll('.fa-solid.fa-angle-down');
    saveIcons12.forEach(icon => {
        icon.addEventListener('click', toggleBookmark12);
    });
};
//ANGULAR


$(document).ready(function(){
    // Function to sort job listings by number of days ago
    function sortByDaysAgo() {
        var $listings = $('.job-listing .square');
        $listings.sort(function(a, b) {
            var daysAgo1 = parseInt($(a).find('.date').text().replace(' Days Ago', ''));
            var daysAgo2 = parseInt($(b).find('.date').text().replace(' Days Ago', ''));
            return daysAgo1 - daysAgo2;
        });
        $('.job-listing').html($listings);
    }

    // Event listener for sort dropdown
    $('.sort-by').click(function(e) {
        e.preventDefault();
        var sortType = $(this).data('sort');
        if (sortType === 'date') {
            sortByDaysAgo();
            $('.sort-option').text('Date');
        } else {
            // Handle other sorting options if needed
            // Add sorting logic for other options
        }
    });
});
function updateExperience() {
    var rangeValue = document.getElementById("experienceRangeInput").value;
    document.getElementById("ageDisplay").textContent = rangeValue;
    filterJobsByExperience(rangeValue);
}

function filterJobsByExperience(rangeValue) {
    var jobListings = document.querySelectorAll('.square');
    jobListings.forEach(function(job) {
        var ageSpan = job.querySelector('.fa-bag-shopping');
        var ageText = ageSpan.textContent;
        // Update the age range text based on the selected range
        ageSpan.textContent = rangeValue + " Yrs";
        
        // Extract the numeric part from the age text
        var age = parseInt(ageText.match(/\d+/)[0]); // Extract the numeric part from the text
        
        // Hide or show the job listing based on the age range
        if (age <= rangeValue) {
            job.style.display = 'block';
        } else {
            job.style.display = 'none';
        }
    });
}

function getGreeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    var greeting;
    if (currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return greeting;
}

var greeting = getGreeting();
document.getElementById("greeting").textContent = greeting;
