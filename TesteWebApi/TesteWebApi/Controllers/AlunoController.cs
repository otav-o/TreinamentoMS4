﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TesteWebApi.Data;
using TesteWebApi.Models;

namespace TesteWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlunoController : ControllerBase
    {
        private readonly TesteWebApiContext _context;

        public AlunoController(TesteWebApiContext context)
        {
            _context = context;
        }

        // GET: api/Aluno
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Aluno>>> GetAluno() // obter uma lista de alunos
        {
            return await _context.Aluno.ToListAsync();
        }

        // GET: api/Aluno/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Aluno>> GetAluno(string id) //retornar um único aluno
        {
            var aluno = await _context.Aluno.FindAsync(id);

            if (aluno == null)
            {
                return NotFound();
            }

            return aluno;
        }

        // PUT: api/Aluno/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAluno(string id, Aluno aluno) // modificar um aluno
        {
            if (id != aluno.Id)
            {
                return BadRequest();
            }

            _context.Entry(aluno).State = EntityState.Modified; // muda o estado para modificado: está pronto para ser alterado na base de dados

            try
            {
                await _context.SaveChangesAsync(); // async
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AlunoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Aluno
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Aluno>> PostAluno(Aluno aluno)
        {
            _context.Aluno.Add(aluno);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AlunoExists(aluno.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAluno", new { id = aluno.Id }, aluno);
        }

        // DELETE: api/Aluno/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAluno(string id)
        {
            var aluno = await _context.Aluno.FindAsync(id); // obtido do EF
            if (aluno == null)
            {
                return NotFound();
            }

            _context.Aluno.Remove(aluno);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AlunoExists(string id)
        {
            return _context.Aluno.Any(e => e.Id == id); // apenas checa
        }
    }
}
