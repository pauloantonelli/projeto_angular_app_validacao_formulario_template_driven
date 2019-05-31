import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.scss']
})
export class FormularioClienteComponent implements OnInit {

  public form;

  public formlularioInit = {
    nome: 'Paulo',
    email: '',
    senha: '',
  }
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

  }
  initForm(formulario) {
    formulario.form.value.nome = this.formlularioInit.nome;
    formulario.form.value.email = this.formlularioInit.email;
    formulario.form.value.senha = this.formlularioInit.senha;
  }
  onSubmit(formulario) {
    console.log(formulario);
    console.log(this.formlularioInit);
  }
  limpaFormulario(formulario, dados = '') {
    formulario.form.patchValue({
      nome: dados,
      email: dados,
      senha: dados,
      enderecos: {
        cep: dados,
        bairro: dados,
        cidade: dados,
        endereco1: dados,
        endereco2: dados,
        estado: dados,
      }
    });
  }
  preencheEndereco(formulario, dados) {
    formulario.form.patchValue({
      enderecos: {
        cep: dados.cep,
        bairro: dados.bairro,
        cidade: dados.localidade,
        endereco1: dados.logradouro,
        estado: dados.uf,
      }
    });
  }
  consultaCep(numerosCep, formulario) {
    const cep = numerosCep.replace(/\D/g, '');

    if (cep != '') {
      const validaCep = /^[0-9]{8}$/;

      if (validaCep.test(cep)) {
        this.httpClient.get('https://viacep.com.br/ws/' + cep + '/json').subscribe(
          (dados) => {
            if (dados != 'erro') {
              console.log('dados: ', dados);
              this.preencheEndereco(formulario, dados);
            } else {
              alert('CEP não encontrado! Tente novamente');
            }
          }
        );
      } else {
        this.limpaFormulario(formulario);
        alert('O  formato do CEP está incorreto! Por favor insira os 8 digitos do cep desejado');
      }
    } else {
      this.limpaFormulario(formulario);
    }
  }
}
