import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AvatarCV from '../AvatarCV';

describe('AvatarCV', () => {
  describe('Should render correctly', () => {
    it('with source', () => {
      const src = 'https://example.com';

      const output = shallow(<AvatarCV src={src} />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });

    it('without source', () => {
      const output = shallow(<AvatarCV src={null} />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
  });
});
