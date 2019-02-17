funcionarioApp.service('funcionarioService', function ($http) {
    this.getTodosFuncionarios = function () {
        return $http.get("/Funcionario/GetFuncionario");
    }

    this.adicionarFuncionario = function (funcionario) {
        var request = $http({
            method: 'post',
            url: '/Funcionario/AdicionarFuncionario',
            data: funcionario
        });

        return request;
    }

    this.atualizarFuncionario = function (funcionario) {
        var request = $http({
            method: 'post',
            url: '/Funcionario/AtualizarFuncionario',
            data: funcionario
        })
        return request;
    }

    //Método responsável por Excluir Funcionário Por Id: Delete
    this.excluirFuncionario = function (AtualizadoFuncionarioId) {
        return $http.post('/Funcionario/ExcluirFuncionario/' + AtualizadoFuncionarioId);
    }
})