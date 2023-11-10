

const heading = document.getElementById("heading")

// heading.classList.add("text-blue-600","text-4xl","font-serif","uppercase")

const hideHeading = () => {
    heading.classList.add("hidden")
}

const showHeading = () => {
    heading.classList.remove("hidden")
}

const toggleHeading = () => {
    heading.classList.toggle("-translate-x-[600px]")
}