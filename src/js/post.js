function cleanMarkdownForPost() {
    app.addEventListener('zero-md-rendered', ev => {
        const md = app.shadowRoot.querySelector(".markdown-body")
        const frontmatter = md["children"][1].textContent.split("\n")
        date = frontmatter[0].split(":")[1].slice(2, -1);
        raw_title = frontmatter[2].split(":")[1].slice(2, -1);
        let i = 0;
        do {
            i = i + 1;
            // remove front matter
            md["childNodes"][0].remove()
        } while (i < 3);
        const titleNode = document.createElement("h2")
        titleNode.textContent = raw_title
        md.replaceChild(titleNode, md.children[0]);
        const metadataNode = document.createElement("h4")
        metadataNode.textContent = date
        md.insertBefore(metadataNode, md.children[1])
    });
}

function renderPost(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const path = urlParams.get("path")
    document.write('<zero-md id="app" src='+path+'></zero-md>');
    cleanMarkdownForPost()
}