/** props:
 *      cardId:     string
 */
class CodeCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            jsSnippet: "Загружаем код JS...",
            javaSnippet: "Загружаем код Java..."
        };

        this.cardId = this.props.cardId;

        this.handleRunSnippet = this.handleRunSnippet.bind(this);
    }

    componentDidMount() {
        let id = this.cardId;

        $.get('java_tasks/' + id + '.js', null, (plainCode) => {
            this.setState({
                jsSnippet: hljs.highlightAuto(plainCode).value
            })
        }, 'text');
        $.get('java_tasks/' + id + '.java', null, (plainCode) => {
            this.setState({
                javaSnippet: hljs.highlightAuto(plainCode).value
            })

        }, 'text');
    }

    handleRunSnippet(event) {
        $.get('java_tasks/' + this.cardId + '.js');
    }

    render() {
        let id = this.cardId;

        return (
            <div class="card ct-code-snippet-card" >
                <div class="card-header d-flex justify-content-between align-items-center">
                    <div class="nav nav-pills ms-1" id={id + "-tablist"} role="tablist">
                        <button class="nav-link py-1 btn-sm " id={id + "_js-tab"} data-bs-toggle="pill"
                            data-bs-target={"#" + id + "_js-content"} type="button" role="tab"
                            aria-controls={id + "_js-content"} aria-selected="true">JS</button>
                        <button class="nav-link py-1 btn-sm active " id={id + "_java-tab"}
                            data-bs-toggle="pill" data-bs-target={"#" + id + "_java-content"} type="button"
                            role="tab" aria-controls={id + "_java-content"}
                            aria-selected="false">Java</button>
                    </div>
                    <button id={"btn_snippet_" + id} onClick={this.handleRunSnippet}
                        class="btn btn-outline-primary btn-sm">Запустить</button>
                </div>
                <div class="card-body tab-content p-0 user-select-none">
                    <div class={id + "-content tab-pane fade"} id={id + "_js-content"} role="tabpanel"
                        aria-labelledby={id + "_js-tab"}>
                        <pre class="m-1"><code dangerouslySetInnerHTML={{ __html: this.state.jsSnippet}}></code></pre>
                    </div>
                    <div class={id + "_java-content tab-pane fade show active"} id={id + "_java-content"}
                        role="tabpanel" aria-labelledby={id + "_java-tab"}>
                        <pre class="m-1"><code dangerouslySetInnerHTML={{ __html: this.state.javaSnippet }}></code></pre>
                    </div>
                </div>
            </div>
        )
    }
}

$('.react-code-card').toArray()
    .forEach(DomContainer => {
        ReactDOM.render(
            <CodeCard cardId={DomContainer.dataset.cardid} />,
            DomContainer
        );
    })

setTimeout(() => {
    if (document.URL.indexOf('#') > -1) {
        document.location.href = document.URL;
    }
}, 600);
