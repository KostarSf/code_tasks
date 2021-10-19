var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** props:
 *      cardId:     string
 */
var CodeCard = function (_React$Component) {
    _inherits(CodeCard, _React$Component);

    function CodeCard(props) {
        _classCallCheck(this, CodeCard);

        var _this = _possibleConstructorReturn(this, (CodeCard.__proto__ || Object.getPrototypeOf(CodeCard)).call(this, props));

        _this.state = {
            jsSnippet: "Загружаем код JS...",
            javaSnippet: "Загружаем код Java..."
        };

        _this.cardId = _this.props.cardId;

        _this.handleRunSnippet = _this.handleRunSnippet.bind(_this);
        return _this;
    }

    _createClass(CodeCard, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var id = this.cardId;

            $.get('java_tasks/' + id + '.js', null, function (plainCode) {
                _this2.setState({
                    jsSnippet: hljs.highlightAuto(plainCode).value
                });
            }, 'text');
            $.get('java_tasks/' + id + '.java', null, function (plainCode) {
                _this2.setState({
                    javaSnippet: hljs.highlightAuto(plainCode).value
                });
            }, 'text');
        }
    }, {
        key: "handleRunSnippet",
        value: function handleRunSnippet(event) {
            $.get('java_tasks/' + this.cardId + '.js');
        }
    }, {
        key: "render",
        value: function render() {
            var id = this.cardId;

            return React.createElement(
                "div",
                { "class": "card ct-code-snippet-card" },
                React.createElement(
                    "div",
                    { "class": "card-header d-flex justify-content-between align-items-center" },
                    React.createElement(
                        "div",
                        { "class": "nav nav-pills ms-1", id: id + "-tablist", role: "tablist" },
                        React.createElement(
                            "button",
                            { "class": "nav-link py-1 btn-sm ", id: id + "_js-tab", "data-bs-toggle": "pill",
                                "data-bs-target": "#" + id + "_js-content", type: "button", role: "tab",
                                "aria-controls": id + "_js-content", "aria-selected": "true" },
                            "JS"
                        ),
                        React.createElement(
                            "button",
                            { "class": "nav-link py-1 btn-sm active ", id: id + "_java-tab",
                                "data-bs-toggle": "pill", "data-bs-target": "#" + id + "_java-content", type: "button",
                                role: "tab", "aria-controls": id + "_java-content",
                                "aria-selected": "false" },
                            "Java"
                        )
                    ),
                    React.createElement(
                        "button",
                        { id: "btn_snippet_" + id, onClick: this.handleRunSnippet,
                            "class": "btn btn-outline-primary btn-sm" },
                        "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "card-body tab-content p-0 user-select-none" },
                    React.createElement(
                        "div",
                        { "class": id + "-content tab-pane fade", id: id + "_js-content", role: "tabpanel",
                            "aria-labelledby": id + "_js-tab" },
                        React.createElement(
                            "pre",
                            { "class": "m-1" },
                            React.createElement("code", { dangerouslySetInnerHTML: { __html: this.state.jsSnippet } })
                        )
                    ),
                    React.createElement(
                        "div",
                        { "class": id + "_java-content tab-pane fade show active", id: id + "_java-content",
                            role: "tabpanel", "aria-labelledby": id + "_java-tab" },
                        React.createElement(
                            "pre",
                            { "class": "m-1" },
                            React.createElement("code", { dangerouslySetInnerHTML: { __html: this.state.javaSnippet } })
                        )
                    )
                )
            );
        }
    }]);

    return CodeCard;
}(React.Component);

$('.react-code-card').toArray().forEach(function (DomContainer) {
    ReactDOM.render(React.createElement(CodeCard, { cardId: DomContainer.dataset.cardid }), DomContainer);
});

setTimeout(function () {
    if (document.URL.indexOf('#') > -1) {
        document.location.href = document.URL;
    }
}, 600);