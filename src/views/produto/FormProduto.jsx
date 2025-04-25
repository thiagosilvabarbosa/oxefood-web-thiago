import InputMask from 'comigo-tech-react-input-mask';
import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormProduto () {

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
                                />

                                <Form.Input
                                    required
                                    fluid
                                    width={8}
                                    placeholder = "Informe o código do produto"
                                    label='Código do Produto'>
                                    
                                </Form.Input>

                            </Form.Group >

                            <Form.Group widths='equal'>

                                <Form.TextArea
                                    fluid
                                    label='Descrição'
                                    style={{ height: '90px'}} 
                                    placeholder = "Informe a descrição do produto"
                                    maxLength="100"
                                />

                            </Form.Group >


                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitario'
                                    width={10}>
                                        <InputMask 
                                        mask="R$ 99.99" 
                                        maskChar={null}
                                    />                                         
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    width={6}
                                    placeholder="30">
                                        
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    width={6}
                                    placeholder="40"
                                >
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

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
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
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
