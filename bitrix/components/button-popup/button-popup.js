function getLink() {
    const link = window.location.href;

    window.navigator.clipboard.writeText(link)
}
