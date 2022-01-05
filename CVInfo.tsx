import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CVInfo from '../CVInfo';

describe('CVInfo', () => {
  describe('Should render correctly', () => {
    it("if there's no owner githubid", () => {
      const output = shallow(
        <CVInfo
          hasPriorityRole={false}
          isOwner={false}
          notFound={false}
          opportunitiesConsent={false}
          editMode={false}
          switchView={jest.fn()}
          withdrawConsent={jest.fn()}
          giveConsent={jest.fn()}
        />,
      );
      expect(shallowToJson(output)).toMatchSnapshot();
    });

    it('if user not found', () => {
      const output = shallow(
        <CVInfo
          hasPriorityRole={false}
          ownerGithubId={'not-exists'}
          isOwner={false}
          notFound={true}
          opportunitiesConsent={false}
          editMode={false}
          switchView={jest.fn()}
          withdrawConsent={jest.fn()}
          giveConsent={jest.fn()}
        />,
      );
      expect(shallowToJson(output)).toMatchSnapshot();
    });

    it('if try to access another user\'s CV without being admin or hirer', () => {
      const output = shallow(
        <CVInfo
          hasPriorityRole={false}
          ownerGithubId={'test'}
          isOwner={false}
          notFound={false}
          opportunitiesConsent={true}
          editMode={false}
          switchView={jest.fn()}
          withdrawConsent={jest.fn()}
          giveConsent={jest.fn()}
        />,
      );
      expect(shallowToJson(output)).toMatchSnapshot();
    });
  });
});
