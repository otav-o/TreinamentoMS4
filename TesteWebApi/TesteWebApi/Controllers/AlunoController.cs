using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteWebApi.DTOs;
using TesteWebApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TesteWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlunoController : ControllerBase
    {
        // GET: api/<AlunoController>
        [HttpGet]
        public ActionResult<IEnumerable<AlunoDTO>> Get()
        {
            return alunos.Select(x => new AlunoDTO(x)).ToArray(); // expressão lambda cria uma nova coleção de AlunoDTO a partir de Aluno
            // já retorna um json
        }

        // GET api/<AlunoController>/5  https://localhost:44302/api/aluno/A3
        [HttpGet("{id}")]
        public ActionResult<AlunoDTO> GetById(string id) // o que importa é o attribute, e não o nome do método
        {
            var obj = alunos.Where(x => x.Id == id).FirstOrDefault();

            if (obj == null)
                return NotFound();

            return new AlunoDTO(obj); // receber e retornar DTOs, e não as entidades
        } 

        // POST api/<AlunoController>
        [HttpPost]
        public ActionResult<Aluno> Post([FromBody] AlunoDTO objDTO)
        {
            var ultimaMatricula = alunos.Max(x => x.Matricula);

            var objNovo = new Aluno();
            objNovo.Id = Guid.NewGuid().ToString();
            objNovo.Matricula = ultimaMatricula + 1; // não é o ideal!
            objNovo.Nome = objDTO.Nome;

            alunos.Add(objNovo);

            return CreatedAtAction(nameof(GetById), new { id = objNovo.Id }, new AlunoDTO(objNovo)); // nameof retorna o nome do método
        } //r etorna o objeto e onde ele é obtido

        // PUT api/<AlunoController>/5
        [HttpPut("{id}")]
        public ActionResult<Aluno> Put(string id, [FromBody] AlunoDTO objDto) // alteração: id do objeto a ser alterado e obj com as novas propriedades
        {
            if (id != objDto.Id)
                return BadRequest(); // retorna o erro 400

            var obj = alunos.Where(x => x.Id == id).FirstOrDefault();

            if (obj == null)
                return NotFound();

            obj.Nome = objDto.Nome;

            return NoContent(); // status 204

            // não dá para testar pelo navegador, só pelo PostMan

        }

        // DELETE api/<AlunoController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var obj = alunos.Where(x => x.Id == id).FirstOrDefault();
            if (obj == null)
                return NotFound();

            alunos.Remove(obj);

            return NoContent();
        }

        private static IList<Aluno> alunos = new List<Aluno>
        {
            new Aluno {Id = "A1", Matricula = 123, Nome = "Ana"},
            new Aluno {Id = "A2", Matricula = 124, Nome = "Bruno"},
            new Aluno {Id = "A3", Matricula = 125, Nome = "Carlos"}
        };
    }
}
