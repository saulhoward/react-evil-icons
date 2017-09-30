var React = require('react');
var PropTypes = require('prop-types');

Icon.propTypes = {
    size: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string
}

function Icon (props) {
    
    var size    = props.size ? " icon--" + props.size : "";
    var className = props.className ? " " + props.className : "";
    var klass   = "icon icon--" + props.name + size + className;

    var name = '#'+ props.name + '-icon';
    var Icon = (
        <svg className="icon__cnt">
            <use xlinkHref={name} />
        </svg>
    );
    return  (
        <div className={klass}>
            {wrapSpinner(Icon, klass)}
        </div>
    );
    
    function wrapSpinner (jsx, klass) {
        if (klass.indexOf("spinner") > -1) {
            return (
                <div className="icon__spinner">{jsx}</div>
            );
        }
        return jsx;
    }
}

module.exports = Icon;
