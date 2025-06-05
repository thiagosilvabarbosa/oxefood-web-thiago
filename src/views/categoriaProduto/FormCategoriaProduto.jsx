import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function FormCategoriaProduto(){
    const[descricao, setDescricao] = useState();

    const [idCategoriaProduto, setIdCategoriaProduto] = useState();
    const { state } = useLocation();

        useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/categoriaproduto/" + state.id)
                .then((response) => {
                    setIdCategoriaProduto(response.data.id)
                    setDescricao(response.data.descricao)
                })
        }
    }, [state])

    function salvar() {

        let categoriaRequest = {
            descricao: descricao,
        }

        if (idCategoriaProduto != null) {
            axios.put("http://localhost:8080/api/categoriaproduto/" + idCategoriaProduto, categoriaRequest)
                .then((response) => { console.log('Categoria do produto alterada com sucesso.') })
                .catch((error) => { console.log('Erro ao alterar uma categoria.') })

        } else {
            axios.post("http://localhost:8080/api/categoriaproduto", categoriaRequest)
                .then((response) => {
                    console.log('Categoria de produto cadastrada com sucesso.')
                    // console.log(categoriaRequest)
                })
                .catch((error) => {
                    console.log("Erro ao inclui uma categoria")
                })
        }

    }

    return (
        <div>
            <MenuSistema tela='categoriaProduto' />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >
                    {idCategoriaProduto === undefined &&
                        <h2> 
                            <span style={{ color: 'darkgray' }}> Categoria do Produto &nbsp;<Icon name='angle double right' size="small" /> </span> 
                            Cadastro
                        </h2>
                    }
                    {idCategoriaProduto !== undefined &&
                        <h2> 
                            <span style={{ color: 'darkgray' }}> Categoria do Produto &nbsp;<Icon name='angle double right' size="small" /> </span> 
                            Alteração
                        </h2>
                    }

                    <Divider />
                    <div style={{ marginTop: '4%' }}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Descrição: '
                                    maxLength="10"
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                />
                            </Form.Group>
                        </Form>

                        <div style={{ marginTop: '4%' }}>
                            <Link to={'/list-produto-categoria'}>
                                <Button
                                    type="button"
                                    inverted
                                    circular
                                    color='orange'
                                    icon
                                    labelPosition="left"
                                >
                                    <Icon name='reply' />
                                    Listar
                                </Button>
                            </Link>

                            <Button
                                type="button"
                                inverted
                                circular
                                color='blue'
                                icon
                                labelPosition="left"
                                floated="right"
                                onClick={() => salvar()}
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