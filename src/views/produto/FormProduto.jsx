import axios from 'axios';
import InputMask from 'comigo-tech-react-input-mask';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormProduto () {
    const [titulo, setTitulo] = useState();
    const [codigo, setCodigo] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();

    function salvar(){
        let produtoRequest = {
            titulo: titulo,
            codigo: codigo,
            descricao: descricao,
            valorUnitario: valorUnitario,
            tempoEntregaMinimo: tempoEntregaMinimo,
            tempoEntregaMaximo: tempoEntregaMaximo,
      
        }
    console.log(produtoRequest)
    axios.post("http://localhost:8080/api/produto", produtoRequest)
    .then((response)=>{
        console.log("produto cadastrado com sucesso")
    })
    .catch((error)=>{
        console.log("erro ao cadastrar produto")
    })

    }

    



    return (

        <div>

            <MenuSistema tela={'produto'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    placeholder = "Informe o título do produto"
                                    maxLength="100"
                                    value = {titulo}
                                    onChange={(e)=>setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    width={8}
                                    placeholder = "Informe o código do produto"
                                    label='Código do Produto'
                                    value = {codigo}
                                    onChange={(e)=>setCodigo(e.target.value)}
                                    >
                                    
                                </Form.Input>

                            </Form.Group >

                            <Form.Group widths='equal'>

                                <Form.TextArea
                                    fluid
                                    label='Descrição'
                                    style={{ height: '90px'}} 
                                    placeholder = "Informe a descrição do produto"
                                    maxLength="100"
                                    value={descricao}
                                    onChange={(e)=>setDescricao(e.target.value)}
                                />

                            </Form.Group >


                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitario'
                                    width={10}>
                                        <InputMask 
                                        maskChar={null}
                                        value={valorUnitario}
                                        onChange={(e)=>setValorUnitario(e.target.value)}
                                    />                                         
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    width={6}
                                    placeholder="30"
                                    value={tempoEntregaMinimo}
                                    onChange={(e)=>setTempoEntregaMinimo(e.target.value)}
                                    >
                                        
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    width={6}
                                    placeholder="40"
                                    value={tempoEntregaMaximo}
                                    onChange={(e)=>setTempoEntregaMaximo(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Link to={'/list-produto'}>
                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Listar
                            </Button>
                            </Link>   

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={()=> salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
