import axios from 'axios';
import InputMask from 'comigo-tech-react-input-mask';
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormEntregador () {

const { state } = useLocation();

const [idEntregador, setIdEntregador] = useState();




    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
    const [valorFrete, setValorFrete] = useState();
    const [enderecoRua, setEnderecoRua] = useState();
    const [enderecoComplemento, setEnderecoComplemento] = useState();
    const [enderecoNumero, setEnderecoNumero] = useState();
    const [enderecoBairro, setEnderecoBairro] = useState();
    const [enderecoCidade, setEnderecoCidade] = useState();
    const [enderecoCep, setEnderecoCep] = useState();
    const [enderecoUf, setEnderecoUf] = useState();
    const [ativo, setAtivo] = React.useState('sim');
    const estados = [
        { key: 'ac', value: 'AC', text: 'AC' },
        { key: 'al', value: 'AL', text: 'AL' },
        { key: 'am', value: 'AM', text: 'AM' },
        { key: 'ba', value: 'BA', text: 'BA' },
        { key: 'ce', value: 'CE', text: 'CE' },
        { key: 'df', value: 'DF', text: 'DF' },
        { key: 'es', value: 'ES', text: 'ES' },
        { key: 'go', value: 'GO', text: 'GO' },
        { key: 'ma', value: 'MA', text: 'MA' },
        { key: 'mt', value: 'MT', text: 'MT' },
        { key: 'ms', value: 'MS', text: 'MS' },
        { key: 'mg', value: 'MG', text: 'MG' },
        { key: 'pr', value: 'PR', text: 'PR' },
        { key: 'pb', value: 'PB', text: 'PB' },
        { key: 'pa', value: 'PA', text: 'PA' },
        { key: 'pe', value: 'PE', text: 'PE' },
        { key: 'rj', value: 'RJ', text: 'RJ' },
        { key: 'rn', value: 'RN', text: 'RN' },
        { key: 'rs', value: 'RS', text: 'RS' },
        { key: 'ro', value: 'RO', text: 'RO' },
        { key: 'rr', value: 'RR', text: 'RR' },
        { key: 'sc', value: 'SC', text: 'SC' },
        { key: 'sp', value: 'SP', text: 'SP' },
        { key: 'se', value: 'SE', text: 'SE' },
        { key: 'to', value: 'TO', text: 'TO' }
    ];


    useEffect(() => {
  if (state != null && state.id != null) {
    axios
      .get("http://localhost:8080/api/entregador/" + state.id)
      .then((response) => {
        setIdEntregador(response.data.id);
        setNome(response.data.nome);
        setCpf(response.data.cpf);
        setRg(response.data.rg);
        setDataNascimento(response.data.dataNascimento);
        setFoneCelular(response.data.foneCelular);
        setFoneFixo(response.data.foneFixo);
        setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas);
        setValorFrete(response.data.valorFrete);
        setEnderecoRua(response.data.enderecoRua);
        setEnderecoComplemento(response.data.enderecoComplemento);
        setEnderecoNumero(response.data.enderecoNumero);
        setEnderecoBairro(response.data.enderecoBairro);
        setEnderecoCidade(response.data.enderecoCidade);
        setEnderecoCep(response.data.enderecoCep);
        setEnderecoUf(response.data.enderecoUf);
        setAtivo(response.data.ativo ? 'sim' : 'nao');
      })
      .catch((error) => {
        console.error("Erro ao buscar Entregador:", error);
      });
  }
}, [state]);



    function salvar(){
        let entregadorRequest = {
          nome: nome,
          cpf: cpf,
          rg: rg,
          dataNascimento: dataNascimento,
          foneCelular: foneCelular,
          foneFixo: foneFixo,
          qtdEntregasRealizadas: qtdEntregasRealizadas,
          valorFrete: valorFrete,
          enderecoRua: enderecoRua,
          enderecoComplemento: enderecoComplemento,
          enderecoNumero: enderecoNumero,
          enderecoBairro: enderecoBairro,
          enderecoCidade: enderecoCidade,
          enderecoCep: enderecoCep,
          enderecoUf: enderecoUf,
          ativo: ativo,
        };
        
       if (idEntregador != null) { //Alteração:
           axios.put("http://localhost:8080/api/entregador/" + idEntregador, entregadorRequest)
           .then((response) => { console.log('entregador alterado com sucesso.') })
           .catch((error) => { console.log('Erro ao alter um entregador.') })
       } else { //Cadastro:
           axios.post("http://localhost:8080/api/entregador", entregadorRequest)
           .then((response) => { console.log('entregador cadastrado com sucesso.') })
           .catch((error) => { console.log('Erro ao incluir o entregador.') })
       }

    }

    return (
      <div>
        <MenuSistema tela={"entregador"} />

        <div style={{ marginTop: "3%" }}>
          <Container textAlign="justified">



            {idEntregador === undefined && (
              <h2>
                {" "}
                <span style={{ color: "darkgray" }}>
                  {" "}
                  Entregador &nbsp;
                  <Icon name="angle double right" size="small" />{" "}
                </span>{" "}
                Cadastro
              </h2>
            )}
            {idEntregador != undefined && (
              <h2>
                {" "}
                <span style={{ color: "darkgray" }}>
                  {" "}
                  Entregador &nbsp;
                  <Icon name="angle double right" size="small" />{" "}
                </span>{" "}
                Alteração
              </h2>
            )}



            <Divider />

            <div style={{ marginTop: "4%" }}>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input
                    required
                    fluid
                    label="Nome"
                    maxLength="100"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />

                  <Form.Input required fluid width={7} label="CPF">
                    <InputMask
                      required
                      mask="999.999.999-99"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                    />
                  </Form.Input>

                  <Form.Input required fluid width={7} label="RG">
                    <InputMask
                      required
                      mask="9.999.999"
                      value={rg}
                      onChange={(e) => setRg(e.target.value)}
                    />
                  </Form.Input>
                </Form.Group>

                <Form.Group>
                  <Form.Input fluid label="DT Nascimento" width={6}>
                    <InputMask
                      required
                      mask="99/99/9999"
                      maskChar={null}
                      placeholder="Ex:20/03/1985"
                      value={dataNascimento}
                      onChange={(e) => setDataNascimento(e.target.value)}
                    />
                  </Form.Input>

                  <Form.Input fluid required label="Fone Celular" width={6}>
                    <InputMask
                      mask="(99) 99999.9999"
                      value={foneCelular}
                      onChange={(e) => setFoneCelular(e.target.value)}
                    />
                  </Form.Input>

                  <Form.Input fluid label="Fone Fixo" width={6}>
                    <InputMask
                      mask="(99) 9999.9999"
                      value={foneFixo}
                      onChange={(e) => setFoneFixo(e.target.value)}
                    />
                  </Form.Input>

                  <Form.Input
                    fluid
                    label="QTD Entregas Realizadas"
                    width={6}
                    value={qtdEntregasRealizadas}
                    onChange={(e) => setQtdEntregasRealizadas(e.target.value)}
                  ></Form.Input>

                  <Form.Input
                    type="number"
                    step="0.01"
                    value={valorFrete}
                    onChange={(e) => setValorFrete(e.target.value)}
                    label="Valor Por Frete"
                  />
                </Form.Group>

                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Rua"
                    value={enderecoRua}
                    onChange={(e) => setEnderecoRua(e.target.value)}
                  ></Form.Input>

                  <Form.Input
                    fluid
                    label="Número"
                    width={4}
                    value={enderecoNumero}
                    onChange={(e) => setEnderecoNumero(e.target.value)}
                  ></Form.Input>
                </Form.Group>

                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Bairro"
                    value={enderecoBairro}
                    onChange={(e) => setEnderecoBairro(e.target.value)}
                  ></Form.Input>

                  <Form.Input
                    fluid
                    label="Cidade"
                    width={11}
                    value={enderecoCidade}
                    onChange={(e) => setEnderecoCidade(e.target.value)}
                  ></Form.Input>

                  <Form.Input fluid label="CEP" width={4}>
                    <InputMask
                      mask="99.999-999"
                      value={enderecoCep}
                      onChange={(e) => setEnderecoCep(e.target.value)}
                    ></InputMask>
                  </Form.Input>
                </Form.Group>
                <Form.Group widths={"equal"}>
                  <Form.Dropdown
                    label="UF"
                    placeholder="Selecione"
                    fluid
                    search
                    selection
                    options={estados}
                    value={enderecoUf}
                    onChange={(e, { value }) => setEnderecoUf(value)}
                  />
                </Form.Group>

                <Form.Group widths={"equal"}>
                  <Form.Input
                    label="Complemento"
                    value={enderecoComplemento}
                    onChange={(e) => setEnderecoComplemento(e.target.value)}
                  ></Form.Input>
                </Form.Group>

                <Form.Group inline>
                  <label>Ativo</label>
                  <Form.Radio
                    label="Sim"
                    value="sim"
                    checked={ativo === "sim"}
                    onChange={() => setAtivo("sim")}
                  />
                  <Form.Radio
                    label="Não"
                    value="nao"
                    checked={ativo === "nao"}
                    onChange={() => setAtivo("nao")}
                  />
                </Form.Group>
              </Form>

              <div style={{ marginTop: "4%" }}>
                <Button
                  type="button"
                  inverted
                  circular
                  icon
                  labelPosition="left"
                  color="orange"
                >
                  <Icon name="reply" />
                  Voltar
                </Button>

                <Button
                  inverted
                  circular
                  icon
                  labelPosition="left"
                  color="blue"
                  floated="right"
                  onClick={() => salvar()}
                >
                  <Icon name="save" />
                  Salvar
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );

}
