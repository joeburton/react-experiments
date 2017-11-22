xdescribe('Child component', () => {
    const mockFunction = jest.fn();
  
    it('Calls mock function', () => {
      const component = shallow(<Child myFunction={mockFunction} />);
      expect(mockFunction.mock.calls.length).toEqual(0);
      component.find('myElement').simulate('click');  // <== trigger your function
      expect(mockFunction.mock.calls.length).toEqual(1);
    });
  });