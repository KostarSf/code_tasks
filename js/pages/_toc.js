function PageToc(props) {
    var itemList = document.getElementById(props.contentContainer).children;

    var titlesArray = [];

    for (var i = 0; i < itemList.length; i++) {
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
            });
        } else if (itemList[i].tagName === "H4") {
            var item = {
                title: itemList[i].textContent,
                link: itemList[i].id
            };
            if (titlesArray.at(-1).childs.length === 0) {
                titlesArray.at(-1).childs.at(-1).childs[0] = item;
            } else {
                titlesArray.at(-1).childs.at(-1).childs.push(item);
            }
        }
    }

    console.log(titlesArray);

    var titlesArrayFin = titlesArray.map(function (h2Item) {
        return React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "#" + h2Item.link },
                h2Item.title
            ),
            h2Item.childs.length > 0 && React.createElement(
                "ul",
                null,
                h2Item.childs.map(function (h3Item) {
                    return React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" + h3Item.link },
                            h3Item.title
                        ),
                        h3Item.childs.length > 0 && React.createElement(
                            "ul",
                            null,
                            h3Item.childs.map(function (h4Item) {
                                return React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "#" + h4Item.link },
                                        h4Item.title
                                    )
                                );
                            })
                        )
                    );
                })
            )
        );
    });

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "strong",
            { "class": "d-block h6 my-2 pb-2 border-bottom" },
            "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F"
        ),
        React.createElement(
            "nav",
            { id: "tableOfContents" },
            React.createElement(
                "ul",
                { "class": "mb-0" },
                titlesArrayFin
            )
        )
    );
}

ReactDOM.render(React.createElement(PageToc, { contentContainer: "page_content_container" }), document.getElementById('page_toc_container'));