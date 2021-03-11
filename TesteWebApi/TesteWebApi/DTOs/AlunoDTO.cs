﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteWebApi.Models;

namespace TesteWebApi.DTOs
{
    public class AlunoDTO
    {
        public AlunoDTO() { }
        public AlunoDTO(Aluno obj)
        {
            Id = obj.Id;
            Nome = obj.Nome;
        }
        public string Id { get; set; }
        public string Nome { get; set; }
    }
}
