import { useEffect, useState } from "react";
import { Table, Button } from "antd";
import "antd/dist/antd.css";
import columns from "./columns";
import { Modal, Input } from "antd";
import { StyledButtonWrapper, StyledInputWrapper, StyledTable } from "./styled";
import { loadAllTranslations } from "api/translations";

const dataSource = [
  {
    id: "1",
    code: "key.to.traducted",
    word: "Bonjour",
    traductedWord: "Hello",
    country: "FR",
  },
  {
    id: "2",
    code: "key.to.traducted",
    word: "Monde",
    traductedWord: "World",
    country: "FR",
  },
];

const TraductionTable = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const translations = async() => await loadAllTranslations()
    translations()
  }, [])

  return (
    <StyledTable>
      <StyledButtonWrapper>
        <Button type="primary" onClick={() => setModal(true)}>
          Ajouter un mot
        </Button>
        <Modal
          title="Nouveau mot"
          style={{ top: 20 }}
          visible={modal}
          onOk={() => setModal(false)}
          onCancel={() => setModal(false)}
        >
          <StyledInputWrapper>
            <Input placeholder="Mot Français" />
            <Input placeholder="Mot Anglais" />
          </StyledInputWrapper>
        </Modal>
      </StyledButtonWrapper>
      <Table dataSource={dataSource} columns={columns} rowKey="id" />
    </StyledTable>
  );
};

export default TraductionTable;
