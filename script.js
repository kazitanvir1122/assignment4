let currentTab = "all";
let jobs = [
    {
        id: 1,
        companyName: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$1300 - $1750",
        description: "Build cross-platform mobile apps used by global users.",
        status: "all"
    },
    {
        id: 2,
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$8000 - $1200",
        description: "Create modern web experiences for premium clients.",
        status: "all"
    },
    {
     id: 3,
        companyName:"DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$1250 - $1650",
        description: "Transform business data into interactive dashboards.",
        status: "all"
    },
    {
        id: 4,
        companyName: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$1400 - $1900",
        description: "Build scalable backend systems with Python and AWS.",
        status: "all"
    },
    {
        id: 5,
        companyName: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$1100 - $1500",
        description: "Design intuitive interfaces for SaaS platforms.",
        status: "all"
    },
    {
        id: 6,
        companyName: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$1300 - $1700",
        description: "Develop enterprise-grade web applications.",status: "all"
    },
    {
        id: 7,
        companyName: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$1200 - $1600",
        description: "Work on scalable startup infrastructure.",
        status: "all"
    },
    {
        id: 8,
        companyName: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$1300 - $1750",
        description: "Lead frontend architecture using React.",
        status: "all"
    }
];

function renderJobs() {
    const container = document.getElementById("jobsContainer");
    const emptyState = document.getElementById("emptyState");
    container.innerHTML = "";

    let filtered = currentTab === "all"
        ? jobs
        : jobs.filter(job => job.status === currentTab);

    document.getElementById("sectionCount").innerText =
        filtered.length + " jobs";

    if (filtered.length === 0) {
        emptyState.classList.remove("hidden");
    }else{
        emptyState.classList.add("hidden");
filtered.forEach(job => {
            container.innerHTML += `
                <div class="job-card">
                    <h3>${job.companyName}</h3>
                    <strong>${job.position}</strong>
                    <p>${job.location} • ${job.type}</p>
                    <p>${job.salary}</p>
                    <p>${job.description}</p>
                    <div class="buttons">
                        <button class="action interview"
                            onclick="updateStatus(${job.id}, 'interview')">
                            Interview
                        </button>
                        <button class="action rejected"
                            onclick="updateStatus(${job.id}, 'rejected')">
                            Rejected
                        </button>

                        <button class="action delete"
                            onclick="deleteJob(${job.id})">
                            Delete
                        </button>
                    </div>
                </div>
            `;
        });
    }
 updateDashboard();
}
function updateStatus(id, newStatus) {
    jobs = jobs.map(job => {
        if (job.id === id) {
            job.status = job.status === newStatus ? "all" : newStatus;
        }
        return job;
    });

    renderJobs();
}

function deleteJob(id) {
    jobs = jobs.filter(job => job.id !== id);
    renderJobs();
}
function switchTab(tab) {
    currentTab = tab;
document.querySelectorAll(".tab").forEach(btn =>
        btn.classList.remove("active")
    );
 event.target.classList.add("active");

    renderJobs();
}
function updateDashboard() {
    document.getElementById("totalCount").innerText = jobs.length;
    document.getElementById("interviewCount").innerText =
        jobs.filter(job => job.status === "interview").length;
    document.getElementById("rejectedCount").innerText =
        jobs.filter(job => job.status === "rejected").length;
}
renderJobs();