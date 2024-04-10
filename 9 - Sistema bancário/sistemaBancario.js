/*Sistema bancário
Ao errar a senha por 3 vezes seguidas, o cartão de banco do usuário é bloqueado. Thayná estava tentando fazer 
compras e errou sua senha por 3 vezes seguidas, até que recebeu a seguinte mensagem: “Senha incorreta. 
Seu cartão foi bloqueado. Se deseja ir a uma agência, digite “A” ou se deseja desbloquear com sua chave de 
segurança, digite “D”.

Se Thayná digitar “A”, uma mensagem será exibida para ela, dizendo que será um prazer atendê-la em uma agência
Se Thayná digitar “D”, a mensagem será exibida será: “Digite a chave de segurança que foi enviada para seu 
e-mail cadastrado.”
Para fins de testes, considere que a chave de segurança que Thayná recebeu é 9999
Se Thayná digitar corretamente a chave, ela receberá uma mensagem pedindo para redefinir a senha
Se Thayná digitar incorretamente a chave, ela deverá ir a uma agência e deve ser avisada sobre isso
Crie a lógica por trás de toda essa situação.
*/
let chaveSeguranca;
let senhaRedefinida;
prompt('Informe a senha:');
let opcao = prompt('Senha incorreta. Seu cartão foi bloqueado. Se desejar ir a uma agência, digite "A" ou se '+
    'deseja desbloquear com sua chave de segurança, digite "D".');

if (opcao == 'A') {
    document.write('Será um prazer atendê-la em uma agência.');
} else if (opcao == 'D') {
    chaveSeguranca = prompt('Digite a chave de segurança que foi enviada para seu e-mail cadastrado');
    if (chaveSeguranca == 9999){
        senhaRedefinida = prompt('Redefina a senha:');
    } else {
        document.write('Você deve ir a uma agência!');
    }
}



