document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.button_print');

    btns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault()
        const url = new URL(window.location.href)
        url.searchParams.append("print", "Y")
        window.open(url.toString(), '_blank')
    }))
})