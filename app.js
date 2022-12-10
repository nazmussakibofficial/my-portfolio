let homeContent = `<div class="content-wrapper">
<section class="home ">
    <div class="greetings content-card">
        <div class="greetings-title">
            <h1 class="t1"> <span>HI,</span> </h1>
            <h1 class="t2"> My Name is <span>Nazmus Sakib</span> </h1>
            <h1 class="t3"> I am a <span>Front End Developer</span> </h1>
            <p>My resume: <a target="_blank" href=" https://drive.google.com/uc?id=1QLEWyiIBUlX9-OU8ZkEM_vLCDhDbPcWf&export=download"><span><i class="fa-solid fa-id-badge"></i></span></a></p>
        </div>

    </div>

</section>`;

let aboutContent = `<section class="about-wrapper">
<div class="about-section about-content-card">
  <div class="about-content">
    <div class="about-title">
      <h1>About</h1>
    </div>
    <img style="width: 200px;" src="https://avatars.githubusercontent.com/u/101580272?v=4" alt=""></img>
    <div class="about-text">
      <p>
        Greetings, I am Nazmus Sakib.<br />
        I became interesed in programming after I took some programming courses in my university. <br />
        So I began with HTML<i class="fab fa-html5"></i> and CSS<i class="fab fa-css3-alt"></i> in 2018. <br />
        After I graduated in 2021, I set an aim of becoming an experienced programmer.<br />
        Currently I am learning React.js, Next.js, MongoDB, Firebase, Express.js and also a bit of typescript. <br />
      </p>
    </div>
</div>
</section>`;

let contactContent = `<section class="about-wrapper">
<div class="about-section about-content-card">
  <div class="about-content">
    <div class="about-title">
      <h1>Contact Me</h1>
    </div>
    <div class="center">
        <h1>Other Links : <a target="_blank" href="https://www.linkedin.com/in/nazmus-sakib-b71682234/"><i style="color: #c02942;" class="fa-brands fa-linkedin"></i></a> | <a target="_blank" href="https://github.com/nazmussakibofficial"><i style="color: #c02942;" class="fa-brands fa-square-github"></i></a></h1>
        <h1>Send me a message</h1>
        <form action="https://formsubmit.co/nazmussakibofficial19@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New Email from your portfolio!">
            <div class="inputbox">
                <input type="text" name="name" required="required">
                <span>Name</span>
            </div>
            <div class="inputbox">
                <input type="email" name="email" required="required">
                <span>Email</span>
            </div>
            <div class="inputbox">
                <input type="text" name="message" required="required">
                <span>Message</span>
            </div>
            <button type="submit">Send</button>
        </form>
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
        <p> I am mainly skilled in Front End Development using </p>
        <div class="skill-with-bar">
            <p>- HTML, CSS, Tailwind, Bootstrap |</p>
            <div class="wrapper">
                <div class="progress-bar">
                    <span class="progress-bar-fill" style="width: 95%;"></span>
                </div>
            </div>
        </div>
        <div class="skill-with-bar">
            <p>- JavaScript, React |</p>
            <div class="wrapper">
                <div class="progress-bar">
                    <span class="progress-bar-fill" style="width: 85%;"></span>
                </div>
            </div>
        </div>
        <div class="skill-with-bar">
            <p>- Node.js ,Express.js, MongoDB, Firebase |</p>
            <div class="wrapper">
                <div class="progress-bar">
                    <span class="progress-bar-fill" style="width: 75%;"></span>
                </div>
            </div>
        </div>
        <div class="skill-with-bar">
        <p>- PhotoShop, Github, Figma |</p>
            <div class="wrapper">
                <div class="progress-bar">
                    <span class="progress-bar-fill" style="width: 85%;"></span>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const work = document.querySelector("#work");
const skills = document.querySelector("#skills");
const contact = document.querySelector("#contact");
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
        .from("#contact", 0.1, {
            opacity: 0
        })
        .from("#contact", 0.3, {
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
    contact.addEventListener("click", () => {
        contentBox.innerHTML = "";
        contentBox.innerHTML = contactContent;
        let openContact = new TimelineMax({});
        openContact
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