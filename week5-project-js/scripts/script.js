// List of courses as objects
const courses = [
    {name: "Biological Science I (BIOL 121)", prereqs: "MATH 130 or MATH130B", details: "An introduction to biological principles for students majoring in biology and related fields of study."},
    {name: "Programming in Javascript (CSCI 204)", prereqs: "CSCI 120 or CSCI 145", details: "No Description Available"},
    {name: "Programming in C++ (CSCI 207)", prereqs: "CSCI 145 or CSCI 150/L", details: "Computer programming in the C++ language."},
    {name: "Programming in Java (CSCI 209)", prereqs: "CSCI 145 or CSCI 150/L", details: "Students learn to program in the Java programming language. Topics include inheritance, threads, graphics, network programming, and Web-programming."},
    {name: "Computer Organization (CSCI 210)", prereqs: "CSCI 145 or CSCI 150/L", details: "Logical basis of computer structure, machine representation of information, flow of control, instruction codes, arithmetic and logical operations, indexing, indirect addressing, input-output, sub-routines, linkages, macros. Interpretive and assembly systems, and pushdown stacks. F"},
    {name: "Data Structures (CSCI 220)", prereqs: "CSCI 145 or CSCI 150/L", details: "Topics include analysis of algorithms, with emphasis on computational complexity and advanced algorithms including self-adjusting trees, hashing, graphs, sorting, searching, and greedy algorithms. F,S"},
    {name: "Calculus I (MATH 160)", prereqs: "MATH 131 or MATH 135", details: "Limits, continuity, differentiation and integration of algebraic and transcendental functions, applications of the derivative to curve sketching, optimization and related rates. F, S, Su."},
    {name: "Trigonometry (MATH 131)", prereqs: "MATH 130 or MATH 130B or MATH 130i", details: "Right triangle and circular trigonometry, graphs of trigonometric and inverse trigonometric functions, trigonometric identities, solving trigonometric equations, vectors, complex numbers, and their applications. F,S,Su. "},
    {name: "Hispanic Studies I (SPAN 115)", prereqs: "None", details: "This class introduces students to the Spanish language and the many facets of Hispanic cultures. F,S."},
    {name: "Introductory Spanish I (SPAN 110)", prereqs: "None", details: "Development of fundamental language skills (listening, speaking, reading, and writing), with additional consideration of culture."},
    {name: "Introduction to World Music (MUS 207)", prereqs: "None", details: "This course introduces the fundamentals of music to the non-music major through a survey of world music traditions. F,S."},

];

const courseList = document.getElementById("course-list");

        // Create course elements and make them draggable
        courses.forEach((course, index) => {
            let courseDiv = document.createElement("div");
            courseDiv.className = "course";
            courseDiv.textContent = course.name;
            courseDiv.draggable = true;
            courseDiv.id = `course-${index}`;
            
            // Show course details on click
            courseDiv.addEventListener("click", () => {
                alert(`Course Description:\nCourse: ${course.name}\nPrerequisites: ${course.prereqs}\nDetails: ${course.details}`);
            });
            
            // Drag and drop event listeners
            courseDiv.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text", courseDiv.id);
            });

            courseList.appendChild(courseDiv);
        });

        // Function to enable dropping in semesters
        document.querySelectorAll(".section").forEach(section => {
            section.addEventListener("dragover", (e) => {
                e.preventDefault();
            });
            section.addEventListener("drop", (e) => {
                e.preventDefault();
                let courseId = e.dataTransfer.getData("text");
                let draggedCourse = document.getElementById(courseId);
                if (draggedCourse) section.appendChild(draggedCourse);
            });
        });