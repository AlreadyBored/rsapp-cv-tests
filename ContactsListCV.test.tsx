import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ContactsListCV from '../ContactsListCV';

describe('ContactsListCV', () => {
  describe('Should render correctly', () => {
    it('with no contacts data', () => {
      const output = shallow(<ContactsListCV contacts={null} />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });

    it('with all filled contacts', () => {
      const contactsData = {
        phone: '+375111111',
        email: 'test@test.com',
        skype: 'test_skypeid',
        telegram: 'test_tg',
        linkedin: 'test',
        locations: 'Test, Test',
        github: 'test',
        website: 'https://test.com',
      };

      const output = shallow(<ContactsListCV contacts={contactsData} />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });

    it('with excess contacts data', () => {
      const contactsData = {
        phone: '+375111111',
        email: 'test@test.com',
        skype: 'test_skypeid',
        telegram: 'test_tg',
        linkedin: 'test',
        locations: 'Test, Test',
        github: 'test',
        website: 'https://test.com',
        someOtherContact: 'test',
        test: 'test',
        foo: 'bar',
        bar: 'baz',
      };

      const output = shallow(<ContactsListCV contacts={contactsData} />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });

    it('with 3 locations', () => {
      const contactsData = {
        phone: '+375111111',
        email: 'test@test.com',
        skype: 'test_skypeid',
        telegram: 'test_tg',
        linkedin: 'test',
        locations: 'Test, Test;Test2, Test2;Test3, Test3',
        github: 'test',
        website: 'https://test.com',
      };

      const output = shallow(<ContactsListCV contacts={contactsData} />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
  });
});
