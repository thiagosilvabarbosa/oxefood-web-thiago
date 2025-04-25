import InputMask from 'comigo-tech-react-input-mask';
import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormEntregador () {
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
    return (
        
        <div>

            <MenuSistema tela={'entregador'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    width={7}
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    width={7}
                                    label='RG'>
                                    <InputMask
                                        required
                                        mask="9.999.999"
                                    /> 
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={6}>
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex:20/03/1985"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    required
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 99999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label = 'QTD Entregas Realizadas'
                                    width={6}>

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="R$ 99.99" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Rua'>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={4}>
                                </Form.Input>


                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Bairro'>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={11}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={4}>
                                    <InputMask 
                                        mask= '99.999-999'>
                                    </InputMask>
                                </Form.Input>

                            </Form.Group>    
                            <Form.Group widths={'equal'}>

                            <Form.Dropdown
                                label="UF"
                                placeholder="Selecione"
                                fluid
                                search
                                selection
                                options={estados}
                                />                                    
                            </Form.Group>

                            <Form.Group widths={'equal'}>
                                <Form.Input
                                label='Complemento'>

                                </Form.Input>
                            </Form.Group>

                            <Form.Group inline>
                                <label>Ativo</label>
                                <Form.Radio
                                    label='Sim'
                                    value='sim'
                                    checked={ativo === 'sim'}
                                    onChange={() => setAtivo('sim')}
                                />
                                <Form.Radio
                                    label='Não'
                                    value='nao'
                                    checked={ativo === 'nao'}
                                    onChange={() => setAtivo('nao')}
                                />
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
                                Voltar
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
