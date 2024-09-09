import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useTransactions } from "../../hooks/useTransactions";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

interface NewTransactionsProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root"); // for accessible purposes (React Modal)

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionsProps) {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    // close modal and reset form
    onRequestClose();
    setTitle("");
    setCategory("");
    setType("deposit");
    setAmount(0);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button type="button" onClick={onRequestClose} className="closeModal">
          <X size={32} color="#333" />
        </button>
        <h2>Create new transaction</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          placeholder="Value"
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            $isSelected={type === "deposit"}
            $activeColor="#4b9b6d"
          >
            <ArrowCircleDown size={32} color="#29563d" />
            <span>Earnings</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            $isSelected={type === "withdraw"}
            $activeColor="#e5254d"
          >
            <ArrowCircleUp size={32} color="#891028" />
            <span>Expenses</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Create transaction</button>
      </Container>
    </Modal>
  );
}
