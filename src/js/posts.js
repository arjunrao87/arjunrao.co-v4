function formatMarkdown() {
    app.addEventListener('zero-md-rendered', ev => {
        const md = app.shadowRoot.querySelector(".markdown-body")
        const frontmatter = md["children"][1].textContent.split("\n")
        date = frontmatter[0].split(":")[1].slice(2, -1);
        raw_title = frontmatter[2].split(":")[1].slice(2, -1);
        title = raw_title.replace(/\s+/g, '-').toLowerCase();
        category = frontmatter[3].split(":")[1].slice(2, -1);
        post_url = date + "/" + title
        // remove front matter
        md["childNodes"][0].remove()
        md["childNodes"][0].remove()
        md["childNodes"][0].remove()
        md["childNodes"][0].remove()
        const titleNode = document.createElement("h2")
        titleNode.textContent = raw_title
        md.replaceChild(titleNode, md.children[0]);
        const metadataNode = document.createElement("h4")
        metadataNode.textContent = date
        md.insertBefore(metadataNode, md.children[1])
    });
}