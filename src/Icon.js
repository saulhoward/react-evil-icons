var React = require('react');

module.exports = React.createClass({
    displayName: "Icon",

    propTypes: {
        size: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        className: React.PropTypes.string,
    },
    
    render: function() {
        var size    = this.props.size ? " icon--" + this.props.size : "";
        var className = this.props.className ? " " + this.props.className : "";
        var klass   = "icon icon--" + this.props.name + size + className;

        var name = '#'+ this.props.name + '-icon';
        var Icon = (
            <svg className="icon__cnt">
                <use xlinkHref={name} />
            </svg>
        );
        return  (
            <div className={klass}>
                {this.wrapSpinner(Icon, klass)}
            </div>
        );
    },

    wrapSpinner: function (jsx, klass) {
        if (klass.indexOf("spinner") > -1) {
            return (
                <div className="icon__spinner">{jsx}</div>
            );
        }
        return jsx;
    }

});
