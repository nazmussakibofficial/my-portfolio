let homeContent = `<div class="content-wrapper">
<section class="home ">
    <div class="greetings content-card">
        <div class="greetings-title">
            <h1 class="t1"> <span>HI,</span> </h1>
            <h1 class="t2"> My Name is <span>Nazmus Sakib</span> </h1>
            <h1 class="t3"> I am a <span>Front End Developer</span> </h1>
            <p>if you want to contact me, click on the mail icon: <a href="mailto:nazmussakibofficial19@gmail.com"><span><i class="fas fa-envelope"></i></span></a></p>
        </div>

    </div>

</section>`;

let aboutContent = `<section class="about-wrapper">
<div class="about-section about-content-card">
  <div class="about-content">
    <div class="about-title">
      <h1>About</h1>
    </div>
    <div class="about-text">
      <p>
        I am Nazmus Sakib.<br />
        I became interesed in programming after I took some programming courses in my university. <br />
        So I began with HTML<i class="fab fa-html5"></i> and CSS<i class="fab fa-css3-alt"></i> in 2018. <br />
        After I graduated in 2022, I set an aim of becoming an experienced programmer.<br />
        That same year, 2022, around May, I enrolled in a complete web development course. The course is still continuing. <br />
        So far the course taught me about front end development and now I am learning some basics about back end development. <br />
        And by the end of the course, I hope to achieve the training I needed to reach my goal. <br />
      </p>
    </div>
  </div>
</div>
</section>`;

let workContent = `

<div class="work-content work-content-card">
    <div class="work-gallery">

        <div class="work-project-card">
            <h1 class="work-project-card-title tooltip ">
            The Story Keeper  <span class="tooltiptext">
            Project idea: 
            <br>-Stripe Payment gateway
            <br>-Dashboards
            <br>-Dynamic Page Titles
            
            </span>
            </h1>
            <a href="https://the-story-keeper.web.app/" target="_blank">
            <img class="workPic tooltip" src="https://raw.githubusercontent.com/nazmussakibofficial/my-portfolio/main/images/img1.PNG"> </a>
            <a href="https://github.com/nazmussakibofficial/the-story-keeper-client">  
            <p class="button-project btn-github ">GITHUB CLIENT</p></a>
            <a href="https://github.com/nazmussakibofficial/the-story-keeper-server">
            <p class="button-project btn-github ">GITHUB SERVER</p></a>
        </div>

        <div class="work-project-card">
            <h1 class="work-project-card-title tooltip ">
            Gallery of Memories  <span class="tooltiptext">
            Project idea: 
            <br>-Adding and Deleting Comments
            <br>-JWT Tokens
            <br>-Custom Services
            
            </span>
            </h1>
            <a href="https://gallery-of-memories.web.app/" target="_blank">
            <img class="workPic tooltip" src="https://raw.githubusercontent.com/nazmussakibofficial/my-portfolio/main/images/img2.PNG"> </a>
            <a href="https://github.com/nazmussakibofficial/gallery-of-memories-client">  
            <p class="button-project btn-github ">GITHUB CLIENT</p></a>
            <a href="https://github.com/nazmussakibofficial/gallery-of-memories-server">
            <p class="button-project btn-github ">GITHUB SERVER</p></a>
        </div>

        <div class="work-project-card">
            <h1 class="work-project-card-title tooltip ">
            Programoholic  <span class="tooltiptext">
            Project idea: 
            <br>-Firebase
            <br>-Theme Toogler
            
            </span>
            </h1>
            <a href="https://programoholic-981e6.web.app/" target="_blank">
            <img class="workPic tooltip" src="https://raw.githubusercontent.com/nazmussakibofficial/my-portfolio/main/images/img3.PNG"> </a>
            <a href="https://github.com/nazmussakibofficial/programoholic-client">  
            <p class="button-project btn-github ">GITHUB CLIENT</p></a>
            <a href="https://github.com/nazmussakibofficial/programoholic-server">
            <p class="button-project btn-github ">GITHUB SERVER</p></a>
        </div>

        
        
    </div>
</div>


`;


let skillsContent = `<div class="skills-section">
<div class="skills-content skills-content-card">
    <div class="skills-title">
        <h1>Skills</h1>
    </div>
    <div class="skills-text">
        <p> I am mainly skilled in Front End Development</p>
        <p> using<br/>- HTML, CSS, JavaScript, React</p>
        <p>I also use:</p>
        <p>- Node.js , Express ,<br/>
         - MongoDB, Firebase</p>
        <p>- Tailwind, Bootstrap</p>

        <p>- PhotoShop, Github, Figma</p>

    </div>
</div>
</div>`;

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const work = document.querySelector("#work");
const skills = document.querySelector("#skills");
let contentBox = document.querySelector(".content-wrapper");
let enter = document.querySelector(".preloader-wrapper");

document.addEventListener("DOMContentLoaded", () => {
    let enterSequence = new TimelineMax({});

    contentBox.innerHTML = "";
    contentBox.innerHTML = homeContent;
    enterSequence
        .from("#home", 0.1, {
            opacity: 0
        })
        .from("#home", 0.3, {
            y: 400,
            fontSize: 250
        })
        .from("#about", 0.1, {
            opacity: 0
        })
        .from("#about", 0.3, {
            y: 400,
            fontSize: 250
        })
        .from("#work", 0.1, {
            opacity: 0
        })
        .from("#work", 0.3, {
            y: 400,
            fontSize: 250
        })
        .from("#skills", 0.1, {
            opacity: 0
        })
        .from("#skills", 0.3, {
            y: 400,
            fontSize: 250
        })
        .from(".home", 1, {
            opacity: 0,
            x: -300
        })
        .from(".t1", 0.1, {
            opacity: 0
        })
        .from(".t2", 0.1, {
            opacity: 0
        })
        .from(".t3", 0.1, {
            opacity: 0
        })

    home.addEventListener("click", () => {
        contentBox.innerHTML = "";
        contentBox.innerHTML = homeContent;
        let openHome = new TimelineMax({});
        openHome
            .from(".home", 1, {
                opacity: 0,
                x: -300
            })
            .from(".t1", 0.1, {
                opacity: 0
            })
            .from(".t2", 0.1, {
                opacity: 0
            })
            .from(".t3", 0.1, {
                opacity: 0
            });
    });
    about.addEventListener("click", () => {
        contentBox.innerHTML = "";
        contentBox.innerHTML = aboutContent;
        let openAbout = new TimelineMax({});
        openAbout
            .from(".about-section", 1, {
                opacity: 0,
                x: 300
            })
            .from(
                ".about-title h1",
                0.1,
                {
                    opacity: 0
                },
                "ww"
            )
            .from(".about-title h1", 0.1, {
                opacity: 1
            })
            .from(".about-title h1", 0.1, {
                opacity: 0
            })
            .from(".about-title h1", 0.1, {
                opacity: 1
            })
            .from(".about-title h1", 0.1, {
                opacity: 0
            })
            .from(".about-text p", 0.2, {
                opacity: 0
            });
    });
    work.addEventListener("click", () => {
        contentBox.innerHTML = "";
        contentBox.innerHTML = workContent;
        let openWork = new TimelineMax({});

        openWork
            .from(".work-content-card", 1, {
                opacity: 0,
                x: -300
            })
            .from(
                ".card-5",
                0.1,
                {
                    opacity: 0
                },
                "op"
            )
            .from(
                ".card-2",
                0.1,
                {
                    opacity: 0
                },
                "op"
            )
            .from(
                ".card-3",
                0.1,
                {
                    opacity: 0
                },
                "op"
            )
            .from(
                ".card-6",
                0.1,
                {
                    opacity: 0
                },
                "oz"
            )
            .from(
                ".card-1",
                0.1,
                {
                    opacity: 0
                },
                "oz"
            )
            .from(
                ".card-4",
                0.1,
                {
                    opacity: 0
                },
                "oz"
            );
    });

    skills.addEventListener("click", () => {
        contentBox.innerHTML = "";
        contentBox.innerHTML = skillsContent;
        let openSkills = new TimelineMax({});
        openSkills
            .from(".skills-content", 0.6, {
                opacity: 0,
                x: 300
            })
            .from(
                ".skills-title h1",
                0.1,
                {
                    opacity: 0
                },
                "ww"
            )
            .from(".skills-title h1", 0.1, {
                opacity: 1
            })
            .from(".skills-title h1", 0.1, {
                opacity: 0
            })
            .from(".skills-title h1", 0.1, {
                opacity: 1
            })
            .from(".skills-title h1", 0.1, {
                opacity: 0
            })
            .from(
                ".skills-text",
                0.2,
                {
                    opacity: 0
                },
                "ww",
                1
            );
    });

});  