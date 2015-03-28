jest.dontMock('../index');

import Icon from '../';

describe('lib', () => {
    it('exposes the `Icon` component', () => {
        expect(Icon).toBeDefined();
    });
});
