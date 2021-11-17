import styled from 'styled-components';
import { numberFormat } from 'utils';
import Common from './common';

type Props = {
  statName?: string;
  statValue?: string | number;
  statPercent?: string | number;
  isPrice?: boolean;
  type?: 'normal' | 'link';
};

type PercentType = {
  isPlus: boolean;
};

const Container = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  font-weight: bold;
  border-top: 1px solid #e3e3e3;
`;

const Percent = styled.span<PercentType>`
  color: ${(props) => (props.isPlus ? '#16c784' : '#ea3943')};
`;

const CoinStat = ({
  type = 'normal',
  statName,
  statValue,
  statPercent,
  isPrice,
}: Props) => {
  return (
    <Container>
      <Common.Row full justifyContent="space-between" alignItems="center">
        <p>{statName}</p>
        {type === 'normal' && (
          <p>
            {typeof statValue === 'number' && isPrice
              ? numberFormat(statValue, true)
              : statValue}
          </p>
        )}
        {statPercent && (
          <Common.Row justifyContent="center" alignItems="center">
            <Percent isPlus={statPercent > 0}>
              {Math.abs(statPercent as number)}%
            </Percent>
          </Common.Row>
        )}
      </Common.Row>
    </Container>
  );
};

export default CoinStat;