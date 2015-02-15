jest.dontMock('../index');

describe('lib', () => {
    it('exposes the `Icon` component', () => {
        import Icon from '../';
        expect(Icon).toBeDefined();
    });
});
