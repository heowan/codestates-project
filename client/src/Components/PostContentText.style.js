import { styled } from 'styled-components';

export const Text = styled.div`
  padding-right: 20px;
  font-size: 14px;
  color: #000;
  line-height: 1.4;
  font-weight: normal;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export const Kcal = styled.div`
  margin-top: 10px;

  > span {
    font-weight: 700;
  }
`;

export const CrewingInfo = {
  Container: styled.div`
    margin-top: 20px;
  `,

  ActivityDate: styled.div`
    margin-bottom: 24px;
  `,

  DeadLine: styled.div`
    margin-bottom: 24px;
  `,

  PersonnelStatus: styled.div``,
};

export const Label = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 6px;
`;

export const Content = styled.div`
  font-size: 14px;
  color: #000;
`;
