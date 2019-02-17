funcionarioApp.controller('funcionarioCtrl', function ($scope, funcionarioService) {

    //Aqui estamos carregando todos os dados
    carregarFuncionarios();

    function carregarFuncionarios() {
        var listarFuncionarios = funcionarioService.getTodosFuncionarios();

        listarFuncionarios.then(
            function (d) {
                //se tudo der certo
                $scope.Funcionarios = d.data;
            },
            function () {
                alert('Ocorreu um erro ao tentar listar todos os funcionários');
            })
    }

    //Método responsável por adicionar cada propriedade de um Novo Funcionário:
    $scope.adicionarFuncionario = function () {

        var funcionario = {
            funcionarioId: $scope.funcionarioId,
            nome: $scope.nome,
            email: $scope.email,
            departamento: $scope.departamento,
            cargo: $scope.cargo
        };

        var adicionarInfos = funcionarioService.adicionarFuncionario(funcionario);

        adicionarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarFuncionarios();
                alert("Funcionário Adicionado com Sucesso!");

                $scope.limparDados();
            } else { alert("Funcionário não Adicionado!"); }
        },
            function () {
                alert("Ocorreu um erro ao tentar adicionar um Novo Funcionário!");
            });
    }

    //Limpar os campos após inserir os dados no db://Limpar os campos após inserir os dados no db:
    $scope.limparDados = function () {
        $scope.funcionarioId = "";
        $scope.nome = "";
        $scope.email = "";
        $scope.departamento = "";
        $scope.cargo = "";
    }


    //método responsável por atualizar funcionário por id
    $scope.atualizarFuncionarioPorId = function (funcionario) {
        $scope.atualizadoFuncionarioId = funcionario.FuncionarioId;
        $scope.atualizadoNome = funcionario.Nome;
        $scope.atualizadoEmail = funcionario.Email;
        $scope.atualizadoDepartamento = funcionario.Departamento;
        $scope.atualizadoCargo = funcionario.Cargo;

    }

    //metório responsável por atualizar dados do funcionário
    $scope.atualizarFuncionario = function () {
        var funcionario = {
            FuncionarioId:  $scope.atualizadoFuncionarioId,
            Nome: $scope.atualizadoNome,
            Email: $scope.atualizadoEmail,
            Departamento: $scope.atualizadoDepartamento,
            Cargo: $scope.atualizadoCargo
        }

        var atualizarInfos = funcionarioService.atualizarFuncionario(funcionario);

        atualizarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarFuncionarios();
                alert("Funcionário atualizado com sucesso.");
                $scope.limparDadosAtualizados();
            } else {
                alert("Funcionário não atualizado.");
            }

        }, function () {
            alert("Ocorreu um erro ao tentar atualizar o funcionário.");
        })
    }

    //método responsável por limpar dados depois de atualizar funcionário
    $scope.limparDadosAtualizados = function () {

        $scope.atualizadoFuncionarioId = '';
        $scope.atualizadoNome = '';
        $scope.atualizadoEmail = '';
        $scope.atualizadoDepartamento = '';
        $scope.atualizadoCargo = '';

    }



    //método responsável por atualizar funcionário por id
    $scope.excluirFuncionarioPorId = function (funcionario) {
        $scope.atualizadoFuncionarioId = funcionario.FuncionarioId;
        $scope.atualizadoNome = funcionario.Nome;
    }


    //método responsável por excluir funcionário por id
    $scope.atualizarFuncionarioPorId = function (funcionario) {
        $scope.excluirFuncionarioPorId = funcionario.FuncionarioId;
        $scope.atualizadoNome = funcionario.Nome;
        $scope.atualizadoEmail = funcionario.Email;
        $scope.atualizadoDepartamento = funcionario.Departamento;
        $scope.atualizadoCargo = funcionario.Cargo;

    }

    //Método responsável por excluir o Funcionario pelo Id:
    $scope.excluirFuncionario = function (AtualizadoFuncionarioId) {

        var excluirInfos = funcionarioService.excluirFuncionario($scope.atualizadoFuncionarioId);
        excluirInfos.then(function (d) {

            if (d.data.success === true) {
                carregarFuncionarios();

                alert("Funcionário excluído com Sucesso!");
            }
            else {
                alert("Funcionário não excluído!");
            }
        });
    }
    
    
})