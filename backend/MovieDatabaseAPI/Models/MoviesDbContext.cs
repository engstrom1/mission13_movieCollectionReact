using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MovieDatabaseAPI.Models
{
    public class MoviesDbContext : DbContext
    {

        public MoviesDbContext(DbContextOptions<MoviesDbContext> options) : base(options) 
        {

        }

        public DbSet<Movie> Movies {get;set; }
    }
}
