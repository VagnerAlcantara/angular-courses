using CRUD_MVC5_AngularJs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CRUD_MVC5_AngularJs.Controllers
{
    public class FuncionarioController : Controller
    {
        public JsonResult GetFuncionario()
        {
            using (var db = new FuncionariosEntities())
            {
                List<Funcionario> listarFuncionario = db.Funcionarios.ToList();

                return Json(listarFuncionario, JsonRequestBehavior.AllowGet);

            }

        }

        //Funcionario/AdicionarFuncionario
        [HttpPost]
        public JsonResult AdicionarFuncionario(Funcionario funcionario)
        {
            if (funcionario != null)
            {
                using (var db = new FuncionariosEntities())
                {
                    db.Funcionarios.Add(funcionario);
                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        //Funcionario/AtualizarFuncionario
        [HttpPost]
        public JsonResult AtualizarFuncionario(Funcionario funcionario)
        {
            if (funcionario != null)
            {
                using (var db = new FuncionariosEntities())
                {
                    var funcionarioExistente = db.Funcionarios.Find(funcionario.FuncionarioId);

                    if (funcionarioExistente == null)
                        return Json(new { success = false });

                    funcionarioExistente.Cargo = funcionario.Cargo;
                    funcionarioExistente.Departamento = funcionario.Departamento;
                    funcionarioExistente.Email = funcionario.Email;
                    funcionarioExistente.Nome = funcionario.Nome;
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        //Funcionario/ExcluirFuncionario
        [HttpPost]
        public JsonResult ExcluirFuncionario(int id)
        {
            using (var db = new FuncionariosEntities())
            {
                var funcionarioExistente = db.Funcionarios.Find(id);

                if (funcionarioExistente == null)
                    return Json(new { success = false });

                db.Funcionarios.Remove(funcionarioExistente);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
    }
}