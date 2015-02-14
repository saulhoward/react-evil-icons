var React = require('react');

module.exports = React.createClass({
    displayName: "Icon",
    
    render: function() {
        var size    = this.props.size ? "icon--" + this.props.size : "";
        var klass   = "icon icon--" + this.props.name + " " + size + " " + (this.props.className || "");
        var name = '#'+ this.props.name + '-icon';
        var useTag = '<use xlink:href='+name+' />';
        var Icon = (
            <svg className="icon__cnt" dangerouslySetInnerHTML={{__html: useTag }}>
            </svg>
        );
        return  (
            <div className={klass}>
            {this.wrapSpinner(Icon, klass)}
            </div>
        );
    },

    wrapSpinner: function (Html, klass) {
        if (klass.indexOf("spinner") > -1) {
            return (
                <div className="icon__spinner">{Html}</div>
            );
        } else {
            return Html;
        }
    }

});
