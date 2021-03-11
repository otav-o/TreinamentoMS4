using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TesteWebApi.Models;

namespace TesteWebApi.Data
{
    public class TesteWebApiContext : DbContext
    {
        public TesteWebApiContext (DbContextOptions<TesteWebApiContext> options)
            : base(options)
        {
        }

        public DbSet<TesteWebApi.Models.Aluno> Aluno { get; set; }
    }
}
