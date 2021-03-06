window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector , text) => {
        const element = document.getElementById(selector)
        if (element) element.innerHTML = text
    }

    ['chrome', 'node', 'electron'].forEach((dependency) => {
        replaceText(`${dependency}-version`, process.versions[dependency])
    })

})