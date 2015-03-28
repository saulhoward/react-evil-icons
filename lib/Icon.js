"use strict";

var React = require("react");

module.exports = React.createClass({
    displayName: "Icon",

    propTypes: {
        size: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        className: React.PropTypes.string },

    render: function render() {
        var size = this.props.size ? " icon--" + this.props.size : "";
        var className = this.props.className ? " " + this.props.className : "";
        var klass = "icon icon--" + this.props.name + size + className;

        var name = "#" + this.props.name + "-icon";
        var useTag = "<use xlink:href=" + name + " />";
        var Icon = React.createElement("svg", { className: "icon__cnt", dangerouslySetInnerHTML: { __html: useTag } });
        return React.createElement(
            "div",
            { className: klass },
            this.wrapSpinner(Icon, klass)
        );
    },

    wrapSpinner: function wrapSpinner(Html, klass) {
        if (klass.indexOf("spinner") > -1) {
            return React.createElement(
                "div",
                { className: "icon__spinner" },
                Html
            );
        } else {
            return Html;
        }
    }

});