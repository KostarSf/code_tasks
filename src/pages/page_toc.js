function PageToc(props) {
    let itemList = document.getElementById(props.contentContainer).children;

    let titlesArray = [];

    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].tagName === "H2") {
            titlesArray.push({
                title: itemList[i].textContent,
                link: itemList[i].id,
                childs: []
            });
        } else if (itemList[i].tagName === "H3") {
            titlesArray.at(-1).childs.push({
                title: itemList[i].textContent,
                link: itemList[i].id,
                childs: []
            })
        } else if (itemList[i].tagName === "H4") {
            let item = {
                title: itemList[i].textContent,
                link: itemList[i].id,
            };
            if (titlesArray.at(-1).childs.length === 0) {
                titlesArray.at(-1).childs.at(-1).childs[0] = item;
            } else {
                titlesArray.at(-1).childs.at(-1).childs.push(item);
            }
        }
    }

    console.log(titlesArray);

    const titlesArrayFin = titlesArray.map((h2Item) =>
        <li><a href={"#" + h2Item.link}>{h2Item.title}</a>
            {h2Item.childs.length > 0 &&
                <ul>
                    {h2Item.childs.map((h3Item) =>
                        <li><a href={"#" + h3Item.link}>{h3Item.title}</a>
                            {h3Item.childs.length > 0 &&
                                <ul>
                                    {h3Item.childs.map((h4Item) =>
                                        <li><a href={"#" + h4Item.link}>{h4Item.title}</a></li>
                                    )}
                                </ul>
                            }
                        </li>
                    )}
                </ul>
            }
        </li>
    );

    return (
        <React.Fragment>
            <strong class="d-block h6 my-2 pb-2 border-bottom">Навигация</strong>
            <nav id="tableOfContents">
                <ul class="mb-0">
                    {titlesArrayFin}
                </ul>
            </nav>
        </React.Fragment>
    );
}

ReactDOM.render(
    <PageToc contentContainer="page_content_container"/>,
    document.getElementById('page_toc_container')
);
