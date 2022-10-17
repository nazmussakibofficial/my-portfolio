let homeContent = `<div class="content-wrapper">
<section class="home ">
    <div class="greetings content-card">
        <div class="greetings-title">
            <h1 class="t1"> <span>Welcome,</span> </h1>
            <h1 class="t2"> My Name is <span>Nazmus Sakib</span> </h1>
            <h1 class="t3"> I am a <span>Front End Developer</span> </h1>
        </div>

    </div>

</section>`;

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
        <p>- React-Router</p>

        <p>- PhotoShop, AfterEffects</p>

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