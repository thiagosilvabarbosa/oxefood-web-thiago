import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function ListProduto() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    carregarLista();
  }, []);

  function carregarLista() {
    axios.get("http://localhost:8080/api/produto").then((response) => {
      setLista(response.data);
    });
  }
  
  return (
    <div>

      <MenuSistema tela={"produto"} />

      <div style={{ marginTop: "3%" }}>

        <Container textAlign="justified">
            
          <h2> Produto </h2>
          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Button
              label="Novo"
              circular
              color="orange"
              icon="clipboard outline"
              floated="right"
              as={Link}
              to="/form-produto"
            />
            <br />
            <br />
            <br />

            <Table color="orange" sortable celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Codigo</Table.HeaderCell>
                  <Table.HeaderCell>Titulo</Table.HeaderCell>
                  <Table.HeaderCell>Descricao</Table.HeaderCell>
                  <Table.HeaderCell>valorUnitario</Table.HeaderCell>
                  <Table.HeaderCell>tempoEntregaMinimo</Table.HeaderCell>
                  <Table.HeaderCell>tempoEntregaMaximo</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">Ações</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {lista.map((obj) => (
                  <Table.Row key={obj.id}>
                    <Table.Cell>{obj.codigo}</Table.Cell>
                    <Table.Cell>{obj.titulo}</Table.Cell>
                    <Table.Cell>{obj.descricao}</Table.Cell>
                    <Table.Cell>{obj.valorUnitario}</Table.Cell>
                    <Table.Cell>{obj.tempoEntregaMinimo}</Table.Cell>
                    <Table.Cell>{obj.tempoEntregaMaximo}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        inverted
                        circular
                        color="green"
                        title="Clique aqui para editar os dados deste produto"
                        icon
                      >
                        <Icon name="edit" />
                      </Button>{" "}
                      &nbsp;
                      <Button
                        inverted
                        circular
                        color="red"
                        title="Clique aqui para remover este produto"
                        icon
                      >
                        <Icon name="trash" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </Container>
      </div>
    </div>
  );
}
