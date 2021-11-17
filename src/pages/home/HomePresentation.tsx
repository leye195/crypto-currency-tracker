import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Common from 'components/common';
import { CoinType } from 'types/coin';

type Props = {
  coins: CoinType[];
};

const CoinsList = styled.ul`
  padding: 0;
`;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 1rem;
  border-radius: 1rem;
  & > a {
    display: flex;
    align-items: center;
    padding: 1.25rem;
    transition: color 0.2s ease-in;

    & > img {
      height: 1.5rem;
      width: 1.5rem;
      margin-right: 1rem;
    }
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export default function HomePresentation({ coins }: Props) {
  return (
    <Common.Container>
      <Common.Header />
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link
              to={`/${coin.id}`}
              state={{ name: coin.name, symbol: coin.symbol }}
            >
              <Common.Img
                src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                alt={coin.symbol?.toLowerCase()}
              />
              {coin.name} &rarr;
            </Link>
          </Coin>
        ))}
      </CoinsList>
    </Common.Container>
  );
}
