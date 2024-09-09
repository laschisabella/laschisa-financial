import logo from "../../assets/logo.png";
import { Container, Content } from "./styles";

interface HeaderProps {
  OnOpenNewTransactionModal: () => void;
}

export function Header({ OnOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} />
        <button onClick={OnOpenNewTransactionModal}>New transaction</button>
      </Content>
    </Container>
  );
}
