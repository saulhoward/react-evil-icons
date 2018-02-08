jest.dontMock('../Icon');

import TestUtils from 'react-dom/test-utils';
import Icon from '../Icon';

describe('Icon', () => {
    it('renders an svg by default', () => {
        let doc = TestUtils.renderIntoDocument(<Icon name='ei-eye' size='s' />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'svg');
        expect(el).toBeDefined();
    });

    it('adds the `icon--ei-eye icon--s` class if the `name` property is set to `ei-eye` and the `size` property is set to `s`', function() {
        let doc = TestUtils.renderIntoDocument(<Icon name='ei-eye' size='s' />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'div');
        expect(el.getDOMNode().className).toBe('icon icon--ei-eye icon--s');
    });
});
