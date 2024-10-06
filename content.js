console.log("YT Shorts Blocker loaded");

function hideShortsButtons(sections) {
    for (const section of sections) {
        let aElements = section.getElementsByTagName("a");
        if (aElements.length == 0) {
            continue;
        }

        if (aElements[0].title.toLowerCase() == "shorts") {
            section.style.display = "none";
        }
    }
}

function hideShortsButtonsInSidebar() {
    let shortButtonSectionsMaximized = document.getElementsByTagName(
        "ytd-guide-entry-renderer"
    );
    hideShortsButtons(shortButtonSectionsMaximized);
    let shortButtonSectionsMinimized = document.getElementsByTagName(
        "ytd-mini-guide-entry-renderer"
    );
    hideShortsButtons(shortButtonSectionsMinimized);
}

function hideShortsSectionsOnHomepage() {
    let shortsSections = document.getElementsByTagName(
        "ytd-rich-section-renderer"
    );
    for (const section of shortsSections) {
        section.style.display = "none";
    }
}

function hideShortsVideosInFeed() {
    let shortVideos = document.getElementsByTagName("ytd-grid-video-renderer");
    for (const video of shortVideos) {
        let aElements = video.getElementsByTagName("a");
        if (aElements.length == 0) {
            continue;
        }

        if (aElements[0].href.includes("shorts")) {
            video.style.display = "none";
        }
    }
}

function hideShortsVideosInSearchResults() {
    let shortsSections = document.getElementsByTagName(
        "ytd-reel-shelf-renderer"
    );
    for (const section of shortsSections) {
        section.style.display = "none";
    }
}

function hideShortsTabOnAccountPage() {
    let tabs = document.getElementsByTagName("yt-tab-shape");
    for (const tab of tabs) {
        let divs = tab.getElementsByTagName("div");
        for (const div of divs) {
            if (div.innerText.toLowerCase() == "shorts") {
                tab.style.display = "none";
                break;
            }
        }
    }
}

function hideShortsPage() {
    if (!window.location.pathname.startsWith("/shorts")) return;
    const shortsContainer = document.getElementById("shorts-container");
    if (shortsContainer) {
        shortsContainer.style.display = "none";
    }
}

// Add an interval to check for new sections
setInterval(function () {
    hideShortsButtonsInSidebar();
    hideShortsSectionsOnHomepage();
    hideShortsVideosInFeed();
    hideShortsVideosInSearchResults();
    hideShortsTabOnAccountPage();
    hideShortsPage();
}, 1000);
