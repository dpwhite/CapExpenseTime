using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapExpenseTime.Data.Seeding;

namespace CapExpenseTime.Data
{
    public static class DbInitializer
    {
        public static async Task InitializeAsync(CapExpenseTimeContext context)
        {
            await using var transaction = await context.Database.BeginTransactionAsync();
            await CapExpenseTimeSeeding.Seed(context);
            await transaction.CommitAsync();
        }
    }
}
